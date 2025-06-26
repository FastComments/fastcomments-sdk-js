import { createURLQueryString, isAPIError, debounce, makeRequest } from './utils.js';
import type { LiveEvent, EventLogEntry } from '../generated/index.js';

export interface SubscribeToChangesResult {
    close: () => void;
}

export interface SubscribeToChangesConfig {
    tenantId: string;
    urlId: string;
    apiHost?: string;
    wsHost?: string;
}

interface GetEventLogResponse {
    events?: Array<EventLogEntry>;
    status: string;
}

export default function subscribeToChanges(
    config: SubscribeToChangesConfig,
    tenantIdWS: string,
    urlIdWS: string,
    userIdWS: string,
    handleLiveEvent: (event: LiveEvent) => boolean,
    onConnectionStatusChange?: (isConnected: boolean, lastLiveEventTime?: number) => void,
    lastLiveEventTime?: number
): SubscribeToChangesResult {
    try {
        let isIntentionallyClosed = false;

        function extractCommentIdFromEvent(liveEvent: LiveEvent): string | undefined {
            if (liveEvent.type === 'new-comment' && liveEvent.comment) {
                return liveEvent.comment._id;
            }
        }

        async function fetchEventLog(startTime: number, endTime: number): Promise<void> {
            return new Promise((resolve) => {
                debounce('fetchEventLog:' + config.tenantId, async () => {
                    try {
                        const response = await makeRequest<GetEventLogResponse>(
                            config,
                            'GET',
                            '/event-log/' + config.tenantId + '/' + createURLQueryString({
                                urlId: config.urlId,
                                startTime,
                                endTime,
                                userIdWS
                            })
                        );

                        if (!isAPIError(response) && response.events) {
                            const eventsParsed: LiveEvent[] = response.events.map(event => JSON.parse(event.data) as LiveEvent);

                            for (const eventDataParsed of eventsParsed) {
                                if (eventDataParsed.timestamp) {
                                    lastLiveEventTime = Math.max(lastLiveEventTime!, eventDataParsed.timestamp);
                                }
                                handleLiveEvent(eventDataParsed);
                            }
                        }
                        resolve();
                    } catch (error) {
                        console.error('FastComments: fetchEventLog FAILURE', error);
                        if (!isIntentionallyClosed) {
                            setTimeout(() => {
                                if (!isIntentionallyClosed) {
                                    fetchEventLog(startTime, Date.now());
                                }
                            }, 30000 * Math.random());
                        }
                        resolve();
                    }
                }, 2000);
            });
        }

        const wsHost = config.wsHost || 'wss://fastcomments.com';
        const socket = new (globalThis as any).WebSocket(wsHost + '/sub' + createURLQueryString({
            urlId: urlIdWS,
            userIdWS,
            tenantIdWS
        }));

        socket.onopen = function () {
            if (isIntentionallyClosed) {
                return;
            }

            setInterval(() => {
                if (socket.readyState === 1) { // WebSocket.OPEN
                    socket.send('ping');
                }
            }, 60000);

            if (lastLiveEventTime) {
                fetchEventLog(lastLiveEventTime, Date.now());
            }

            onConnectionStatusChange && onConnectionStatusChange(true, lastLiveEventTime);
        };

        socket.onerror = function () {
            if (lastLiveEventTime) {
                setTimeout(() => {
                    fetchEventLog(lastLiveEventTime!, Date.now());
                }, 30000 * Math.random());
            }
        };

        socket.onclose = function () {
            if (!lastLiveEventTime) {
                lastLiveEventTime = Date.now();
            }

            if (!isIntentionallyClosed) {
                onConnectionStatusChange && onConnectionStatusChange(false, lastLiveEventTime);
                setTimeout(() => {
                    subscribeToChanges(config, tenantIdWS, urlIdWS, userIdWS, handleLiveEvent, onConnectionStatusChange, lastLiveEventTime);
                }, 4000 * Math.random());
            }
        };

        socket.onmessage = function (event: MessageEvent) {
            if (isIntentionallyClosed) {
                return;
            }

            const eventDataParsed: LiveEvent = JSON.parse(event.data) as LiveEvent;
            if (eventDataParsed.timestamp) {
                lastLiveEventTime = Math.max(lastLiveEventTime!, eventDataParsed.timestamp);
            }
            handleLiveEvent(eventDataParsed);
        };

        return {
            close: function () {
                isIntentionallyClosed = true;
                socket && socket.close();
            }
        };
    } catch (e) {
        console.error(e);
        return {
            close: () => {}
        };
    }
}

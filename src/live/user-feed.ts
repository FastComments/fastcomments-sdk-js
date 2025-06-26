import subscribeToChanges from './subscribe-to-changes.js';
import type {
  SubscribeToChangesResult,
  SubscribeToChangesConfig,
} from './subscribe-to-changes.js';
import type { LiveEvent } from '../generated/index.js';

export interface UserFeedConfig {
  /**
   * You can get userIdWS after calling getComments in the public API. It's a token for their session.
   */
  userIdWS: string;
  apiHost?: string;
  wsHost?: string;
}

/**
 * Subscribe to a user's live events (notifications, mentions, etc.)
 * This connects to the user's personal feed stream.
 *
 * @param config Configuration for the user feed subscription
 * @param handleLiveEvent Callback function to handle incoming live events
 * @param onConnectionStatusChange Optional callback for connection status changes
 * @param lastLiveEventTime Optional timestamp of the last received event
 * @returns SubscribeToChangesResult with close() method to terminate the subscription
 */
export function subscribeToUserFeed(
  config: UserFeedConfig,
  handleLiveEvent: (event: LiveEvent) => boolean,
  onConnectionStatusChange?: (
    isConnected: boolean,
    lastLiveEventTime?: number
  ) => void,
  lastLiveEventTime?: number
): SubscribeToChangesResult {
  const subscribeConfig: SubscribeToChangesConfig = {
    tenantId: '__internal_profiles',
    urlId: `__internal_profiles:${config.userIdWS}`,
    apiHost: config.apiHost,
    wsHost: config.wsHost,
  };

  const tenantIdWS = '__internal_profiles';
  const urlIdWS = `__internal_profiles:${config.userIdWS}`;

  return subscribeToChanges(
    subscribeConfig,
    tenantIdWS,
    urlIdWS,
    config.userIdWS,
    handleLiveEvent,
    onConnectionStatusChange,
    lastLiveEventTime
  );
}

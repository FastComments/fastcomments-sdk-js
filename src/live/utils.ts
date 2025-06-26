import axios, { AxiosResponse } from 'axios';

export function createURLQueryString(obj: Record<string, any>): string {
    const result: string[] = [];
    for (const key in obj) {
        const value = obj[key];
        if (value) {
            result.push(key + '=' + encodeURIComponent(obj[key]));
        }
    }
    return '?' + result.join('&');
}

export function isAPIError(obj: any): boolean {
    return obj && typeof obj === 'object' && 'status' in obj && obj.status === 'failed';
}

const debouncers: Record<string, NodeJS.Timeout> = {};

export function debounce(name: string, fn: () => void | Promise<any>, delay = 300): void {
    if (debouncers[name]) {
        clearTimeout(debouncers[name]);
    }

    debouncers[name] = setTimeout(async () => {
        try {
            await fn();
        } finally {
            delete debouncers[name];
        }
    }, delay);
}

export async function makeRequest<ResponseType>(
    config: { apiHost?: string; tenantId?: string },
    method: string,
    originalUrl: string,
    body?: any | null,
    attemptsRemaining = 2
): Promise<ResponseType> {
    const url = (config.apiHost || 'https://fastcomments.com') + originalUrl;

    try {
        const response: AxiosResponse<ResponseType> = await axios({
            method: method as any,
            url,
            data: body,
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error: any) {
        if (error.response && error.response.status !== 400 && attemptsRemaining > 0 && method === 'GET') {
            await new Promise(resolve => setTimeout(resolve, 1500 * Math.random()));
            return makeRequest(config, method, originalUrl, body, attemptsRemaining - 1);
        } else {
            throw error.response?.data || error;
        }
    }
}
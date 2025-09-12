// Browser-safe exports - no Node.js dependencies
// Safe for use in browsers and environments without Node.js crypto

// Export the generated API client (fetch-based, works in browsers)
export * from './generated/src/apis';
export * from './generated/src/models';
export { Configuration } from './generated/src/runtime';

// Re-export commonly used types and classes for convenience
export { DefaultApi, PublicApi, HiddenApi } from './generated/src/apis';

// Export client-safe live utilities (fetch-based WebSocket fallbacks)
export { createURLQueryString, isAPIError, debounce, makeRequest } from './live/utils';
export { default as subscribeToChanges } from './live/subscribe-to-changes';
export type { SubscribeToChangesResult, SubscribeToChangesConfig } from './live/subscribe-to-changes';
export { subscribeToUserFeed } from './live/user-feed';
export type { UserFeedConfig } from './live/user-feed';

// Export live event types
export type { LiveEvent, LiveEventType, EventLogEntry, PubSubComment, PubSubVote, FeedPost, UserNotification } from './generated/src/index';

// Export SSO types only (no Node.js crypto implementations)
export type * from './sso/types';

// Browser-safe SDK class
import { DefaultApi, PublicApi, HiddenApi } from './generated/src/apis';
import { Configuration } from './generated/src/runtime';

export interface FastCommentsBrowserSDKConfig {
  apiKey?: string;
  basePath?: string;
}

export class FastCommentsBrowserSDK {
  private config: FastCommentsBrowserSDKConfig;
  private _defaultApi: DefaultApi | null = null;
  private _publicApi: PublicApi | null = null;
  private _hiddenApi: HiddenApi | null = null;

  constructor(config: FastCommentsBrowserSDKConfig = {}) {
    this.config = { ...config };
    if (!this.config.basePath) {
      this.config.basePath = 'https://fastcomments.com';
    }
  }

  private getConfiguration(): Configuration {
    return new Configuration({
      apiKey: this.config.apiKey,
      basePath: this.config.basePath,
    });
  }

  public get defaultApi(): DefaultApi {
    if (!this._defaultApi) {
      this._defaultApi = new DefaultApi(this.getConfiguration());
    }
    return this._defaultApi;
  }

  public get publicApi(): PublicApi {
    if (!this._publicApi) {
      this._publicApi = new PublicApi(this.getConfiguration());
    }
    return this._publicApi;
  }

  public get hiddenApi(): HiddenApi {
    if (!this._hiddenApi) {
      this._hiddenApi = new HiddenApi(this.getConfiguration());
    }
    return this._hiddenApi;
  }

  /**
   * Update the API key for authenticated requests
   */
  setApiKey(apiKey: string): void {
    this.config.apiKey = apiKey;
    this._defaultApi = null;
    this._publicApi = null;
    this._hiddenApi = null;
  }

  /**
   * Update the base path for API requests
   */
  setBasePath(basePath: string): void {
    this.config.basePath = basePath;
    this._defaultApi = null;
    this._publicApi = null;
    this._hiddenApi = null;
  }
}

// Export a convenience function to create a new browser SDK instance
export function createFastCommentsBrowserSDK(config?: FastCommentsBrowserSDKConfig): FastCommentsBrowserSDK {
  return new FastCommentsBrowserSDK(config);
}
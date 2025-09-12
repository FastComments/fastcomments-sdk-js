// Export the generated API client
export * from './generated/src/apis';
export * from './generated/src/models';
export { Configuration } from './generated/src/runtime';

// Re-export commonly used types and classes for convenience
export { DefaultApi, PublicApi, HiddenApi } from './generated/src/apis';

// Export SSO functionality
export * from './sso';

// Export a default factory function for easy initialization
import { DefaultApi, PublicApi, HiddenApi } from './generated/src/apis';
import { Configuration } from './generated/src/runtime';

export interface FastCommentsSDKConfig {
  apiKey?: string;
  basePath?: string;
}

export class FastCommentsSDK {
  private config: FastCommentsSDKConfig;
  private _defaultApi: DefaultApi | null = null;
  private _publicApi: PublicApi | null = null;
  private _hiddenApi: HiddenApi | null = null;

  constructor(config: FastCommentsSDKConfig = {}) {
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

// Export a convenience function to create a new SDK instance
export function createFastCommentsSDK(config?: FastCommentsSDKConfig): FastCommentsSDK {
  return new FastCommentsSDK(config);
}
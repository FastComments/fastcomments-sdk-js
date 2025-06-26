// Export the generated API client
export * from './generated/api';
export * from './generated/model';
export { Configuration, ConfigurationParameters } from './generated/configuration';

// Re-export commonly used types and classes for convenience
export { DefaultApi, PublicApi, HiddenApi } from './generated/api';

// Export a default factory function for easy initialization
import { DefaultApi, PublicApi, HiddenApi } from './generated/api';
import { Configuration } from './generated/configuration';

export interface FastCommentsSDKConfig {
  apiKey?: string;
  basePath?: string;
}

export class FastCommentsSDK {
  private config: Configuration;
  public readonly defaultApi: DefaultApi;
  public readonly publicApi: PublicApi;
  public readonly hiddenApi: HiddenApi;

  constructor(config: FastCommentsSDKConfig = {}) {
    const configuration = new Configuration({
      apiKey: config.apiKey,
      basePath: config.basePath || 'https://fastcomments.com',
    });
    
    this.config = configuration;
    this.defaultApi = new DefaultApi(configuration);
    this.publicApi = new PublicApi(configuration);
    this.hiddenApi = new HiddenApi(configuration);
  }

  /**
   * Update the API key for authenticated requests
   */
  setApiKey(apiKey: string): void {
    this.config.apiKey = apiKey;
  }

  /**
   * Update the base path for API requests
   */
  setBasePath(basePath: string): void {
    this.config.basePath = basePath;
  }
}

// Export a convenience function to create a new SDK instance
export function createFastCommentsSDK(config?: FastCommentsSDKConfig): FastCommentsSDK {
  return new FastCommentsSDK(config);
}
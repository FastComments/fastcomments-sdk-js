// Server-only exports - includes Node.js dependencies
// Use this for Node.js server environments

// Export everything from browser (APIs, types, live utilities)
export * from './browser';

// Export SSO functionality (requires Node.js crypto)
export * from './sso';

// Export full server SDK (browser SDK + SSO)
import { FastCommentsBrowserSDK, type FastCommentsBrowserSDKConfig } from './browser';

export interface FastCommentsServerSDKConfig extends FastCommentsBrowserSDKConfig {
  apiKey?: string;
  basePath?: string;
}

export class FastCommentsServerSDK extends FastCommentsBrowserSDK {
  constructor(config: FastCommentsServerSDKConfig = {}) {
    super(config);
  }
}

// Alias the full SDK for compatibility
export const FastCommentsSDK = FastCommentsServerSDK;
export type FastCommentsSDKConfig = FastCommentsServerSDKConfig;

// Export a convenience function to create a new server SDK instance  
export function createFastCommentsSDK(config?: FastCommentsServerSDKConfig): FastCommentsServerSDK {
  return new FastCommentsServerSDK(config);
}
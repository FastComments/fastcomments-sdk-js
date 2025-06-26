import { SecureSSOPayloadBuilder } from './SecureSSOPayload';
import { 
  SecureSSOUserData, 
  SimpleSSOUserData, 
  SSOConfig, 
  CompleteSSOConfig,
  SecureSSOPayload 
} from './types';

/**
 * Main FastComments SSO class that provides both secure and simple SSO functionality
 */
export class FastCommentsSSO {
  private config: SSOConfig;
  private secureSSOPayload?: SecureSSOPayload;
  private simpleSSOUserData?: SimpleSSOUserData;
  private cachedToken?: string;

  /**
   * Constructor for secure SSO
   */
  constructor(secureSSOPayload: SecureSSOPayload, config?: SSOConfig);
  /**
   * Constructor for simple SSO
   */
  constructor(simpleSSOUserData: SimpleSSOUserData, config?: SSOConfig);
  constructor(
    payloadOrUserData: SecureSSOPayload | SimpleSSOUserData,
    config: SSOConfig = {}
  ) {
    this.config = config;
    
    if (this.isSecureSSOPayload(payloadOrUserData)) {
      this.secureSSOPayload = payloadOrUserData;
    } else {
      this.simpleSSOUserData = payloadOrUserData;
    }
  }

  /**
   * Static factory method for creating secure SSO
   */
  static createSecure(apiKey: string, userData: SecureSSOUserData, config: SSOConfig = {}): FastCommentsSSO {
    const payloadBuilder = new SecureSSOPayloadBuilder(apiKey, userData);
    const payload = payloadBuilder.getPayload();
    return new FastCommentsSSO(payload, config);
  }

  /**
   * Static factory method for creating simple SSO
   */
  static createSimple(userData: SimpleSSOUserData, config: SSOConfig = {}): FastCommentsSSO {
    return new FastCommentsSSO(userData, config);
  }

  /**
   * Type guard to check if payload is SecureSSOPayload
   */
  private isSecureSSOPayload(obj: any): obj is SecureSSOPayload {
    return obj && typeof obj === 'object' && 
           'userDataJSONBase64' in obj && 
           'verificationHash' in obj && 
           'timestamp' in obj;
  }

  /**
   * Generates the SSO token for transmission (secure SSO)
   */
  prepareToSend(): CompleteSSOConfig {
    if (this.secureSSOPayload) {
      return {
        ...this.config,
        userDataJSONBase64: this.secureSSOPayload.userDataJSONBase64,
        verificationHash: this.secureSSOPayload.verificationHash,
        timestamp: this.secureSSOPayload.timestamp
      };
    }
    
    throw new Error('prepareToSend() can only be called on secure SSO instances');
  }

  /**
   * Creates JSON token from payload data (simple SSO)
   */
  createToken(): string {
    if (this.cachedToken) {
      return this.cachedToken;
    }

    if (this.simpleSSOUserData) {
      // For simple SSO, return the user data with auth URLs
      const tokenData = {
        ...this.simpleSSOUserData,
        ...this.config
      };
      this.cachedToken = JSON.stringify(tokenData);
      return this.cachedToken;
    }

    throw new Error('createToken() can only be called on simple SSO instances');
  }

  /**
   * Creates a token suitable for use with the API (either secure or simple)
   */
  getToken(): string | CompleteSSOConfig {
    if (this.secureSSOPayload) {
      return this.prepareToSend();
    } else if (this.simpleSSOUserData) {
      return this.createToken();
    }
    
    throw new Error('No SSO data available');
  }

  /**
   * Clears cached token
   */
  resetToken(): void {
    this.cachedToken = undefined;
  }

  /**
   * Updates the SSO configuration
   */
  updateConfig(config: Partial<SSOConfig>): void {
    this.config = { ...this.config, ...config };
    this.resetToken(); // Clear cache when config changes
  }

  /**
   * Gets the current configuration
   */
  getConfig(): SSOConfig {
    return { ...this.config };
  }

  /**
   * Checks if this is a secure SSO instance
   */
  isSecure(): boolean {
    return !!this.secureSSOPayload;
  }

  /**
   * Checks if this is a simple SSO instance
   */
  isSimple(): boolean {
    return !!this.simpleSSOUserData;
  }
}
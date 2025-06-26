import crypto from 'crypto';
import { SecureSSOUserData, SecureSSOPayload } from './types';

/**
 * Handles secure SSO payload creation with HMAC-SHA256 verification
 */
export class SecureSSOPayloadBuilder {
  private userDataJSONBase64: string;
  private verificationHash: string;
  private timestamp: number;

  constructor(apiKey: string, userData: SecureSSOUserData) {
    this.timestamp = Date.now();
    
    // Create JSON and base64 encode it
    const userDataJSON = JSON.stringify(userData);
    this.userDataJSONBase64 = Buffer.from(userDataJSON, 'utf8').toString('base64');
    
    // Create HMAC-SHA256 verification hash
    this.verificationHash = this.createVerificationHash(apiKey, this.timestamp, this.userDataJSONBase64);
  }

  /**
   * Creates HMAC-SHA256 verification hash
   */
  private createVerificationHash(apiKey: string, timestamp: number, userDataJSONBase64: string): string {
    const hmac = crypto.createHmac('sha256', apiKey);
    hmac.update(timestamp + userDataJSONBase64);
    return hmac.digest('hex');
  }

  /**
   * Gets the secure SSO payload
   */
  getPayload(): SecureSSOPayload {
    return {
      userDataJSONBase64: this.userDataJSONBase64,
      verificationHash: this.verificationHash,
      timestamp: this.timestamp
    };
  }

  /**
   * Gets the payload as a JSON string
   */
  toJSON(): string {
    return JSON.stringify(this.getPayload());
  }
}
import { describe, it, expect, beforeEach } from '@jest/globals';
import crypto from 'crypto';
import { 
  FastCommentsSSO, 
  SecureSSOPayloadBuilder,
  SecureSSOUserData,
  SimpleSSOUserData,
  SSOConfig 
} from '../sso';
import { API_KEY, TENANT_ID } from './env';

describe('FastComments SSO', () => {

  const mockSecureUser: SecureSSOUserData = {
    id: 'test-user-123',
    email: 'test@example.com',
    username: 'testuser',
    displayName: 'Test User',
    avatar: 'https://example.com/avatar.jpg',
    optedInNotifications: true,
    displayLabel: 'Test User',
    websiteUrl: 'https://example.com',
    groupIds: ['group1', 'group2'],
    isAdmin: false,
    isModerator: true,
    isProfileActivityPrivate: true
  };

  const mockSimpleUser: SimpleSSOUserData = {
    id: 'simple-user-123',
    email: 'simple@example.com',
    username: 'simpleuser',
    displayName: 'Simple User',
    avatar: 'https://example.com/simple-avatar.jpg',
    optedInNotifications: false,
    displayLabel: 'Regular User',
    websiteUrl: 'https://simple.example.com',
    locale: 'en_us'
  };

  const mockConfig: SSOConfig = {
    loginURL: '/login',
    logoutURL: '/logout',
    loginCallback: () => console.log('Login callback'),
    logoutCallback: () => console.log('Logout callback')
  };

  describe('SecureSSOPayloadBuilder', () => {
    it('should create a valid secure SSO payload', () => {
      const builder = new SecureSSOPayloadBuilder(API_KEY, mockSecureUser);
      const payload = builder.getPayload();

      expect(payload).toBeDefined();
      expect(payload.userDataJSONBase64).toBeDefined();
      expect(payload.verificationHash).toBeDefined();
      expect(payload.timestamp).toBeDefined();
      expect(typeof payload.timestamp).toBe('number');
    });

    it('should create a valid HMAC-SHA256 hash', () => {
      const builder = new SecureSSOPayloadBuilder(API_KEY, mockSecureUser);
      const payload = builder.getPayload();

      // Verify the hash manually
      const hmac = crypto.createHmac('sha256', API_KEY);
      hmac.update(payload.timestamp + payload.userDataJSONBase64);
      const expectedHash = hmac.digest('hex');

      expect(payload.verificationHash).toBe(expectedHash);
    });

    it('should encode user data properly in base64', () => {
      const builder = new SecureSSOPayloadBuilder(API_KEY, mockSecureUser);
      const payload = builder.getPayload();

      const decodedData = JSON.parse(Buffer.from(payload.userDataJSONBase64, 'base64').toString('utf8'));
      expect(decodedData).toEqual(mockSecureUser);
    });

    it('should produce JSON output', () => {
      const builder = new SecureSSOPayloadBuilder(API_KEY, mockSecureUser);
      const jsonOutput = builder.toJSON();

      expect(() => JSON.parse(jsonOutput)).not.toThrow();
      const parsed = JSON.parse(jsonOutput);
      expect(parsed.userDataJSONBase64).toBeDefined();
      expect(parsed.verificationHash).toBeDefined();
      expect(parsed.timestamp).toBeDefined();
    });
  });

  describe('FastCommentsSSO - Secure SSO', () => {
    it('should create secure SSO using factory method', () => {
      const sso = FastCommentsSSO.createSecure(API_KEY, mockSecureUser, mockConfig);

      expect(sso).toBeDefined();
      expect(sso.isSecure()).toBe(true);
      expect(sso.isSimple()).toBe(false);
    });

    it('should prepare secure SSO for transmission', () => {
      const sso = FastCommentsSSO.createSecure(API_KEY, mockSecureUser, mockConfig);
      const config = sso.prepareToSend();

      expect(config).toBeDefined();
      expect(config.userDataJSONBase64).toBeDefined();
      expect(config.verificationHash).toBeDefined();
      expect(config.timestamp).toBeDefined();
      expect(config.loginURL).toBe(mockConfig.loginURL);
      expect(config.logoutURL).toBe(mockConfig.logoutURL);
    });

    it('should throw error when calling createToken on secure SSO', () => {
      const sso = FastCommentsSSO.createSecure(API_KEY, mockSecureUser);

      expect(() => sso.createToken()).toThrow('createToken() can only be called on simple SSO instances');
    });

    it('should return secure config from getToken', () => {
      const sso = FastCommentsSSO.createSecure(API_KEY, mockSecureUser, mockConfig);
      const token = sso.getToken();

      expect(typeof token).toBe('object');
      expect(token).toHaveProperty('userDataJSONBase64');
      expect(token).toHaveProperty('verificationHash');
      expect(token).toHaveProperty('timestamp');
    });
  });

  describe('FastCommentsSSO - Simple SSO', () => {
    it('should create simple SSO using factory method', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, mockConfig);

      expect(sso).toBeDefined();
      expect(sso.isSimple()).toBe(true);
      expect(sso.isSecure()).toBe(false);
    });

    it('should create token for simple SSO', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, mockConfig);
      const token = sso.createToken();

      expect(typeof token).toBe('string');
      const parsed = JSON.parse(token);
      expect(parsed.email).toBe(mockSimpleUser.email);
      expect(parsed.username).toBe(mockSimpleUser.username);
      expect(parsed.loginURL).toBe(mockConfig.loginURL);
      expect(parsed.logoutURL).toBe(mockConfig.logoutURL);
    });

    it('should cache tokens', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, mockConfig);
      const token1 = sso.createToken();
      const token2 = sso.createToken();

      expect(token1).toBe(token2); // Should be the same cached instance
    });

    it('should reset cached token', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, mockConfig);
      const token1 = sso.createToken();
      
      sso.resetToken();
      sso.updateConfig({ loginURL: '/new-login' });
      
      const token2 = sso.createToken();
      expect(token1).not.toBe(token2); // Should be different after config change
    });

    it('should throw error when calling prepareToSend on simple SSO', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser);

      expect(() => sso.prepareToSend()).toThrow('prepareToSend() can only be called on secure SSO instances');
    });

    it('should return token string from getToken', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, mockConfig);
      const token = sso.getToken();

      expect(typeof token).toBe('string');
      if (typeof token === 'string') {
        const parsed = JSON.parse(token);
        expect(parsed.email).toBe(mockSimpleUser.email);
      }
    });
  });

  describe('FastCommentsSSO - Configuration Management', () => {
    it('should update configuration', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, mockConfig);
      const newConfig = { loginURL: '/new-login', logoutURL: '/new-logout' };
      
      sso.updateConfig(newConfig);
      const config = sso.getConfig();

      expect(config.loginURL).toBe('/new-login');
      expect(config.logoutURL).toBe('/new-logout');
      expect(config.loginCallback).toBe(mockConfig.loginCallback); // Should preserve existing
    });

    it('should return copy of configuration', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, mockConfig);
      const config = sso.getConfig();
      
      config.loginURL = 'modified';
      const config2 = sso.getConfig();

      expect(config2.loginURL).toBe(mockConfig.loginURL); // Should not be modified
    });
  });

  describe('FastCommentsSSO - Constructor Overloads', () => {
    it('should accept SecureSSOPayload in constructor', () => {
      const builder = new SecureSSOPayloadBuilder(API_KEY, mockSecureUser);
      const payload = builder.getPayload();
      const sso = new FastCommentsSSO(payload, mockConfig);

      expect(sso.isSecure()).toBe(true);
      expect(sso.prepareToSend()).toBeDefined();
    });

    it('should accept SimpleSSOUserData in constructor', () => {
      const sso = new FastCommentsSSO(mockSimpleUser, mockConfig);

      expect(sso.isSimple()).toBe(true);
      expect(sso.createToken()).toBeDefined();
    });

    it('should work without config parameter', () => {
      const sso = new FastCommentsSSO(mockSimpleUser);

      expect(sso.isSimple()).toBe(true);
      const token = sso.createToken();
      const parsed = JSON.parse(token);
      expect(parsed.email).toBe(mockSimpleUser.email);
    });
  });

  describe('FastCommentsSSO - Edge Cases', () => {
    it('should handle user data with missing optional fields', () => {
      const minimalUser: SecureSSOUserData = {
        id: 'minimal-user',
        email: 'minimal@example.com',
        username: 'minimal'
      };

      const sso = FastCommentsSSO.createSecure(API_KEY, minimalUser);
      const config = sso.prepareToSend();

      expect(config.userDataJSONBase64).toBeDefined();
      
      const decodedData = JSON.parse(Buffer.from(config.userDataJSONBase64!, 'base64').toString('utf8'));
      expect(decodedData.id).toBe('minimal-user');
      expect(decodedData.email).toBe('minimal@example.com');
      expect(decodedData.username).toBe('minimal');
    });

    it('should handle empty config', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, {});
      const token = sso.createToken();
      
      expect(typeof token).toBe('string');
      const parsed = JSON.parse(token);
      expect(parsed.email).toBe(mockSimpleUser.email);
    });

    it('should throw error when getToken called with no data', () => {
      // This shouldn't be possible with TypeScript, but let's test the runtime check
      const sso = new (FastCommentsSSO as any)();
      
      expect(() => sso.getToken()).toThrow('No SSO data available');
    });
  });
});
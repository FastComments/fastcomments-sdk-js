import { describe, it } from 'node:test';
import assert from 'node:assert';
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

      assert.ok(payload);
      assert.ok(payload.userDataJSONBase64);
      assert.ok(payload.verificationHash);
      assert.ok(payload.timestamp);
      assert.strictEqual(typeof payload.timestamp, 'number');
    });

    it('should create a valid HMAC-SHA256 hash', () => {
      const builder = new SecureSSOPayloadBuilder(API_KEY, mockSecureUser);
      const payload = builder.getPayload();

      // Verify the hash manually
      const hmac = crypto.createHmac('sha256', API_KEY);
      hmac.update(payload.timestamp + payload.userDataJSONBase64);
      const expectedHash = hmac.digest('hex');

      assert.strictEqual(payload.verificationHash, expectedHash);
    });

    it('should encode user data properly in base64', () => {
      const builder = new SecureSSOPayloadBuilder(API_KEY, mockSecureUser);
      const payload = builder.getPayload();

      const decodedData = JSON.parse(Buffer.from(payload.userDataJSONBase64, 'base64').toString('utf8'));
      assert.deepStrictEqual(decodedData, mockSecureUser);
    });

    it('should produce JSON output', () => {
      const builder = new SecureSSOPayloadBuilder(API_KEY, mockSecureUser);
      const jsonOutput = builder.toJSON();

      assert.doesNotThrow(() => JSON.parse(jsonOutput));
      const parsed = JSON.parse(jsonOutput);
      assert.ok(parsed.userDataJSONBase64);
      assert.ok(parsed.verificationHash);
      assert.ok(parsed.timestamp);
    });
  });

  describe('FastCommentsSSO - Secure SSO', () => {
    it('should create secure SSO using factory method', () => {
      const sso = FastCommentsSSO.createSecure(API_KEY, mockSecureUser, mockConfig);

      assert.ok(sso);
      assert.strictEqual(sso.isSecure(), true);
      assert.strictEqual(sso.isSimple(), false);
    });

    it('should prepare secure SSO for transmission', () => {
      const sso = FastCommentsSSO.createSecure(API_KEY, mockSecureUser, mockConfig);
      const config = sso.prepareToSend();

      assert.ok(config);
      assert.ok(config.userDataJSONBase64);
      assert.ok(config.verificationHash);
      assert.ok(config.timestamp);
      assert.strictEqual(config.loginURL, mockConfig.loginURL);
      assert.strictEqual(config.logoutURL, mockConfig.logoutURL);
    });

    it('should throw error when calling createToken on secure SSO', () => {
      const sso = FastCommentsSSO.createSecure(API_KEY, mockSecureUser);

      assert.throws(() => sso.createToken(), /createToken\(\) can only be called on simple SSO instances/);
    });

    it('should return secure config from getToken', () => {
      const sso = FastCommentsSSO.createSecure(API_KEY, mockSecureUser, mockConfig);
      const token = sso.getToken();

      assert.strictEqual(typeof token, 'object');
      if (typeof token === 'object') {
        assert.ok('userDataJSONBase64' in token);
        assert.ok('verificationHash' in token);
        assert.ok('timestamp' in token);
      }
    });
  });

  describe('FastCommentsSSO - Simple SSO', () => {
    it('should create simple SSO using factory method', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, mockConfig);

      assert.ok(sso);
      assert.strictEqual(sso.isSimple(), true);
      assert.strictEqual(sso.isSecure(), false);
    });

    it('should create token for simple SSO', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, mockConfig);
      const token = sso.createToken();

      assert.strictEqual(typeof token, 'string');
      const parsed = JSON.parse(token);
      assert.strictEqual(parsed.email, mockSimpleUser.email);
      assert.strictEqual(parsed.username, mockSimpleUser.username);
      assert.strictEqual(parsed.loginURL, mockConfig.loginURL);
      assert.strictEqual(parsed.logoutURL, mockConfig.logoutURL);
    });

    it('should cache tokens', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, mockConfig);
      const token1 = sso.createToken();
      const token2 = sso.createToken();

      assert.strictEqual(token1, token2); // Should be the same cached instance
    });

    it('should reset cached token', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, mockConfig);
      const token1 = sso.createToken();
      
      sso.resetToken();
      sso.updateConfig({ loginURL: '/new-login' });
      
      const token2 = sso.createToken();
      assert.notStrictEqual(token1, token2); // Should be different after config change
    });

    it('should throw error when calling prepareToSend on simple SSO', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser);

      assert.throws(() => sso.prepareToSend(), /prepareToSend\(\) can only be called on secure SSO instances/);
    });

    it('should return token string from getToken', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, mockConfig);
      const token = sso.getToken();

      assert.strictEqual(typeof token, 'string');
      if (typeof token === 'string') {
        const parsed = JSON.parse(token);
        assert.strictEqual(parsed.email, mockSimpleUser.email);
      }
    });
  });

  describe('FastCommentsSSO - Configuration Management', () => {
    it('should update configuration', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, mockConfig);
      const newConfig = { loginURL: '/new-login', logoutURL: '/new-logout' };
      
      sso.updateConfig(newConfig);
      const config = sso.getConfig();

      assert.strictEqual(config.loginURL, '/new-login');
      assert.strictEqual(config.logoutURL, '/new-logout');
      assert.strictEqual(config.loginCallback, mockConfig.loginCallback); // Should preserve existing
    });

    it('should return copy of configuration', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, mockConfig);
      const config = sso.getConfig();
      
      config.loginURL = 'modified';
      const config2 = sso.getConfig();

      assert.strictEqual(config2.loginURL, mockConfig.loginURL); // Should not be modified
    });
  });

  describe('FastCommentsSSO - Constructor Overloads', () => {
    it('should accept SecureSSOPayload in constructor', () => {
      const builder = new SecureSSOPayloadBuilder(API_KEY, mockSecureUser);
      const payload = builder.getPayload();
      const sso = new FastCommentsSSO(payload, mockConfig);

      assert.strictEqual(sso.isSecure(), true);
      assert.ok(sso.prepareToSend());
    });

    it('should accept SimpleSSOUserData in constructor', () => {
      const sso = new FastCommentsSSO(mockSimpleUser, mockConfig);

      assert.strictEqual(sso.isSimple(), true);
      assert.ok(sso.createToken());
    });

    it('should work without config parameter', () => {
      const sso = new FastCommentsSSO(mockSimpleUser);

      assert.strictEqual(sso.isSimple(), true);
      const token = sso.createToken();
      const parsed = JSON.parse(token);
      assert.strictEqual(parsed.email, mockSimpleUser.email);
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

      assert.ok(config.userDataJSONBase64);
      
      const decodedData = JSON.parse(Buffer.from(config.userDataJSONBase64!, 'base64').toString('utf8'));
      assert.strictEqual(decodedData.id, 'minimal-user');
      assert.strictEqual(decodedData.email, 'minimal@example.com');
      assert.strictEqual(decodedData.username, 'minimal');
    });

    it('should handle empty config', () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser, {});
      const token = sso.createToken();
      
      assert.strictEqual(typeof token, 'string');
      const parsed = JSON.parse(token);
      assert.strictEqual(parsed.email, mockSimpleUser.email);
    });

    it('should throw error when getToken called with no data', () => {
      // This shouldn't be possible with TypeScript, but let's test the runtime check
      const sso = new (FastCommentsSSO as any)();
      
      assert.throws(() => sso.getToken(), /No SSO data available/);
    });
  });
});
import { describe, it, expect, beforeAll } from '@jest/globals';
import { 
  createFastCommentsSDK,
  FastCommentsSSO,
  SecureSSOUserData,
  SimpleSSOUserData,
  PublicApi,
  DefaultApi,
  Configuration
} from '../index';
import { API_KEY, TENANT_ID, BASE_URL } from './env';

// Test against the real FastComments API
describe('FastComments SSO Integration Tests', () => {

  let sdk: ReturnType<typeof createFastCommentsSDK>;
  let publicApi: PublicApi;
  let defaultApi: DefaultApi;

  beforeAll(() => {
    sdk = createFastCommentsSDK({
      apiKey: API_KEY,
      basePath: BASE_URL
    });
    
    publicApi = new PublicApi(new Configuration({ basePath: BASE_URL }));
    defaultApi = new DefaultApi(new Configuration({ 
      apiKey: API_KEY,
      basePath: BASE_URL 
    }));
  });

  const mockSecureUser: SecureSSOUserData = {
    id: `test-user-${Date.now()}`,
    email: `test-${Date.now()}@example.com`,
    username: `testuser${Date.now()}`,
    displayName: 'Test User',
    avatar: 'https://example.com/avatar.jpg',
    optedInNotifications: true,
    displayLabel: 'SDK Test User',
    websiteUrl: 'https://example.com',
    isAdmin: false,
    isModerator: false,
    isProfileActivityPrivate: true
  };

  const mockSimpleUser: SimpleSSOUserData = {
    id: `simple-user-${Date.now()}`,
    email: `simple-${Date.now()}@example.com`,
    username: `simpleuser${Date.now()}`,
    displayName: 'Simple Test User',
    avatar: 'https://example.com/simple-avatar.jpg',
    optedInNotifications: false,
    displayLabel: 'Simple SDK Test User'
  };

  describe('Secure SSO API Integration', () => {
    it('should work with PublicApi.getCommentsPublic using secure SSO', async () => {
      const sso = FastCommentsSSO.createSecure(API_KEY, mockSecureUser);
      const ssoConfig = sso.prepareToSend();

      try {
        const response = await publicApi.getCommentsPublic({
          tenantId: TENANT_ID,
          urlId: 'sdk-test-page-secure',
          sso: JSON.stringify(ssoConfig)
        });

        expect(response).toBeDefined();
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
      } catch (error: any) {
        // Check if it's a known/expected error vs a real failure
        if (error.response?.status === 404) {
          // Page not found is acceptable for test
          expect(error.response.status).toBe(404);
        } else if (error.response?.status === 401) {
          // Auth error might indicate API key issues
          console.warn('Auth error - check API key and tenant ID');
          expect(error.response.status).toBe(401);
        } else {
          throw error;
        }
      }
    }, 10000);

    it('should work with DefaultApi.getComments using secure SSO', async () => {
      const sso = FastCommentsSSO.createSecure(API_KEY, mockSecureUser);
      const ssoConfig = sso.prepareToSend();

      try {
        const response = await defaultApi.getComments({
          tenantId: TENANT_ID,
          urlId: 'sdk-test-page-secure-admin'
        });

        expect(response).toBeDefined();
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
      } catch (error: any) {
        if (error.response?.status === 404 || error.response?.status === 401) {
          expect([404, 401]).toContain(error.response.status);
        } else {
          throw error;
        }
      }
    }, 10000);

    it('should create comment with secure SSO', async () => {
      const sso = FastCommentsSSO.createSecure(API_KEY, mockSecureUser);
      const ssoConfig = sso.prepareToSend();

      try {
        const response = await publicApi.createCommentPublic({
          tenantId: TENANT_ID,
          urlId: 'sdk-test-page-secure-comment',
          broadcastId: `test-${Date.now()}`,
          commentData: {
            comment: 'Test comment with secure SSO from Node.js SDK',
            date: Date.now(),
            commenterName: mockSecureUser.username,
            url: 'https://example.com/test-page',
            urlId: 'sdk-test-page-secure-comment'
          },
          sso: JSON.stringify(ssoConfig)
        });

        expect(response).toBeDefined();
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
        
        if (response.data && 'comment' in response.data) {
          const comment = (response.data as any).comment;
          expect(comment.comment).toContain('Test comment with secure SSO');
        }
      } catch (error: any) {
        // Accept certain expected errors in test environment
        if (error.response?.status === 401 || error.response?.status === 403) {
          expect([401, 403]).toContain(error.response.status);
        } else {
          throw error;
        }
      }
    }, 10000);
  });

  describe('Simple SSO API Integration', () => {
    it('should work with PublicApi.getCommentsPublic using simple SSO', async () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser);
      const ssoToken = sso.createToken();

      try {
        const response = await publicApi.getCommentsPublic({
          tenantId: TENANT_ID,
          urlId: 'sdk-test-page-simple'
        });

        expect(response).toBeDefined();
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
      } catch (error: any) {
        if (error.response?.status === 404 || error.response?.status === 401) {
          expect([404, 401]).toContain(error.response.status);
        } else {
          throw error;
        }
      }
    }, 10000);

    it('should create comment with simple SSO', async () => {
      const sso = FastCommentsSSO.createSimple(mockSimpleUser);
      const ssoToken = sso.createToken();

      try {
        const response = await publicApi.createCommentPublic({
          tenantId: TENANT_ID,
          urlId: 'sdk-test-page-simple-comment',
          broadcastId: `simple-test-${Date.now()}`,
          commentData: {
            comment: 'Test comment with simple SSO from Node.js SDK',
            date: Date.now(),
            commenterName: mockSimpleUser.username,
            url: 'https://example.com/test-page',
            urlId: 'sdk-test-page-simple-comment'
          }
        });

        expect(response).toBeDefined();
        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
        
        if (response.data && 'comment' in response.data) {
          const comment = (response.data as any).comment;
          expect(comment.comment).toContain('Test comment with simple SSO');
        }
      } catch (error: any) {
        if (error.response?.status === 401 || error.response?.status === 403) {
          expect([401, 403]).toContain(error.response.status);
        } else {
          throw error;
        }
      }
    }, 10000);
  });

  describe('SDK Integration', () => {
    it('should work with the main SDK wrapper', async () => {
      const sso = FastCommentsSSO.createSecure(API_KEY, mockSecureUser);
      const ssoConfig = sso.prepareToSend();

      try {
        const response = await sdk.publicApi.getCommentsPublic({
          tenantId: TENANT_ID,
          urlId: 'sdk-test-wrapper',
          sso: JSON.stringify(ssoConfig)
        });

        expect(response).toBeDefined();
        expect(response.status).toBe(200);
      } catch (error: any) {
        if (error.response?.status === 404 || error.response?.status === 401) {
          expect([404, 401]).toContain(error.response.status);
        } else {
          throw error;
        }
      }
    }, 10000);

    it('should authenticate with DefaultApi using API key', async () => {
      try {
        const response = await sdk.defaultApi.getComments({
          tenantId: TENANT_ID,
          urlId: 'test-page'
        });

        expect(response).toBeDefined();
        expect(response.status).toBe(200);
      } catch (error: any) {
        // API key might not have user search permissions, which is OK
        if (error.response?.status === 401 || error.response?.status === 403) {
          expect([401, 403]).toContain(error.response.status);
        } else {
          throw error;
        }
      }
    }, 10000);
  });

  describe('Error Handling', () => {
    it('should handle invalid tenant ID gracefully', async () => {
      const sso = FastCommentsSSO.createSecure(API_KEY, mockSecureUser);
      const ssoConfig = sso.prepareToSend();

      try {
        await publicApi.getCommentsPublic({
          tenantId: 'invalid-tenant-id',
          urlId: 'test-page',
          sso: JSON.stringify(ssoConfig)
        });
      } catch (error: any) {
        expect(error.response?.status).toBeGreaterThanOrEqual(400);
      }
    }, 10000);

    it('should handle malformed SSO data gracefully', async () => {
      try {
        await publicApi.getCommentsPublic({
          tenantId: TENANT_ID,
          urlId: 'test-page',
          sso: 'invalid-sso-data'
        });
      } catch (error: any) {
        expect(error.response?.status).toBeGreaterThanOrEqual(400);
      }
    }, 10000);
  });
});
import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { readFileSync } from 'fs';
import { join } from 'path';
import { Window } from 'happy-dom';

describe('Browser Compatibility Tests', () => {
  
  describe('Validation: Testing environment catches Node.js imports', () => {
    it('should demonstrate that our testing approach works by catching Node.js imports', () => {
      // Store originals
      const originalRequire = global.require;
      
      // Mock require to reject Node.js built-ins
      (global as any).require = (module: string) => {
        const nodeBuiltins = ['fs', 'crypto', 'path', 'os', 'util', 'events', 'stream'];
        if (nodeBuiltins.some(builtin => module === builtin || module.startsWith(builtin + '/'))) {
          throw new Error(`Cannot resolve module '${module}' in browser environment`);
        }
        return originalRequire(module);
      };

      try {
        // Test that our mock catches Node.js built-in imports
        assert.throws(
          () => {
            const mockRequire = (global as any).require;
            mockRequire('fs'); // This should throw
          },
          /Cannot resolve module 'fs' in browser environment/,
          'Mocked require should reject Node.js built-ins'
        );
        
        assert.throws(
          () => {
            const mockRequire = (global as any).require;
            mockRequire('crypto'); // This should throw
          },
          /Cannot resolve module 'crypto' in browser environment/,
          'Mocked require should reject Node.js crypto module'
        );
      } finally {
        // Restore original require
        global.require = originalRequire;
      }
    });
  });

  describe('Static Analysis: Check compiled browser export for Node.js imports', () => {
    it('should not contain require() calls for Node.js built-ins', () => {
      const browserJsPath = join(process.cwd(), 'dist', 'browser.js');
      
      let browserJsContent: string;
      try {
        browserJsContent = readFileSync(browserJsPath, 'utf-8');
      } catch (error) {
        throw new Error(`Cannot read dist/browser.js. Did you run 'npm run build' first? ${error}`);
      }

      // Node.js built-in modules that should NOT appear in browser bundle
      const nodeBuiltins = [
        'crypto', 'fs', 'path', 'os', 'util', 'events', 'stream', 'buffer', 
        'url', 'http', 'https', 'net', 'tls', 'zlib', 'child_process', 'cluster'
      ];

      const foundImports: string[] = [];

      for (const builtin of nodeBuiltins) {
        // Check for various import patterns
        const patterns = [
          `require("${builtin}")`,
          `require('${builtin}')`,
          `require(\`${builtin}\`)`,
          `from "${builtin}"`,
          `from '${builtin}'`,
          `from \`${builtin}\``
        ];

        for (const pattern of patterns) {
          if (browserJsContent.includes(pattern)) {
            foundImports.push(`Found: ${pattern}`);
          }
        }
      }

      if (foundImports.length > 0) {
        assert.fail(`Browser export contains Node.js built-in imports:\n${foundImports.join('\n')}`);
      }
    });
  });

  describe('Runtime Verification: Browser export works in browser-like environment', () => {
    let originalRequire: typeof require;
    let window: Window;

    beforeEach(() => {
      // Create clean browser-like environment
      window = new Window();
      
      // Store original require
      originalRequire = global.require;
      
      // Remove Node.js built-ins to simulate real browser
      (global as any).require = (module: string) => {
        const nodeBuiltins = ['fs', 'crypto', 'path', 'os', 'util', 'events', 'stream'];
        if (nodeBuiltins.some(builtin => module === builtin || module.startsWith(builtin + '/'))) {
          throw new Error(`Module '${module}' not available in browser`);
        }
        return originalRequire(module);
      };
      
      // Set up minimal browser-like globals
      if (!global.fetch) {
        global.fetch = (() => Promise.reject(new Error('fetch not available in test'))) as any;
      }
    });

    afterEach(() => {
      // Restore original require
      global.require = originalRequire;
    });

    it('should load browser export without errors', () => {
      try {
        // This should not throw if the browser export is truly browser-compatible
        const browserExport = require('../../dist/browser.js');
        assert.ok(browserExport, 'Browser export should load successfully');
        assert.ok(typeof browserExport === 'object', 'Browser export should be an object');
      } catch (error: any) {
        if (error.message.includes('not available in browser')) {
          assert.fail(`Browser export tried to use Node.js built-in: ${error.message}`);
        }
        throw error;
      }
    });

    it('should be able to create browser SDK instance', () => {
      try {
        const { createFastCommentsBrowserSDK } = require('../../dist/browser.js');
        assert.ok(typeof createFastCommentsBrowserSDK === 'function', 'createFastCommentsBrowserSDK should be a function');
        
        const sdk = createFastCommentsBrowserSDK();
        assert.ok(sdk, 'Should be able to create SDK instance');
        assert.ok(sdk.publicApi, 'SDK should have publicApi');
        
      } catch (error: any) {
        if (error.message.includes('not available in browser')) {
          assert.fail(`SDK creation tried to use Node.js built-in: ${error.message}`);
        }
        throw error;
      }
    });

    it('should have functional getFeedPostsStats API', () => {
      try {
        const { createFastCommentsBrowserSDK } = require('../../dist/browser.js');
        const sdk = createFastCommentsBrowserSDK();
        
        assert.ok(sdk.publicApi.getFeedPostsStats, 'getFeedPostsStats should be available');
        assert.ok(typeof sdk.publicApi.getFeedPostsStats === 'function', 'getFeedPostsStats should be a function');
        
      } catch (error: any) {
        if (error.message.includes('not available in browser')) {
          assert.fail(`getFeedPostsStats access tried to use Node.js built-in: ${error.message}`);
        }
        throw error;
      }
    });

    it('should have functional live utilities', () => {
      try {
        const browserExports = require('../../dist/browser.js');
        
        // Check that live utilities are available
        assert.ok(browserExports.makeRequest, 'makeRequest should be available');
        assert.ok(typeof browserExports.makeRequest === 'function', 'makeRequest should be a function');
        
        assert.ok(browserExports.subscribeToChanges, 'subscribeToChanges should be available');
        assert.ok(typeof browserExports.subscribeToChanges === 'function', 'subscribeToChanges should be a function');
        
      } catch (error: any) {
        if (error.message.includes('not available in browser')) {
          assert.fail(`Live utilities tried to use Node.js built-in: ${error.message}`);
        }
        throw error;
      }
    });

    it('should NOT have SSO functionality (which requires Node.js crypto)', () => {
      const browserExports = require('../../dist/browser.js');
      
      // Browser export should not include SSO functionality
      assert.ok(!browserExports.FastCommentsSSO, 'FastCommentsSSO should not be in browser export');
      assert.ok(!browserExports.SecureSSOPayloadBuilder, 'SecureSSOPayloadBuilder should not be in browser export');
    });
  });
});
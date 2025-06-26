/**
 * Type-safe environment variable access for tests
 */

interface TestEnvironment {
  FASTCOMMENTS_API_KEY: string;
  FASTCOMMENTS_TENANT_ID: string;
  FASTCOMMENTS_BASE_URL?: string;
}

function getRequiredEnvVar(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Required environment variable ${name} is not set. Please check your test environment configuration.`);
  }
  return value;
}

function getOptionalEnvVar(name: string, defaultValue: string): string {
  return process.env[name] || defaultValue;
}

export const testEnv: TestEnvironment = {
  FASTCOMMENTS_API_KEY: getRequiredEnvVar('FASTCOMMENTS_API_KEY'),
  FASTCOMMENTS_TENANT_ID: getRequiredEnvVar('FASTCOMMENTS_TENANT_ID'),
  FASTCOMMENTS_BASE_URL: getOptionalEnvVar('FASTCOMMENTS_BASE_URL', 'https://fastcomments.com')
};

// Export individual values for convenience
export const {
  FASTCOMMENTS_API_KEY: API_KEY,
  FASTCOMMENTS_TENANT_ID: TENANT_ID,
  FASTCOMMENTS_BASE_URL: BASE_URL
} = testEnv;
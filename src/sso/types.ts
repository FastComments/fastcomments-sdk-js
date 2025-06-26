/**
 * Common interface for SSO user data
 */
export interface BaseUserData {
  /** User's email address (required) */
  email: string;
  /** Username (required, cannot be email, max 1k characters) */
  username: string;
  /** Avatar URL (optional, max 3k characters) */
  avatar?: string;
  /** Whether user opted in for notifications (optional) */
  optedInNotifications?: boolean;
  /** User display label like "VIP User" (optional, max 100 characters) */
  displayLabel?: string;
  /** User display name (optional, max 500 characters) */
  displayName?: string;
  /** Personal website URL (optional, max 2k characters) */
  websiteUrl?: string;
  /** Whether profile activity is private (optional, defaults to true) */
  isProfileActivityPrivate?: boolean;
  /** User locale for notifications like "en_us" (optional) */
  locale?: string;
}

/**
 * User data for secure SSO implementation
 */
export interface SecureSSOUserData extends BaseUserData {
  /** User ID (required, max 1k characters) */
  id: string;
  /** List of group IDs (optional, max 100 groups) */
  groupIds?: string[];
  /** Whether user has admin privileges (optional) */
  isAdmin?: boolean;
  /** Whether user has moderator privileges (optional) */
  isModerator?: boolean;
}

/**
 * User data for simple SSO implementation
 */
export interface SimpleSSOUserData extends BaseUserData {
  /** User ID (optional, defaults to email if not set) */
  id?: string;
}

/**
 * Configuration for SSO authentication flows
 */
export interface SSOConfig {
  /** URL to redirect to for login (optional) */
  loginURL?: string;
  /** URL to redirect to for logout (optional) */
  logoutURL?: string;
  /** Callback function for login events (optional) */
  loginCallback?: () => void;
  /** Callback function for logout events (optional) */
  logoutCallback?: () => void;
}

/**
 * Secure SSO payload with HMAC verification
 */
export interface SecureSSOPayload {
  /** Base64-encoded JSON user data */
  userDataJSONBase64: string;
  /** HMAC-SHA256 verification hash */
  verificationHash: string;
  /** Timestamp used for hash creation */
  timestamp: number;
}

/**
 * Complete SSO configuration including auth flows
 */
export interface CompleteSSOConfig extends SSOConfig {
  userDataJSONBase64?: string;
  verificationHash?: string;
  timestamp?: number;
}
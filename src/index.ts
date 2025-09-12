// Default export - Types only (safe for both client and server)
// This ensures the main package can be imported anywhere without Node.js dependencies

// Export all API and model types
export type * from './generated/src/apis';
export type * from './generated/src/models';
export type { Configuration } from './generated/src/runtime';

// Export live event types
export type { LiveEvent, LiveEventType, EventLogEntry, PubSubComment, PubSubVote, FeedPost, UserNotification } from './generated/src/index';

// Export SSO types only (no implementations that require Node.js crypto)
export type * from './sso/types';

// Export utility types
export type { SubscribeToChangesResult, SubscribeToChangesConfig } from './live/subscribe-to-changes';
export type { UserFeedConfig } from './live/user-feed';

// For actual usage, import from specific entry points:
// - import { ... } from 'fastcomments-sdk/browser' // Browser-safe APIs
// - import { ... } from 'fastcomments-sdk/server' // Full Node.js SDK with SSO
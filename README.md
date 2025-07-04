# FastComments Node.js/TypeScript SDK

Official Node.js and TypeScript SDK for the FastComments API. Build secure and scalable backend applications that interact with FastComments, or build reactive client applications.

## Installation

```bash
npm install fastcomments-sdk
```

## Usage

### Basic Usage

```typescript
import { createFastCommentsSDK } from '@fastcomments/fastcomments-sdk';

// Create SDK instance
const sdk = createFastCommentsSDK({
  apiKey: 'your-api-key',
  basePath: 'https://fastcomments.com' // optional, defaults to https://fastcomments.com
});

// Use the different APIs
const comments = await sdk.defaultApi.getComments({ 
  tenantId: 'your-tenant-id',
  urlId: 'page-url-id'
});
```

### Using Individual API Classes

```typescript
import { DefaultApi, PublicApi, Configuration } from '@fastcomments/fastcomments-sdk';

const config = new Configuration({
  apiKey: 'your-api-key',
  basePath: 'https://fastcomments.com'
});

const defaultApi = new DefaultApi(config);
const publicApi = new PublicApi(config);
```

## Public vs Secured APIs

The SDK provides three main API classes:

- **`DefaultApi`** - Secured endpoints that require your API key for authentication. Use these for server-side operations.
- **`PublicApi`** - Public endpoints that can be accessed without an API key. These can be called directly from browsers/mobile devices/etc.
- **`HiddenApi`** - Internal/admin endpoints for advanced use cases.

### Example: Using Public API (client-side safe)

```typescript
import { PublicApi } from '@fastcomments/fastcomments-sdk';

const publicApi = new PublicApi();

// Get comments for a page (no API key required)
const response = await publicApi.getCommentsPublic({
  tenantId: 'your-tenant-id',
  urlId: 'page-url-id'
});
```

### Example: Using Default API (server-side only)

```typescript
import { DefaultApi, Configuration } from '@fastcomments/fastcomments-sdk';

const config = new Configuration({
  apiKey: 'your-api-key' // Keep this secret!
});
const defaultApi = new DefaultApi(config);

// Get comments with full admin access
const response = await defaultApi.getComments({
  tenantId: 'your-tenant-id',
  urlId: 'page-url-id'
});
```

## SSO (Single Sign-On) Integration

FastComments supports SSO to integrate with your existing user authentication system. There are two types of SSO: Simple SSO (less secure, client-side) and Secure SSO (recommended, server-side).

### Simple SSO (Client-Side)

Simple SSO can be implemented client-side but offers less security:

```typescript
import { FastCommentsSSO, PublicApi } from '@fastcomments/fastcomments-sdk';

// Create simple SSO using the built-in helper
const userData = {
  username: 'john_doe',
  email: 'john@example.com',
  displayName: 'John Doe',
  avatar: 'https://example.com/avatar.jpg'
};

const sso = FastCommentsSSO.createSimple(userData, {
  loginURL: '/login',
  logoutURL: '/logout'
});

const ssoToken = sso.createToken();

// Use with API calls  
const publicApi = new PublicApi();
const response = await publicApi.getCommentsPublic({
  tenantId: 'your-tenant-id',
  urlId: 'page-url-id'
  // Note: Simple SSO would typically be used with widget integration,
  // not direct API calls
});
```

### Secure SSO (Server-Side, Recommended)

Secure SSO should be implemented server-side and provides better security:

```typescript
import { FastCommentsSSO, PublicApi } from '@fastcomments/fastcomments-sdk';

// Create secure SSO using the built-in helper
const userData = {
  id: 'user-123',
  email: 'john@example.com',
  username: 'john_doe',
  displayName: 'John Doe',
  avatar: 'https://example.com/avatar.jpg',
  isAdmin: false,
  isModerator: false
};

const sso = FastCommentsSSO.createSecure('your-api-key', userData, {
  loginURL: '/login',
  logoutURL: '/logout'
});

const ssoConfig = sso.prepareToSend();

// Use with API calls
const publicApi = new PublicApi();
const response = await publicApi.getCommentsPublic({
  tenantId: 'your-tenant-id',
  urlId: 'page-url-id',
  sso: JSON.stringify(ssoConfig)
});
```

### SSO with Comment Creation

```typescript
// Create a comment with SSO authentication
const sso = FastCommentsSSO.createSecure('your-api-key', userData);
const ssoConfig = sso.prepareToSend();

const response = await publicApi.createCommentPublic({
  tenantId: 'your-tenant-id',
  urlId: 'page-url-id',
  broadcastId: 'unique-broadcast-id',
  commentData: {
    comment: 'This is my comment',
    date: Date.now(),
    commenterName: 'John Doe',
    url: 'https://example.com/page',
    urlId: 'page-url-id'
  },
  sso: JSON.stringify(ssoConfig)
});
```

## Common Use Cases

### Getting Comments for a Page

```typescript
const comments = await sdk.publicApi.getCommentsPublic({
  tenantId: 'your-tenant-id',
  urlId: 'article-123'
});
```

### Creating a Comment

```typescript
const newComment = await sdk.publicApi.createCommentPublic({
  createCommentParams: {
    tenantId: 'your-tenant-id',
    urlId: 'article-123',
    comment: 'Great article!',
    commenterName: 'John Doe',
    commenterEmail: 'john@example.com'
  }
});
```

### Voting on a Comment

```typescript
const voteResponse = await sdk.publicApi.voteComment({
  voteBodyParams: {
    commentId: 'comment-id',
    direction: 1 // 1 for upvote, -1 for downvote
  }
});
```

### User Management (Requires API Key)

```typescript
// Search for users (requires DefaultApi)
const users = await sdk.defaultApi.searchUsers({
  tenantId: 'your-tenant-id',
  urlId: 'page-id',
  usernameStartsWith: 'john'
});
```

## Live Events (Real-time Updates)

Subscribe to live events to get real-time updates for comments, votes, and other activities.

### Page-Level Events

Listen for live events on a specific page (comments, votes, etc.):

```typescript
import { subscribeToChanges, LiveEvent, LiveEventType } from 'fastcomments-sdk';

const config = {
  tenantId: 'your-tenant-id',
  urlId: 'page-url-id',
};

// Subscribe to live events for a page
const subscription = subscribeToChanges(
  config,
  'your-tenant-id', // tenantIdWS
  'page-url-id',    // urlIdWS  
  'user-session-id', // userIdWS (get this from getComments response)
  (event: LiveEvent) => {
    console.log('Live event received:', event);
    
    switch (event.type) {
      case LiveEventType.new_comment:
        console.log('New comment:', event.comment);
        // Update your UI with the new comment
        break;
      case LiveEventType.new_vote:
        console.log('New vote:', event.vote);
        // Update vote counts in your UI
        break;
      case LiveEventType.updated_comment:
        console.log('Comment updated:', event.comment);
        break;
      default:
        console.log('Other event type:', event.type);
    }
    
    return true; // Return true if event was handled
  },
  (isConnected: boolean) => {
    console.log('Connection status:', isConnected ? 'Connected' : 'Disconnected');
  }
);

// Close the subscription when done
subscription.close();
```

### Subscribe to User Events

Listen for user-specific events (notifications, mentions, etc.):

```typescript
import { subscribeToUserFeed, LiveEvent, LiveEventType } from 'fastcomments-sdk';

const userConfig = {
  userIdWS: 'user-session-id', // Get this from getComments response
};

// Subscribe to user's personal feed
const userSubscription = subscribeToUserFeed(
  userConfig,
  (event: LiveEvent) => {
    console.log('User event received:', event);
    
    switch (event.type) {
      case LiveEventType.notification:
        console.log('New notification:', event.notification);
        // Show notification in your UI
        break;
      case LiveEventType.notification_update:
        console.log('Notification updated:', event.notification);
        break;
      default:
        console.log('Other user event:', event.type);
    }
    
    return true;
  },
  (isConnected: boolean) => {
    console.log('User feed connection:', isConnected ? 'Connected' : 'Disconnected');
  }
);

// Close when done
userSubscription.close();
```

### Getting userIdWS

The `userIdWS` parameter is required for live events and can be obtained from API responses:

```typescript
const response = await sdk.publicApi.getCommentsPublic({
  tenantId: 'your-tenant-id',
  urlId: 'page-id'
});

// Extract userIdWS from the response
const userIdWS = response.data?.userSessionInfo?.userIdWS;

if (userIdWS) {
  // Now you can subscribe to live events
  const subscription = subscribeToChanges(config, tenantIdWS, urlIdWS, userIdWS, handleEvent);
}
```

## Broadcast IDs

You'll see you're supposed to pass a `broadcastId` in some API calls. When you receive events, you'll get this ID back, so you know to ignore the event if you plan to optimistically apply changes on the client (which you'll probably want to do since it offers the best experience). Pass a UUID here. The ID should be unique enough to not occur twice in a browser session.

```typescript
import { v4 as uuidv4 } from 'uuid';

const response = await sdk.publicApi.createCommentPublic({
  createCommentParams: {
    tenantId: 'your-tenant-id',
    urlId: 'page-id',
    comment: 'My comment',
    broadcastId: uuidv4() // Unique ID for this operation
  }
});
```

## Error Handling

```typescript
try {
  const comments = await sdk.publicApi.getCommentsPublic({
    tenantId: 'your-tenant-id',
    urlId: 'page-id'
  });
} catch (error) {
  if (error.response?.status === 404) {
    console.log('Page not found');
  } else {
    console.error('API Error:', error.message);
  }
}
```

## TypeScript Support

The SDK is written in TypeScript and provides complete type definitions for all API methods and response models:

```typescript
import type { 
  PublicComment, 
  CreateCommentParams, 
  GetCommentsPublic200Response 
} from '@fastcomments/fastcomments-sdk';

const response: GetCommentsPublic200Response = await sdk.publicApi.getCommentsPublic({
  tenantId: 'your-tenant-id',
  urlId: 'page-id'
});

const comments: PublicComment[] = response.data?.comments || [];
```

## License

MIT

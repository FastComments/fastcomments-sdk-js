# FastComments Node.js/TypeScript SDK

Official Node.js and TypeScript SDK for the FastComments API. Build secure and scalable backend applications that interact with FastComments, or build reactive client applications.

## Installation

```bash
npm install @fastcomments/fastcomments-sdk
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
import { PublicApi } from '@fastcomments/fastcomments-sdk';

// Create simple SSO payload (client-side)
const ssoUserData = {
  username: 'john_doe',
  email: 'john@example.com',
  avatar: 'https://example.com/avatar.jpg'
};

const ssoPayload = btoa(JSON.stringify(ssoUserData));

const publicApi = new PublicApi();

// Use SSO with public API
const response = await publicApi.getCommentsPublic({
  tenantId: 'your-tenant-id',
  urlId: 'page-url-id',
  sso: ssoPayload
});
```

### Secure SSO (Server-Side, Recommended)

Secure SSO should be implemented server-side and provides better security:

```typescript
import { DefaultApi, Configuration } from '@fastcomments/fastcomments-sdk';
import crypto from 'crypto';

// Server-side SSO payload creation
function createSecureSSO(apiKey: string, userData: any): string {
  const payload = {
    id: userData.id,
    email: userData.email,
    username: userData.username,
    avatar: userData.avatar,
    timestamp: Date.now()
  };
  
  const encodedPayload = btoa(JSON.stringify(payload));
  const signature = crypto
    .createHmac('sha256', apiKey)
    .update(encodedPayload)
    .digest('hex');
  
  return `${encodedPayload}.${signature}`;
}

// Usage
const config = new Configuration({ apiKey: 'your-api-key' });
const defaultApi = new DefaultApi(config);

const userData = {
  id: 'user-123',
  email: 'john@example.com',
  username: 'john_doe',
  avatar: 'https://example.com/avatar.jpg'
};

const ssoToken = createSecureSSO('your-api-key', userData);

// Use with API calls
const response = await defaultApi.getComments({
  tenantId: 'your-tenant-id',
  urlId: 'page-url-id',
  sso: ssoToken
});
```

### SSO with Comment Creation

```typescript
// Create a comment with SSO authentication
const response = await publicApi.createCommentPublic({
  createCommentParams: {
    tenantId: 'your-tenant-id',
    urlId: 'page-url-id',
    comment: 'This is my comment',
    sso: ssoToken
  }
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

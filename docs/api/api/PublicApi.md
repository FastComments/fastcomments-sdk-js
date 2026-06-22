# PublicApi

All URIs are relative to *https://fastcomments.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**blockFromCommentPublic**](PublicApi.md#blockFromCommentPublic) | **POST** /block-from-comment/{commentId} |  |
| [**checkedCommentsForBlocked**](PublicApi.md#checkedCommentsForBlocked) | **GET** /check-blocked-comments |  |
| [**createCommentPublic**](PublicApi.md#createCommentPublic) | **POST** /comments/{tenantId} |  |
| [**createFeedPostPublic**](PublicApi.md#createFeedPostPublic) | **POST** /feed-posts/{tenantId} |  |
| [**createV1PageReact**](PublicApi.md#createV1PageReact) | **POST** /page-reacts/v1/likes/{tenantId} |  |
| [**createV2PageReact**](PublicApi.md#createV2PageReact) | **POST** /page-reacts/v2/{tenantId} |  |
| [**deleteCommentPublic**](PublicApi.md#deleteCommentPublic) | **DELETE** /comments/{tenantId}/{commentId} |  |
| [**deleteCommentVote**](PublicApi.md#deleteCommentVote) | **DELETE** /comments/{tenantId}/{commentId}/vote/{voteId} |  |
| [**deleteFeedPostPublic**](PublicApi.md#deleteFeedPostPublic) | **DELETE** /feed-posts/{tenantId}/{postId} |  |
| [**deleteV1PageReact**](PublicApi.md#deleteV1PageReact) | **DELETE** /page-reacts/v1/likes/{tenantId} |  |
| [**deleteV2PageReact**](PublicApi.md#deleteV2PageReact) | **DELETE** /page-reacts/v2/{tenantId} |  |
| [**flagCommentPublic**](PublicApi.md#flagCommentPublic) | **POST** /flag-comment/{commentId} |  |
| [**getCommentText**](PublicApi.md#getCommentText) | **GET** /comments/{tenantId}/{commentId}/text |  |
| [**getCommentVoteUserNames**](PublicApi.md#getCommentVoteUserNames) | **GET** /comments/{tenantId}/{commentId}/votes |  |
| [**getCommentsForUser**](PublicApi.md#getCommentsForUser) | **GET** /comments-for-user |  |
| [**getCommentsPublic**](PublicApi.md#getCommentsPublic) | **GET** /comments/{tenantId} |  |
| [**getEventLog**](PublicApi.md#getEventLog) | **GET** /event-log/{tenantId} |  |
| [**getFeedPostsPublic**](PublicApi.md#getFeedPostsPublic) | **GET** /feed-posts/{tenantId} |  |
| [**getFeedPostsStats**](PublicApi.md#getFeedPostsStats) | **GET** /feed-posts/{tenantId}/stats |  |
| [**getGifLarge**](PublicApi.md#getGifLarge) | **GET** /gifs/get-large/{tenantId} |  |
| [**getGifsSearch**](PublicApi.md#getGifsSearch) | **GET** /gifs/search/{tenantId} |  |
| [**getGifsTrending**](PublicApi.md#getGifsTrending) | **GET** /gifs/trending/{tenantId} |  |
| [**getGlobalEventLog**](PublicApi.md#getGlobalEventLog) | **GET** /event-log/global/{tenantId} |  |
| [**getOfflineUsers**](PublicApi.md#getOfflineUsers) | **GET** /pages/{tenantId}/users/offline |  |
| [**getOnlineUsers**](PublicApi.md#getOnlineUsers) | **GET** /pages/{tenantId}/users/online |  |
| [**getPagesPublic**](PublicApi.md#getPagesPublic) | **GET** /pages/{tenantId} |  |
| [**getTranslations**](PublicApi.md#getTranslations) | **GET** /translations/{namespace}/{component} |  |
| [**getUserNotificationCount**](PublicApi.md#getUserNotificationCount) | **GET** /user-notifications/get-count |  |
| [**getUserNotifications**](PublicApi.md#getUserNotifications) | **GET** /user-notifications |  |
| [**getUserPresenceStatuses**](PublicApi.md#getUserPresenceStatuses) | **GET** /user-presence-status |  |
| [**getUserReactsPublic**](PublicApi.md#getUserReactsPublic) | **GET** /feed-posts/{tenantId}/user-reacts |  |
| [**getUsersInfo**](PublicApi.md#getUsersInfo) | **GET** /pages/{tenantId}/users/info |  |
| [**getV1PageLikes**](PublicApi.md#getV1PageLikes) | **GET** /page-reacts/v1/likes/{tenantId} |  |
| [**getV2PageReactUsers**](PublicApi.md#getV2PageReactUsers) | **GET** /page-reacts/v2/{tenantId}/list |  |
| [**getV2PageReacts**](PublicApi.md#getV2PageReacts) | **GET** /page-reacts/v2/{tenantId} |  |
| [**lockComment**](PublicApi.md#lockComment) | **POST** /comments/{tenantId}/{commentId}/lock |  |
| [**logoutPublic**](PublicApi.md#logoutPublic) | **PUT** /auth/logout |  |
| [**pinComment**](PublicApi.md#pinComment) | **POST** /comments/{tenantId}/{commentId}/pin |  |
| [**reactFeedPostPublic**](PublicApi.md#reactFeedPostPublic) | **POST** /feed-posts/{tenantId}/react/{postId} |  |
| [**resetUserNotificationCount**](PublicApi.md#resetUserNotificationCount) | **POST** /user-notifications/reset-count |  |
| [**resetUserNotifications**](PublicApi.md#resetUserNotifications) | **POST** /user-notifications/reset |  |
| [**searchUsers**](PublicApi.md#searchUsers) | **GET** /user-search/{tenantId} |  |
| [**setCommentText**](PublicApi.md#setCommentText) | **POST** /comments/{tenantId}/{commentId}/update-text |  |
| [**unBlockCommentPublic**](PublicApi.md#unBlockCommentPublic) | **DELETE** /block-from-comment/{commentId} |  |
| [**unLockComment**](PublicApi.md#unLockComment) | **POST** /comments/{tenantId}/{commentId}/unlock |  |
| [**unPinComment**](PublicApi.md#unPinComment) | **POST** /comments/{tenantId}/{commentId}/unpin |  |
| [**updateFeedPostPublic**](PublicApi.md#updateFeedPostPublic) | **PUT** /feed-posts/{tenantId}/{postId} |  |
| [**updateUserNotificationCommentSubscriptionStatus**](PublicApi.md#updateUserNotificationCommentSubscriptionStatus) | **POST** /user-notifications/{notificationId}/mark-opted/{optedInOrOut} |  |
| [**updateUserNotificationPageSubscriptionStatus**](PublicApi.md#updateUserNotificationPageSubscriptionStatus) | **POST** /user-notifications/set-subscription-state/{subscribedOrUnsubscribed} |  |
| [**updateUserNotificationStatus**](PublicApi.md#updateUserNotificationStatus) | **POST** /user-notifications/{notificationId}/mark/{newStatus} |  |
| [**uploadImage**](PublicApi.md#uploadImage) | **POST** /upload-image/{tenantId} |  |
| [**voteComment**](PublicApi.md#voteComment) | **POST** /comments/{tenantId}/{commentId}/vote |  |


<a name="blockFromCommentPublic"></a>
# **blockFromCommentPublic**
> BlockFromCommentPublicResponse blockFromCommentPublic(tenantId, commentId, PublicBlockFromCommentParams, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **commentId** | **String**|  | [default to null] |
| **PublicBlockFromCommentParams** | [**PublicBlockFromCommentParams**](../model/PublicBlockFromCommentParams.md)|  | |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**BlockFromCommentPublicResponse**](../model/BlockFromCommentPublicResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="checkedCommentsForBlocked"></a>
# **checkedCommentsForBlocked**
> CheckedCommentsForBlockedResponse checkedCommentsForBlocked(tenantId, commentIds, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **commentIds** | **String**| A comma separated list of comment ids. | [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**CheckedCommentsForBlockedResponse**](../model/CheckedCommentsForBlockedResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createCommentPublic"></a>
# **createCommentPublic**
> CreateCommentPublicResponse createCommentPublic(tenantId, urlId, broadcastId, CommentData, sessionId, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |
| **broadcastId** | **String**|  | [default to null] |
| **CommentData** | [**CommentData**](../model/CommentData.md)|  | |
| **sessionId** | **String**|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**CreateCommentPublicResponse**](../model/CreateCommentPublicResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createFeedPostPublic"></a>
# **createFeedPostPublic**
> CreateFeedPostPublicResponse createFeedPostPublic(tenantId, CreateFeedPostParams, broadcastId, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **CreateFeedPostParams** | [**CreateFeedPostParams**](../model/CreateFeedPostParams.md)|  | |
| **broadcastId** | **String**|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**CreateFeedPostPublicResponse**](../model/CreateFeedPostPublicResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createV1PageReact"></a>
# **createV1PageReact**
> CreateV1PageReactResponse createV1PageReact(tenantId, urlId, title)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |
| **title** | **String**|  | [optional] [default to null] |

### Return type

[**CreateV1PageReactResponse**](../model/CreateV1PageReactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createV2PageReact"></a>
# **createV2PageReact**
> CreateV2PageReactResponse createV2PageReact(tenantId, urlId, id, title)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |
| **id** | **String**|  | [default to null] |
| **title** | **String**|  | [optional] [default to null] |

### Return type

[**CreateV2PageReactResponse**](../model/CreateV2PageReactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteCommentPublic"></a>
# **deleteCommentPublic**
> DeleteCommentPublicResponse deleteCommentPublic(tenantId, commentId, broadcastId, editKey, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **commentId** | **String**|  | [default to null] |
| **broadcastId** | **String**|  | [default to null] |
| **editKey** | **String**|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**DeleteCommentPublicResponse**](../model/DeleteCommentPublicResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteCommentVote"></a>
# **deleteCommentVote**
> DeleteCommentVoteResponse deleteCommentVote(tenantId, commentId, voteId, urlId, broadcastId, editKey, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **commentId** | **String**|  | [default to null] |
| **voteId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |
| **broadcastId** | **String**|  | [default to null] |
| **editKey** | **String**|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**DeleteCommentVoteResponse**](../model/DeleteCommentVoteResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteFeedPostPublic"></a>
# **deleteFeedPostPublic**
> DeleteFeedPostPublicResponse deleteFeedPostPublic(tenantId, postId, broadcastId, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **postId** | **String**|  | [default to null] |
| **broadcastId** | **String**|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**DeleteFeedPostPublicResponse**](../model/DeleteFeedPostPublicResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteV1PageReact"></a>
# **deleteV1PageReact**
> DeleteV1PageReactResponse deleteV1PageReact(tenantId, urlId)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |

### Return type

[**DeleteV1PageReactResponse**](../model/DeleteV1PageReactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteV2PageReact"></a>
# **deleteV2PageReact**
> DeleteV2PageReactResponse deleteV2PageReact(tenantId, urlId, id)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |
| **id** | **String**|  | [default to null] |

### Return type

[**DeleteV2PageReactResponse**](../model/DeleteV2PageReactResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="flagCommentPublic"></a>
# **flagCommentPublic**
> FlagCommentPublicResponse flagCommentPublic(tenantId, commentId, isFlagged, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **commentId** | **String**|  | [default to null] |
| **isFlagged** | **Boolean**|  | [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**FlagCommentPublicResponse**](../model/FlagCommentPublicResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCommentText"></a>
# **getCommentText**
> GetCommentTextResponse_1 getCommentText(tenantId, commentId, editKey, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **commentId** | **String**|  | [default to null] |
| **editKey** | **String**|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**GetCommentTextResponse_1**](../model/GetCommentTextResponse_1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCommentVoteUserNames"></a>
# **getCommentVoteUserNames**
> GetCommentVoteUserNamesResponse getCommentVoteUserNames(tenantId, commentId, dir, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **commentId** | **String**|  | [default to null] |
| **dir** | **Integer**|  | [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**GetCommentVoteUserNamesResponse**](../model/GetCommentVoteUserNamesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCommentsForUser"></a>
# **getCommentsForUser**
> GetCommentsForUserResponse_1 getCommentsForUser(userId, direction, repliesToUserId, page, includei10n, locale, isCrawler)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **userId** | **String**|  | [optional] [default to null] |
| **direction** | [**SortDirections**](../model/.md)|  | [optional] [default to null] [enum: OF, NF, MR] |
| **repliesToUserId** | **String**|  | [optional] [default to null] |
| **page** | **Double**|  | [optional] [default to null] |
| **includei10n** | **Boolean**|  | [optional] [default to null] |
| **locale** | **String**|  | [optional] [default to null] |
| **isCrawler** | **Boolean**|  | [optional] [default to null] |

### Return type

[**GetCommentsForUserResponse_1**](../model/GetCommentsForUserResponse_1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCommentsPublic"></a>
# **getCommentsPublic**
> GetCommentsPublicResponse getCommentsPublic(tenantId, urlId, page, direction, sso, skip, skipChildren, limit, limitChildren, countChildren, fetchPageForCommentId, includeConfig, countAll, includei10n, locale, modules, isCrawler, includeNotificationCount, asTree, maxTreeDepth, useFullTranslationIds, parentId, searchText, hashTags, userId, customConfigStr, afterCommentId, beforeCommentId)



     req tenantId urlId

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |
| **page** | **Integer**|  | [optional] [default to null] |
| **direction** | [**SortDirections**](../model/.md)|  | [optional] [default to null] [enum: OF, NF, MR] |
| **sso** | **String**|  | [optional] [default to null] |
| **skip** | **Integer**|  | [optional] [default to null] |
| **skipChildren** | **Integer**|  | [optional] [default to null] |
| **limit** | **Integer**|  | [optional] [default to null] |
| **limitChildren** | **Integer**|  | [optional] [default to null] |
| **countChildren** | **Boolean**|  | [optional] [default to null] |
| **fetchPageForCommentId** | **String**|  | [optional] [default to null] |
| **includeConfig** | **Boolean**|  | [optional] [default to null] |
| **countAll** | **Boolean**|  | [optional] [default to null] |
| **includei10n** | **Boolean**|  | [optional] [default to null] |
| **locale** | **String**|  | [optional] [default to null] |
| **modules** | **String**|  | [optional] [default to null] |
| **isCrawler** | **Boolean**|  | [optional] [default to null] |
| **includeNotificationCount** | **Boolean**|  | [optional] [default to null] |
| **asTree** | **Boolean**|  | [optional] [default to null] |
| **maxTreeDepth** | **Integer**|  | [optional] [default to null] |
| **useFullTranslationIds** | **Boolean**|  | [optional] [default to null] |
| **parentId** | **String**|  | [optional] [default to null] |
| **searchText** | **String**|  | [optional] [default to null] |
| **hashTags** | [**List**](../model/String.md)|  | [optional] [default to null] |
| **userId** | **String**|  | [optional] [default to null] |
| **customConfigStr** | **String**|  | [optional] [default to null] |
| **afterCommentId** | **String**|  | [optional] [default to null] |
| **beforeCommentId** | **String**|  | [optional] [default to null] |

### Return type

[**GetCommentsPublicResponse**](../model/GetCommentsPublicResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getEventLog"></a>
# **getEventLog**
> GetEventLogResponse_1 getEventLog(tenantId, urlId, userIdWS, startTime, endTime)



     req tenantId urlId userIdWS

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |
| **userIdWS** | **String**|  | [default to null] |
| **startTime** | **Long**|  | [default to null] |
| **endTime** | **Long**|  | [optional] [default to null] |

### Return type

[**GetEventLogResponse_1**](../model/GetEventLogResponse_1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getFeedPostsPublic"></a>
# **getFeedPostsPublic**
> GetFeedPostsPublicResponse getFeedPostsPublic(tenantId, afterId, limit, tags, sso, isCrawler, includeUserInfo)



     req tenantId afterId

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **afterId** | **String**|  | [optional] [default to null] |
| **limit** | **Integer**|  | [optional] [default to null] |
| **tags** | [**List**](../model/String.md)|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |
| **isCrawler** | **Boolean**|  | [optional] [default to null] |
| **includeUserInfo** | **Boolean**|  | [optional] [default to null] |

### Return type

[**GetFeedPostsPublicResponse**](../model/GetFeedPostsPublicResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getFeedPostsStats"></a>
# **getFeedPostsStats**
> GetFeedPostsStatsResponse getFeedPostsStats(tenantId, postIds, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **postIds** | [**List**](../model/String.md)|  | [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**GetFeedPostsStatsResponse**](../model/GetFeedPostsStatsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getGifLarge"></a>
# **getGifLarge**
> GetGifLargeResponse getGifLarge(tenantId, largeInternalURLSanitized)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **largeInternalURLSanitized** | **String**|  | [default to null] |

### Return type

[**GetGifLargeResponse**](../model/GetGifLargeResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getGifsSearch"></a>
# **getGifsSearch**
> GetGifsSearchResponse getGifsSearch(tenantId, search, locale, rating, page)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **search** | **String**|  | [default to null] |
| **locale** | **String**|  | [optional] [default to null] |
| **rating** | **String**|  | [optional] [default to null] |
| **page** | **Double**|  | [optional] [default to null] |

### Return type

[**GetGifsSearchResponse**](../model/GetGifsSearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getGifsTrending"></a>
# **getGifsTrending**
> GetGifsTrendingResponse getGifsTrending(tenantId, locale, rating, page)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **locale** | **String**|  | [optional] [default to null] |
| **rating** | **String**|  | [optional] [default to null] |
| **page** | **Double**|  | [optional] [default to null] |

### Return type

[**GetGifsTrendingResponse**](../model/GetGifsTrendingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getGlobalEventLog"></a>
# **getGlobalEventLog**
> GetGlobalEventLogResponse getGlobalEventLog(tenantId, urlId, userIdWS, startTime, endTime)



     req tenantId urlId userIdWS

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |
| **userIdWS** | **String**|  | [default to null] |
| **startTime** | **Long**|  | [default to null] |
| **endTime** | **Long**|  | [optional] [default to null] |

### Return type

[**GetGlobalEventLogResponse**](../model/GetGlobalEventLogResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getOfflineUsers"></a>
# **getOfflineUsers**
> GetOfflineUsersResponse getOfflineUsers(tenantId, urlId, afterName, afterUserId)



    Past commenters on the page who are NOT currently online. Sorted by displayName. Use this after exhausting /users/online to render a \&quot;Members\&quot; section. Cursor pagination on commenterName: server walks the partial {tenantId, urlId, commenterName} index from afterName forward via $gt, no $skip cost.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**| Page URL identifier (cleaned server-side). | [default to null] |
| **afterName** | **String**| Cursor: pass nextAfterName from the previous response. | [optional] [default to null] |
| **afterUserId** | **String**| Cursor tiebreaker: pass nextAfterUserId from the previous response. Required when afterName is set so name-ties don&#39;t drop entries. | [optional] [default to null] |

### Return type

[**GetOfflineUsersResponse**](../model/GetOfflineUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getOnlineUsers"></a>
# **getOnlineUsers**
> GetOnlineUsersResponse getOnlineUsers(tenantId, urlId, afterName, afterUserId)



    Currently-online viewers of a page: people whose websocket session is subscribed to the page right now. Returns anonCount + totalCount (room-wide subscribers, including anon viewers we don&#39;t enumerate).

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**| Page URL identifier (cleaned server-side). | [default to null] |
| **afterName** | **String**| Cursor: pass nextAfterName from the previous response. | [optional] [default to null] |
| **afterUserId** | **String**| Cursor tiebreaker: pass nextAfterUserId from the previous response. Required when afterName is set so name-ties don&#39;t drop entries. | [optional] [default to null] |

### Return type

[**GetOnlineUsersResponse**](../model/GetOnlineUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getPagesPublic"></a>
# **getPagesPublic**
> GetPagesPublicResponse getPagesPublic(tenantId, cursor, limit, q, sortBy, hasComments)



    List pages for a tenant. Used by the FChat desktop client to populate its room list. Requires &#x60;enableFChat&#x60; to be true on the resolved custom config for each page. Pages that require SSO are filtered against the requesting user&#39;s group access.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **cursor** | **String**| Opaque pagination cursor returned as &#x60;nextCursor&#x60; from a prior request. Tied to the same &#x60;sortBy&#x60;. | [optional] [default to null] |
| **limit** | **Integer**| 1..200, default 50 | [optional] [default to null] |
| **q** | **String**| Optional case-insensitive title prefix filter. | [optional] [default to null] |
| **sortBy** | [**PagesSortBy**](../model/.md)| Sort order. &#x60;updatedAt&#x60; (default, newest first), &#x60;commentCount&#x60; (most comments first), or &#x60;title&#x60; (alphabetical). | [optional] [default to null] [enum: updatedAt, commentCount, title] |
| **hasComments** | **Boolean**| If true, only return pages with at least one comment. | [optional] [default to null] |

### Return type

[**GetPagesPublicResponse**](../model/GetPagesPublicResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTranslations"></a>
# **getTranslations**
> GetTranslationsResponse_1 getTranslations(namespace, component, locale, useFullTranslationIds)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **namespace** | **String**|  | [default to null] |
| **component** | **String**|  | [default to null] |
| **locale** | **String**|  | [optional] [default to null] |
| **useFullTranslationIds** | **Boolean**|  | [optional] [default to null] |

### Return type

[**GetTranslationsResponse_1**](../model/GetTranslationsResponse_1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserNotificationCount"></a>
# **getUserNotificationCount**
> GetUserNotificationCountResponse_1 getUserNotificationCount(tenantId, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**GetUserNotificationCountResponse_1**](../model/GetUserNotificationCountResponse_1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserNotifications"></a>
# **getUserNotifications**
> GetUserNotificationsResponse getUserNotifications(tenantId, urlId, pageSize, afterId, includeContext, afterCreatedAt, unreadOnly, dmOnly, noDm, includeTranslations, includeTenantNotifications, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**| Used to determine whether the current page is subscribed. | [optional] [default to null] |
| **pageSize** | **Integer**|  | [optional] [default to null] |
| **afterId** | **String**|  | [optional] [default to null] |
| **includeContext** | **Boolean**|  | [optional] [default to null] |
| **afterCreatedAt** | **Long**|  | [optional] [default to null] |
| **unreadOnly** | **Boolean**|  | [optional] [default to null] |
| **dmOnly** | **Boolean**|  | [optional] [default to null] |
| **noDm** | **Boolean**|  | [optional] [default to null] |
| **includeTranslations** | **Boolean**|  | [optional] [default to null] |
| **includeTenantNotifications** | **Boolean**|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**GetUserNotificationsResponse**](../model/GetUserNotificationsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserPresenceStatuses"></a>
# **getUserPresenceStatuses**
> GetUserPresenceStatusesResponse_1 getUserPresenceStatuses(tenantId, urlIdWS, userIds)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlIdWS** | **String**|  | [default to null] |
| **userIds** | **String**|  | [default to null] |

### Return type

[**GetUserPresenceStatusesResponse_1**](../model/GetUserPresenceStatusesResponse_1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserReactsPublic"></a>
# **getUserReactsPublic**
> GetUserReactsPublicResponse getUserReactsPublic(tenantId, postIds, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **postIds** | [**List**](../model/String.md)|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**GetUserReactsPublicResponse**](../model/GetUserReactsPublicResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUsersInfo"></a>
# **getUsersInfo**
> GetUsersInfoResponse getUsersInfo(tenantId, ids)



    Bulk user info for a tenant. Given userIds, return display info from User / SSOUser. Used by the comment widget to enrich users that just appeared via a presence event. No page context: privacy is enforced uniformly (private profiles are masked).

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **ids** | **String**| Comma-delimited userIds. | [default to null] |

### Return type

[**GetUsersInfoResponse**](../model/GetUsersInfoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getV1PageLikes"></a>
# **getV1PageLikes**
> GetV1PageLikesResponse getV1PageLikes(tenantId, urlId)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |

### Return type

[**GetV1PageLikesResponse**](../model/GetV1PageLikesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getV2PageReactUsers"></a>
# **getV2PageReactUsers**
> GetV2PageReactUsersResponse_1 getV2PageReactUsers(tenantId, urlId, id)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |
| **id** | **String**|  | [default to null] |

### Return type

[**GetV2PageReactUsersResponse_1**](../model/GetV2PageReactUsersResponse_1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getV2PageReacts"></a>
# **getV2PageReacts**
> GetV2PageReactsResponse getV2PageReacts(tenantId, urlId)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |

### Return type

[**GetV2PageReactsResponse**](../model/GetV2PageReactsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="lockComment"></a>
# **lockComment**
> LockCommentResponse lockComment(tenantId, commentId, broadcastId, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **commentId** | **String**|  | [default to null] |
| **broadcastId** | **String**|  | [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**LockCommentResponse**](../model/LockCommentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="logoutPublic"></a>
# **logoutPublic**
> APIEmptyResponse logoutPublic()



### Parameters
This endpoint does not need any parameter.

### Return type

[**APIEmptyResponse**](../model/APIEmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="pinComment"></a>
# **pinComment**
> PinCommentResponse pinComment(tenantId, commentId, broadcastId, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **commentId** | **String**|  | [default to null] |
| **broadcastId** | **String**|  | [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**PinCommentResponse**](../model/PinCommentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="reactFeedPostPublic"></a>
# **reactFeedPostPublic**
> ReactFeedPostPublicResponse reactFeedPostPublic(tenantId, postId, ReactBodyParams, isUndo, broadcastId, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **postId** | **String**|  | [default to null] |
| **ReactBodyParams** | [**ReactBodyParams**](../model/ReactBodyParams.md)|  | |
| **isUndo** | **Boolean**|  | [optional] [default to null] |
| **broadcastId** | **String**|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**ReactFeedPostPublicResponse**](../model/ReactFeedPostPublicResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="resetUserNotificationCount"></a>
# **resetUserNotificationCount**
> ResetUserNotificationCountResponse resetUserNotificationCount(tenantId, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**ResetUserNotificationCountResponse**](../model/ResetUserNotificationCountResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="resetUserNotifications"></a>
# **resetUserNotifications**
> ResetUserNotificationsResponse_1 resetUserNotifications(tenantId, afterId, afterCreatedAt, unreadOnly, dmOnly, noDm, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **afterId** | **String**|  | [optional] [default to null] |
| **afterCreatedAt** | **Long**|  | [optional] [default to null] |
| **unreadOnly** | **Boolean**|  | [optional] [default to null] |
| **dmOnly** | **Boolean**|  | [optional] [default to null] |
| **noDm** | **Boolean**|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**ResetUserNotificationsResponse_1**](../model/ResetUserNotificationsResponse_1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="searchUsers"></a>
# **searchUsers**
> SearchUsersResponse_1 searchUsers(tenantId, urlId, usernameStartsWith, mentionGroupIds, sso, searchSection)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |
| **usernameStartsWith** | **String**|  | [optional] [default to null] |
| **mentionGroupIds** | [**List**](../model/String.md)|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |
| **searchSection** | **String**|  | [optional] [default to null] [enum: fast, site] |

### Return type

[**SearchUsersResponse_1**](../model/SearchUsersResponse_1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="setCommentText"></a>
# **setCommentText**
> SetCommentTextResponse_1 setCommentText(tenantId, commentId, broadcastId, CommentTextUpdateRequest, editKey, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **commentId** | **String**|  | [default to null] |
| **broadcastId** | **String**|  | [default to null] |
| **CommentTextUpdateRequest** | [**CommentTextUpdateRequest**](../model/CommentTextUpdateRequest.md)|  | |
| **editKey** | **String**|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**SetCommentTextResponse_1**](../model/SetCommentTextResponse_1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="unBlockCommentPublic"></a>
# **unBlockCommentPublic**
> UnBlockCommentPublicResponse unBlockCommentPublic(tenantId, commentId, PublicBlockFromCommentParams, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **commentId** | **String**|  | [default to null] |
| **PublicBlockFromCommentParams** | [**PublicBlockFromCommentParams**](../model/PublicBlockFromCommentParams.md)|  | |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**UnBlockCommentPublicResponse**](../model/UnBlockCommentPublicResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="unLockComment"></a>
# **unLockComment**
> UnLockCommentResponse unLockComment(tenantId, commentId, broadcastId, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **commentId** | **String**|  | [default to null] |
| **broadcastId** | **String**|  | [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**UnLockCommentResponse**](../model/UnLockCommentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="unPinComment"></a>
# **unPinComment**
> UnPinCommentResponse unPinComment(tenantId, commentId, broadcastId, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **commentId** | **String**|  | [default to null] |
| **broadcastId** | **String**|  | [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**UnPinCommentResponse**](../model/UnPinCommentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateFeedPostPublic"></a>
# **updateFeedPostPublic**
> UpdateFeedPostPublicResponse updateFeedPostPublic(tenantId, postId, UpdateFeedPostParams, broadcastId, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **postId** | **String**|  | [default to null] |
| **UpdateFeedPostParams** | [**UpdateFeedPostParams**](../model/UpdateFeedPostParams.md)|  | |
| **broadcastId** | **String**|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**UpdateFeedPostPublicResponse**](../model/UpdateFeedPostPublicResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateUserNotificationCommentSubscriptionStatus"></a>
# **updateUserNotificationCommentSubscriptionStatus**
> UpdateUserNotificationCommentSubscriptionStatusResponse updateUserNotificationCommentSubscriptionStatus(tenantId, notificationId, optedInOrOut, commentId, sso)



    Enable or disable notifications for a specific comment.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **notificationId** | **String**|  | [default to null] |
| **optedInOrOut** | **String**|  | [default to null] [enum: in, out] |
| **commentId** | **String**|  | [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**UpdateUserNotificationCommentSubscriptionStatusResponse**](../model/UpdateUserNotificationCommentSubscriptionStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateUserNotificationPageSubscriptionStatus"></a>
# **updateUserNotificationPageSubscriptionStatus**
> UpdateUserNotificationPageSubscriptionStatusResponse updateUserNotificationPageSubscriptionStatus(tenantId, urlId, url, pageTitle, subscribedOrUnsubscribed, sso)



    Enable or disable notifications for a page. When users are subscribed to a page, notifications are created for new root comments, and also

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |
| **url** | **String**|  | [default to null] |
| **pageTitle** | **String**|  | [default to null] |
| **subscribedOrUnsubscribed** | **String**|  | [default to null] [enum: subscribe, unsubscribe] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**UpdateUserNotificationPageSubscriptionStatusResponse**](../model/UpdateUserNotificationPageSubscriptionStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateUserNotificationStatus"></a>
# **updateUserNotificationStatus**
> UpdateUserNotificationStatusResponse updateUserNotificationStatus(tenantId, notificationId, newStatus, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **notificationId** | **String**|  | [default to null] |
| **newStatus** | **String**|  | [default to null] [enum: read, unread] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**UpdateUserNotificationStatusResponse**](../model/UpdateUserNotificationStatusResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="uploadImage"></a>
# **uploadImage**
> UploadImageResponse uploadImage(tenantId, file, sizePreset, urlId)



    Upload and resize an image

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **file** | **File**|  | [default to null] |
| **sizePreset** | [**SizePreset**](../model/.md)| Size preset: \&quot;Default\&quot; (1000x1000px) or \&quot;CrossPlatform\&quot; (creates sizes for popular devices) | [optional] [default to null] [enum: Default, CrossPlatform] |
| **urlId** | **String**| Page id that upload is happening from, to configure | [optional] [default to null] |

### Return type

[**UploadImageResponse**](../model/UploadImageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

<a name="voteComment"></a>
# **voteComment**
> VoteCommentResponse voteComment(tenantId, commentId, urlId, broadcastId, VoteBodyParams, sessionId, sso)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tenantId** | **String**|  | [default to null] |
| **commentId** | **String**|  | [default to null] |
| **urlId** | **String**|  | [default to null] |
| **broadcastId** | **String**|  | [default to null] |
| **VoteBodyParams** | [**VoteBodyParams**](../model/VoteBodyParams.md)|  | |
| **sessionId** | **String**|  | [optional] [default to null] |
| **sso** | **String**|  | [optional] [default to null] |

### Return type

[**VoteCommentResponse**](../model/VoteCommentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


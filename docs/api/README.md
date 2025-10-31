# Documentation for fastcomments

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://fastcomments.com*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *DefaultApi* | [**addDomainConfig**](Apis/DefaultApi.md#adddomainconfig) | **POST** /api/v1/domain-configs |  |
*DefaultApi* | [**addPage**](Apis/DefaultApi.md#addpage) | **POST** /api/v1/pages |  |
*DefaultApi* | [**addSSOUser**](Apis/DefaultApi.md#addssouser) | **POST** /api/v1/sso-users |  |
*DefaultApi* | [**aggregate**](Apis/DefaultApi.md#aggregate) | **POST** /api/v1/aggregate | Aggregates documents by grouping them (if groupBy is provided) and applying multiple operations. Different operations (e.g. sum, countDistinct, avg, etc.) are supported. |
*DefaultApi* | [**aggregateQuestionResults**](Apis/DefaultApi.md#aggregatequestionresults) | **GET** /api/v1/question-results-aggregation |  |
*DefaultApi* | [**blockUserFromComment**](Apis/DefaultApi.md#blockuserfromcomment) | **POST** /api/v1/comments/{id}/block |  |
*DefaultApi* | [**bulkAggregateQuestionResults**](Apis/DefaultApi.md#bulkaggregatequestionresults) | **POST** /api/v1/question-results-aggregation/bulk |  |
*DefaultApi* | [**combineCommentsWithQuestionResults**](Apis/DefaultApi.md#combinecommentswithquestionresults) | **GET** /api/v1/question-results-aggregation/combine/comments |  |
*DefaultApi* | [**createFeedPost**](Apis/DefaultApi.md#createfeedpost) | **POST** /api/v1/feed-posts |  |
*DefaultApi* | [**createSubscription**](Apis/DefaultApi.md#createsubscription) | **POST** /api/v1/subscriptions |  |
*DefaultApi* | [**createUserBadge**](Apis/DefaultApi.md#createuserbadge) | **POST** /api/v1/user-badges |  |
*DefaultApi* | [**deleteComment**](Apis/DefaultApi.md#deletecomment) | **DELETE** /api/v1/comments/{id} |  |
*DefaultApi* | [**deleteDomainConfig**](Apis/DefaultApi.md#deletedomainconfig) | **DELETE** /api/v1/domain-configs/{domain} |  |
*DefaultApi* | [**deletePage**](Apis/DefaultApi.md#deletepage) | **DELETE** /api/v1/pages/{id} |  |
*DefaultApi* | [**deleteSSOUser**](Apis/DefaultApi.md#deletessouser) | **DELETE** /api/v1/sso-users/{id} |  |
*DefaultApi* | [**deleteSubscription**](Apis/DefaultApi.md#deletesubscription) | **DELETE** /api/v1/subscriptions/{id} |  |
*DefaultApi* | [**deleteUserBadge**](Apis/DefaultApi.md#deleteuserbadge) | **DELETE** /api/v1/user-badges/{id} |  |
*DefaultApi* | [**flagComment**](Apis/DefaultApi.md#flagcomment) | **POST** /api/v1/comments/{id}/flag |  |
*DefaultApi* | [**getAuditLogs**](Apis/DefaultApi.md#getauditlogs) | **GET** /api/v1/audit-logs |  |
*DefaultApi* | [**getComment**](Apis/DefaultApi.md#getcomment) | **GET** /api/v1/comments/{id} |  |
*DefaultApi* | [**getComments**](Apis/DefaultApi.md#getcomments) | **GET** /api/v1/comments |  |
*DefaultApi* | [**getDomainConfig**](Apis/DefaultApi.md#getdomainconfig) | **GET** /api/v1/domain-configs/{domain} |  |
*DefaultApi* | [**getDomainConfigs**](Apis/DefaultApi.md#getdomainconfigs) | **GET** /api/v1/domain-configs |  |
*DefaultApi* | [**getFeedPosts**](Apis/DefaultApi.md#getfeedposts) | **GET** /api/v1/feed-posts |  req tenantId afterId |
*DefaultApi* | [**getPageByURLId**](Apis/DefaultApi.md#getpagebyurlid) | **GET** /api/v1/pages/by-url-id |  |
*DefaultApi* | [**getPages**](Apis/DefaultApi.md#getpages) | **GET** /api/v1/pages |  |
*DefaultApi* | [**getSSOUserByEmail**](Apis/DefaultApi.md#getssouserbyemail) | **GET** /api/v1/sso-users/by-email/{email} |  |
*DefaultApi* | [**getSSOUserById**](Apis/DefaultApi.md#getssouserbyid) | **GET** /api/v1/sso-users/by-id/{id} |  |
*DefaultApi* | [**getSSOUsers**](Apis/DefaultApi.md#getssousers) | **GET** /api/v1/sso-users |  |
*DefaultApi* | [**getSubscriptions**](Apis/DefaultApi.md#getsubscriptions) | **GET** /api/v1/subscriptions |  |
*DefaultApi* | [**getUserBadge**](Apis/DefaultApi.md#getuserbadge) | **GET** /api/v1/user-badges/{id} |  |
*DefaultApi* | [**getUserBadgeProgressById**](Apis/DefaultApi.md#getuserbadgeprogressbyid) | **GET** /api/v1/user-badge-progress/{id} |  |
*DefaultApi* | [**getUserBadgeProgressByUserId**](Apis/DefaultApi.md#getuserbadgeprogressbyuserid) | **GET** /api/v1/user-badge-progress/user/{userId} |  |
*DefaultApi* | [**getUserBadgeProgressList**](Apis/DefaultApi.md#getuserbadgeprogresslist) | **GET** /api/v1/user-badge-progress |  |
*DefaultApi* | [**getUserBadges**](Apis/DefaultApi.md#getuserbadges) | **GET** /api/v1/user-badges |  |
*DefaultApi* | [**patchDomainConfig**](Apis/DefaultApi.md#patchdomainconfig) | **PATCH** /api/v1/domain-configs/{domainToUpdate} |  |
*DefaultApi* | [**patchPage**](Apis/DefaultApi.md#patchpage) | **PATCH** /api/v1/pages/{id} |  |
*DefaultApi* | [**patchSSOUser**](Apis/DefaultApi.md#patchssouser) | **PATCH** /api/v1/sso-users/{id} |  |
*DefaultApi* | [**putDomainConfig**](Apis/DefaultApi.md#putdomainconfig) | **PUT** /api/v1/domain-configs/{domainToUpdate} |  |
*DefaultApi* | [**putSSOUser**](Apis/DefaultApi.md#putssouser) | **PUT** /api/v1/sso-users/{id} |  |
*DefaultApi* | [**saveComment**](Apis/DefaultApi.md#savecomment) | **POST** /api/v1/comments |  |
*DefaultApi* | [**saveCommentsBulk**](Apis/DefaultApi.md#savecommentsbulk) | **POST** /api/v1/comments/bulk |  |
*DefaultApi* | [**unBlockUserFromComment**](Apis/DefaultApi.md#unblockuserfromcomment) | **POST** /api/v1/comments/{id}/un-block |  |
*DefaultApi* | [**unFlagComment**](Apis/DefaultApi.md#unflagcomment) | **POST** /api/v1/comments/{id}/un-flag |  |
*DefaultApi* | [**updateComment**](Apis/DefaultApi.md#updatecomment) | **PATCH** /api/v1/comments/{id} |  |
*DefaultApi* | [**updateFeedPost**](Apis/DefaultApi.md#updatefeedpost) | **PATCH** /api/v1/feed-posts/{id} |  |
*DefaultApi* | [**updateUserBadge**](Apis/DefaultApi.md#updateuserbadge) | **PUT** /api/v1/user-badges/{id} |  |
| *PublicApi* | [**blockFromCommentPublic**](Apis/PublicApi.md#blockfromcommentpublic) | **POST** /block-from-comment/{commentId} |  |
*PublicApi* | [**checkedCommentsForBlocked**](Apis/PublicApi.md#checkedcommentsforblocked) | **GET** /check-blocked-comments |  |
*PublicApi* | [**createCommentPublic**](Apis/PublicApi.md#createcommentpublic) | **POST** /comments/{tenantId} |  |
*PublicApi* | [**createFeedPostPublic**](Apis/PublicApi.md#createfeedpostpublic) | **POST** /feed-posts/{tenantId} |  |
*PublicApi* | [**deleteCommentPublic**](Apis/PublicApi.md#deletecommentpublic) | **DELETE** /comments/{tenantId}/{commentId} |  |
*PublicApi* | [**deleteCommentVote**](Apis/PublicApi.md#deletecommentvote) | **DELETE** /comments/{tenantId}/{commentId}/vote/{voteId} |  |
*PublicApi* | [**deleteFeedPostPublic**](Apis/PublicApi.md#deletefeedpostpublic) | **DELETE** /feed-posts/{tenantId}/{postId} |  |
*PublicApi* | [**flagCommentPublic**](Apis/PublicApi.md#flagcommentpublic) | **POST** /flag-comment/{commentId} |  |
*PublicApi* | [**getCommentText**](Apis/PublicApi.md#getcommenttext) | **GET** /comments/{tenantId}/{commentId}/text |  |
*PublicApi* | [**getCommentVoteUserNames**](Apis/PublicApi.md#getcommentvoteusernames) | **GET** /comments/{tenantId}/{commentId}/votes |  |
*PublicApi* | [**getCommentsPublic**](Apis/PublicApi.md#getcommentspublic) | **GET** /comments/{tenantId} |  req tenantId urlId |
*PublicApi* | [**getEventLog**](Apis/PublicApi.md#geteventlog) | **GET** /event-log/{tenantId} |  req tenantId urlId userIdWS |
*PublicApi* | [**getFeedPostsPublic**](Apis/PublicApi.md#getfeedpostspublic) | **GET** /feed-posts/{tenantId} |  req tenantId afterId |
*PublicApi* | [**getFeedPostsStats**](Apis/PublicApi.md#getfeedpostsstats) | **GET** /feed-posts/{tenantId}/stats |  |
*PublicApi* | [**getGlobalEventLog**](Apis/PublicApi.md#getglobaleventlog) | **GET** /event-log/global/{tenantId} |  req tenantId urlId userIdWS |
*PublicApi* | [**getUserNotificationCount**](Apis/PublicApi.md#getusernotificationcount) | **GET** /user-notifications/get-count |  |
*PublicApi* | [**getUserNotifications**](Apis/PublicApi.md#getusernotifications) | **GET** /user-notifications |  |
*PublicApi* | [**getUserPresenceStatuses**](Apis/PublicApi.md#getuserpresencestatuses) | **GET** /user-presence-status |  |
*PublicApi* | [**getUserReactsPublic**](Apis/PublicApi.md#getuserreactspublic) | **GET** /feed-posts/{tenantId}/user-reacts |  |
*PublicApi* | [**lockComment**](Apis/PublicApi.md#lockcomment) | **POST** /comments/{tenantId}/{commentId}/lock |  |
*PublicApi* | [**pinComment**](Apis/PublicApi.md#pincomment) | **POST** /comments/{tenantId}/{commentId}/pin |  |
*PublicApi* | [**reactFeedPostPublic**](Apis/PublicApi.md#reactfeedpostpublic) | **POST** /feed-posts/{tenantId}/react/{postId} |  |
*PublicApi* | [**resetUserNotificationCount**](Apis/PublicApi.md#resetusernotificationcount) | **POST** /user-notifications/reset-count |  |
*PublicApi* | [**resetUserNotifications**](Apis/PublicApi.md#resetusernotifications) | **POST** /user-notifications/reset |  |
*PublicApi* | [**searchUsers**](Apis/PublicApi.md#searchusers) | **GET** /user-search/{tenantId} |  |
*PublicApi* | [**setCommentText**](Apis/PublicApi.md#setcommenttext) | **POST** /comments/{tenantId}/{commentId}/update-text |  |
*PublicApi* | [**unBlockCommentPublic**](Apis/PublicApi.md#unblockcommentpublic) | **DELETE** /block-from-comment/{commentId} |  |
*PublicApi* | [**unLockComment**](Apis/PublicApi.md#unlockcomment) | **POST** /comments/{tenantId}/{commentId}/unlock |  |
*PublicApi* | [**unPinComment**](Apis/PublicApi.md#unpincomment) | **POST** /comments/{tenantId}/{commentId}/unpin |  |
*PublicApi* | [**updateFeedPostPublic**](Apis/PublicApi.md#updatefeedpostpublic) | **PUT** /feed-posts/{tenantId}/{postId} |  |
*PublicApi* | [**updateUserNotificationCommentSubscriptionStatus**](Apis/PublicApi.md#updateusernotificationcommentsubscriptionstatus) | **POST** /user-notifications/{notificationId}/mark-opted/{optedInOrOut} | Enable or disable notifications for a specific comment. |
*PublicApi* | [**updateUserNotificationPageSubscriptionStatus**](Apis/PublicApi.md#updateusernotificationpagesubscriptionstatus) | **POST** /user-notifications/set-subscription-state/{subscribedOrUnsubscribed} | Enable or disable notifications for a page. When users are subscribed to a page, notifications are created for new root comments, and also |
*PublicApi* | [**updateUserNotificationStatus**](Apis/PublicApi.md#updateusernotificationstatus) | **POST** /user-notifications/{notificationId}/mark/{newStatus} |  |
*PublicApi* | [**uploadImage**](Apis/PublicApi.md#uploadimage) | **POST** /upload-image/{tenantId} | Upload and resize an image |
*PublicApi* | [**voteComment**](Apis/PublicApi.md#votecomment) | **POST** /comments/{tenantId}/{commentId}/vote |  |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [APICreateUserBadgeResponse](./model/APICreateUserBadgeResponse.md)
 - [APIEmptyResponse](./model/APIEmptyResponse.md)
 - [APIEmptySuccessResponse](./model/APIEmptySuccessResponse.md)
 - [APIError](./model/APIError.md)
 - [APIGetCommentResponse](./model/APIGetCommentResponse.md)
 - [APIGetCommentsResponse](./model/APIGetCommentsResponse.md)
 - [APIGetUserBadgeProgressListResponse](./model/APIGetUserBadgeProgressListResponse.md)
 - [APIGetUserBadgeProgressResponse](./model/APIGetUserBadgeProgressResponse.md)
 - [APIGetUserBadgeResponse](./model/APIGetUserBadgeResponse.md)
 - [APIGetUserBadgesResponse](./model/APIGetUserBadgesResponse.md)
 - [APIPage](./model/APIPage.md)
 - [APISSOUser](./model/APISSOUser.md)
 - [APIStatus](./model/APIStatus.md)
 - [APIUserSubscription](./model/APIUserSubscription.md)
 - [AddDomainConfigParams](./model/AddDomainConfigParams.md)
 - [AddDomainConfig_200_response](./model/AddDomainConfig_200_response.md)
 - [AddDomainConfig_200_response_anyOf](./model/AddDomainConfig_200_response_anyOf.md)
 - [AddPageAPIResponse](./model/AddPageAPIResponse.md)
 - [AddSSOUserAPIResponse](./model/AddSSOUserAPIResponse.md)
 - [AggregateQuestionResultsResponse](./model/AggregateQuestionResultsResponse.md)
 - [AggregateQuestionResults_200_response](./model/AggregateQuestionResults_200_response.md)
 - [AggregateTimeBucket](./model/AggregateTimeBucket.md)
 - [AggregationItem](./model/AggregationItem.md)
 - [AggregationOpType](./model/AggregationOpType.md)
 - [AggregationOperation](./model/AggregationOperation.md)
 - [AggregationRequest](./model/AggregationRequest.md)
 - [AggregationRequest_sort](./model/AggregationRequest_sort.md)
 - [AggregationResponse](./model/AggregationResponse.md)
 - [AggregationResponse_stats](./model/AggregationResponse_stats.md)
 - [AggregationValue](./model/AggregationValue.md)
 - [BlockFromCommentParams](./model/BlockFromCommentParams.md)
 - [BlockFromCommentPublic_200_response](./model/BlockFromCommentPublic_200_response.md)
 - [BlockSuccess](./model/BlockSuccess.md)
 - [BulkAggregateQuestionItem](./model/BulkAggregateQuestionItem.md)
 - [BulkAggregateQuestionResultsRequest](./model/BulkAggregateQuestionResultsRequest.md)
 - [BulkAggregateQuestionResultsResponse](./model/BulkAggregateQuestionResultsResponse.md)
 - [BulkAggregateQuestionResults_200_response](./model/BulkAggregateQuestionResults_200_response.md)
 - [ChangeCommentPinStatusResponse](./model/ChangeCommentPinStatusResponse.md)
 - [CheckBlockedCommentsResponse](./model/CheckBlockedCommentsResponse.md)
 - [CheckedCommentsForBlocked_200_response](./model/CheckedCommentsForBlocked_200_response.md)
 - [CombineCommentsWithQuestionResults_200_response](./model/CombineCommentsWithQuestionResults_200_response.md)
 - [CombineQuestionResultsWithCommentsResponse](./model/CombineQuestionResultsWithCommentsResponse.md)
 - [CommentData](./model/CommentData.md)
 - [CommentHTMLRenderingMode](./model/CommentHTMLRenderingMode.md)
 - [CommentQuestionResultsRenderingType](./model/CommentQuestionResultsRenderingType.md)
 - [CommentQuestionsRequired](./model/CommentQuestionsRequired.md)
 - [CommentTextUpdateRequest](./model/CommentTextUpdateRequest.md)
 - [CommentThreadDeletionMode](./model/CommentThreadDeletionMode.md)
 - [CommentUserBadgeInfo](./model/CommentUserBadgeInfo.md)
 - [CommentUserHashTagInfo](./model/CommentUserHashTagInfo.md)
 - [CommentUserMentionInfo](./model/CommentUserMentionInfo.md)
 - [CommenterNameFormats](./model/CommenterNameFormats.md)
 - [CreateAPIPageData](./model/CreateAPIPageData.md)
 - [CreateAPISSOUserData](./model/CreateAPISSOUserData.md)
 - [CreateAPIUserSubscriptionData](./model/CreateAPIUserSubscriptionData.md)
 - [CreateCommentParams](./model/CreateCommentParams.md)
 - [CreateCommentPublic_200_response](./model/CreateCommentPublic_200_response.md)
 - [CreateFeedPostParams](./model/CreateFeedPostParams.md)
 - [CreateFeedPostPublic_200_response](./model/CreateFeedPostPublic_200_response.md)
 - [CreateFeedPostResponse](./model/CreateFeedPostResponse.md)
 - [CreateFeedPost_200_response](./model/CreateFeedPost_200_response.md)
 - [CreateFeedPostsResponse](./model/CreateFeedPostsResponse.md)
 - [CreateSubscriptionAPIResponse](./model/CreateSubscriptionAPIResponse.md)
 - [CreateUserBadgeParams](./model/CreateUserBadgeParams.md)
 - [CreateUserBadge_200_response](./model/CreateUserBadge_200_response.md)
 - [CustomConfigParameters](./model/CustomConfigParameters.md)
 - [DeleteCommentAction](./model/DeleteCommentAction.md)
 - [DeleteCommentPublic_200_response](./model/DeleteCommentPublic_200_response.md)
 - [DeleteCommentResult](./model/DeleteCommentResult.md)
 - [DeleteCommentVote_200_response](./model/DeleteCommentVote_200_response.md)
 - [DeleteComment_200_response](./model/DeleteComment_200_response.md)
 - [DeleteDomainConfig_200_response](./model/DeleteDomainConfig_200_response.md)
 - [DeleteFeedPostPublic_200_response](./model/DeleteFeedPostPublic_200_response.md)
 - [DeleteFeedPostPublic_200_response_anyOf](./model/DeleteFeedPostPublic_200_response_anyOf.md)
 - [DeletePageAPIResponse](./model/DeletePageAPIResponse.md)
 - [DeleteSSOUserAPIResponse](./model/DeleteSSOUserAPIResponse.md)
 - [DeleteSubscriptionAPIResponse](./model/DeleteSubscriptionAPIResponse.md)
 - [EventLogEntry](./model/EventLogEntry.md)
 - [FComment](./model/FComment.md)
 - [FComment_meta](./model/FComment_meta.md)
 - [FeedPost](./model/FeedPost.md)
 - [FeedPostLink](./model/FeedPostLink.md)
 - [FeedPostMediaItem](./model/FeedPostMediaItem.md)
 - [FeedPostMediaItemAsset](./model/FeedPostMediaItemAsset.md)
 - [FeedPostStats](./model/FeedPostStats.md)
 - [FeedPostsStatsResponse](./model/FeedPostsStatsResponse.md)
 - [FindCommentsByRangeItem](./model/FindCommentsByRangeItem.md)
 - [FindCommentsByRangeResponse](./model/FindCommentsByRangeResponse.md)
 - [FlagCommentPublic_200_response](./model/FlagCommentPublic_200_response.md)
 - [FlagCommentResponse](./model/FlagCommentResponse.md)
 - [FlagComment_200_response](./model/FlagComment_200_response.md)
 - [GetAuditLogsResponse](./model/GetAuditLogsResponse.md)
 - [GetAuditLogs_200_response](./model/GetAuditLogs_200_response.md)
 - [GetCommentText_200_response](./model/GetCommentText_200_response.md)
 - [GetCommentVoteUserNamesSuccessResponse](./model/GetCommentVoteUserNamesSuccessResponse.md)
 - [GetCommentVoteUserNames_200_response](./model/GetCommentVoteUserNames_200_response.md)
 - [GetComment_200_response](./model/GetComment_200_response.md)
 - [GetCommentsPublic_200_response](./model/GetCommentsPublic_200_response.md)
 - [GetCommentsResponseWithPresence_PublicComment_](./model/GetCommentsResponseWithPresence_PublicComment_.md)
 - [GetCommentsResponse_PublicComment_](./model/GetCommentsResponse_PublicComment_.md)
 - [GetComments_200_response](./model/GetComments_200_response.md)
 - [GetDomainConfig_200_response](./model/GetDomainConfig_200_response.md)
 - [GetDomainConfigs_200_response](./model/GetDomainConfigs_200_response.md)
 - [GetDomainConfigs_200_response_anyOf](./model/GetDomainConfigs_200_response_anyOf.md)
 - [GetDomainConfigs_200_response_anyOf_1](./model/GetDomainConfigs_200_response_anyOf_1.md)
 - [GetEventLogResponse](./model/GetEventLogResponse.md)
 - [GetEventLog_200_response](./model/GetEventLog_200_response.md)
 - [GetFeedPostsPublic_200_response](./model/GetFeedPostsPublic_200_response.md)
 - [GetFeedPostsResponse](./model/GetFeedPostsResponse.md)
 - [GetFeedPostsStats_200_response](./model/GetFeedPostsStats_200_response.md)
 - [GetFeedPosts_200_response](./model/GetFeedPosts_200_response.md)
 - [GetMyNotificationsResponse](./model/GetMyNotificationsResponse.md)
 - [GetPageByURLIdAPIResponse](./model/GetPageByURLIdAPIResponse.md)
 - [GetPagesAPIResponse](./model/GetPagesAPIResponse.md)
 - [GetPublicFeedPostsResponse](./model/GetPublicFeedPostsResponse.md)
 - [GetSSOUserByEmailAPIResponse](./model/GetSSOUserByEmailAPIResponse.md)
 - [GetSSOUserByIdAPIResponse](./model/GetSSOUserByIdAPIResponse.md)
 - [GetSSOUsers_200_response](./model/GetSSOUsers_200_response.md)
 - [GetSubscriptionsAPIResponse](./model/GetSubscriptionsAPIResponse.md)
 - [GetUserBadgeProgressById_200_response](./model/GetUserBadgeProgressById_200_response.md)
 - [GetUserBadgeProgressList_200_response](./model/GetUserBadgeProgressList_200_response.md)
 - [GetUserBadge_200_response](./model/GetUserBadge_200_response.md)
 - [GetUserBadges_200_response](./model/GetUserBadges_200_response.md)
 - [GetUserNotificationCountResponse](./model/GetUserNotificationCountResponse.md)
 - [GetUserNotificationCount_200_response](./model/GetUserNotificationCount_200_response.md)
 - [GetUserNotifications_200_response](./model/GetUserNotifications_200_response.md)
 - [GetUserPresenceStatusesResponse](./model/GetUserPresenceStatusesResponse.md)
 - [GetUserPresenceStatuses_200_response](./model/GetUserPresenceStatuses_200_response.md)
 - [GetUserReactsPublic_200_response](./model/GetUserReactsPublic_200_response.md)
 - [GifRating](./model/GifRating.md)
 - [HeaderState](./model/HeaderState.md)
 - [IgnoredResponse](./model/IgnoredResponse.md)
 - [ImageContentProfanityLevel](./model/ImageContentProfanityLevel.md)
 - [ImportedAPIStatus.FAILED](./model/ImportedAPIStatus.FAILED.md)
 - [ImportedAPIStatus.SUCCESS](./model/ImportedAPIStatus.SUCCESS.md)
 - [LiveEvent](./model/LiveEvent.md)
 - [LiveEventType](./model/LiveEventType.md)
 - [LiveEvent_extraInfo](./model/LiveEvent_extraInfo.md)
 - [LockComment_200_response](./model/LockComment_200_response.md)
 - [MediaAsset](./model/MediaAsset.md)
 - [MetaItem](./model/MetaItem.md)
 - [NotificationAndCount](./model/NotificationAndCount.md)
 - [NotificationObjectType](./model/NotificationObjectType.md)
 - [NotificationType](./model/NotificationType.md)
 - [PatchDomainConfigParams](./model/PatchDomainConfigParams.md)
 - [PatchPageAPIResponse](./model/PatchPageAPIResponse.md)
 - [PatchSSOUserAPIResponse](./model/PatchSSOUserAPIResponse.md)
 - [Pick_APIComment.UpdatableCommentFields_](./model/Pick_APIComment.UpdatableCommentFields_.md)
 - [Pick_FComment.APICommentFieldsKeys_](./model/Pick_FComment.APICommentFieldsKeys_.md)
 - [Pick_FComment.PublicCommentFieldsKeys_](./model/Pick_FComment.PublicCommentFieldsKeys_.md)
 - [Pick_FComment.approved-or-commentHTML_](./model/Pick_FComment.approved-or-commentHTML_.md)
 - [Pick_FComment.isDeleted-or-commentHTML-or-commenterName-or-userId_](./model/Pick_FComment.isDeleted-or-commentHTML-or-commenterName-or-userId_.md)
 - [Pick_FComment_APICommentFieldsKeys__meta](./model/Pick_FComment_APICommentFieldsKeys__meta.md)
 - [Pick_Omit_FComment.date_.PublicCommentPubSubFieldsKeys_](./model/Pick_Omit_FComment.date_.PublicCommentPubSubFieldsKeys_.md)
 - [Pick_TenantAuditLog.TenantAuditLogKeys_](./model/Pick_TenantAuditLog.TenantAuditLogKeys_.md)
 - [PinComment_200_response](./model/PinComment_200_response.md)
 - [PubSubComment](./model/PubSubComment.md)
 - [PubSubVote](./model/PubSubVote.md)
 - [PublicAPIDeleteCommentResponse](./model/PublicAPIDeleteCommentResponse.md)
 - [PublicAPIGetCommentTextResponse](./model/PublicAPIGetCommentTextResponse.md)
 - [PublicAPISetCommentTextResponse](./model/PublicAPISetCommentTextResponse.md)
 - [PublicBlockFromCommentParams](./model/PublicBlockFromCommentParams.md)
 - [PublicComment](./model/PublicComment.md)
 - [PublicFeedPostsResponse](./model/PublicFeedPostsResponse.md)
 - [PutSSOUserAPIResponse](./model/PutSSOUserAPIResponse.md)
 - [QueryPredicate](./model/QueryPredicate.md)
 - [QueryPredicate_value](./model/QueryPredicate_value.md)
 - [QuestionDatum](./model/QuestionDatum.md)
 - [QuestionRenderingType](./model/QuestionRenderingType.md)
 - [QuestionResult](./model/QuestionResult.md)
 - [QuestionResultAggregationOverall](./model/QuestionResultAggregationOverall.md)
 - [QuestionSubQuestionVisibility](./model/QuestionSubQuestionVisibility.md)
 - [QuestionWhenSave](./model/QuestionWhenSave.md)
 - [ReactBodyParams](./model/ReactBodyParams.md)
 - [ReactFeedPostPublic_200_response](./model/ReactFeedPostPublic_200_response.md)
 - [ReactFeedPostResponse](./model/ReactFeedPostResponse.md)
 - [Record_string__before_string_or_null__after_string_or_null___value](./model/Record_string__before_string_or_null__after_string_or_null___value.md)
 - [Record_string_string_or_number__value](./model/Record_string_string_or_number__value.md)
 - [RenderableUserNotification](./model/RenderableUserNotification.md)
 - [ResetUserNotificationsResponse](./model/ResetUserNotificationsResponse.md)
 - [ResetUserNotifications_200_response](./model/ResetUserNotifications_200_response.md)
 - [SORT_DIR](./model/SORT_DIR.md)
 - [SSOSecurityLevel](./model/SSOSecurityLevel.md)
 - [SaveCommentResponse](./model/SaveCommentResponse.md)
 - [SaveCommentResponseOptimized](./model/SaveCommentResponseOptimized.md)
 - [SaveComment_200_response](./model/SaveComment_200_response.md)
 - [SaveCommentsResponseWithPresence](./model/SaveCommentsResponseWithPresence.md)
 - [SearchUsersResponse](./model/SearchUsersResponse.md)
 - [SearchUsers_200_response](./model/SearchUsers_200_response.md)
 - [SetCommentText_200_response](./model/SetCommentText_200_response.md)
 - [SizePreset](./model/SizePreset.md)
 - [SortDirections](./model/SortDirections.md)
 - [SpamRule](./model/SpamRule.md)
 - [UnBlockCommentPublic_200_response](./model/UnBlockCommentPublic_200_response.md)
 - [UnBlockFromCommentParams](./model/UnBlockFromCommentParams.md)
 - [UnblockSuccess](./model/UnblockSuccess.md)
 - [UpdateAPIPageData](./model/UpdateAPIPageData.md)
 - [UpdateAPISSOUserData](./model/UpdateAPISSOUserData.md)
 - [UpdateDomainConfigParams](./model/UpdateDomainConfigParams.md)
 - [UpdateFeedPostParams](./model/UpdateFeedPostParams.md)
 - [UpdateUserBadgeParams](./model/UpdateUserBadgeParams.md)
 - [UpdateUserBadge_200_response](./model/UpdateUserBadge_200_response.md)
 - [UpdateUserNotificationStatus_200_response](./model/UpdateUserNotificationStatus_200_response.md)
 - [UploadImageResponse](./model/UploadImageResponse.md)
 - [UserBadge](./model/UserBadge.md)
 - [UserBadgeProgress](./model/UserBadgeProgress.md)
 - [UserNotification](./model/UserNotification.md)
 - [UserNotificationWriteResponse](./model/UserNotificationWriteResponse.md)
 - [UserPresenceData](./model/UserPresenceData.md)
 - [UserReactsResponse](./model/UserReactsResponse.md)
 - [UserSearchResult](./model/UserSearchResult.md)
 - [UserSessionInfo](./model/UserSessionInfo.md)
 - [VoteBodyParams](./model/VoteBodyParams.md)
 - [VoteComment_200_response](./model/VoteComment_200_response.md)
 - [VoteDeleteResponse](./model/VoteDeleteResponse.md)
 - [VoteDeleteResponse_status](./model/VoteDeleteResponse_status.md)
 - [VoteResponse](./model/VoteResponse.md)
 - [VoteResponseUser](./model/VoteResponseUser.md)
 - [VoteResponse_status](./model/VoteResponse_status.md)
 - [VoteStyle](./model/VoteStyle.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="api_key"></a>
### api_key

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header


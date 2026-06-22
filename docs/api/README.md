# Documentation for fastcomments

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://fastcomments.com*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *DefaultApi* | [**addDomainConfig**](Apis/DefaultApi.md#adddomainconfig) | **POST** /api/v1/domain-configs |  |
*DefaultApi* | [**addHashTag**](Apis/DefaultApi.md#addhashtag) | **POST** /api/v1/hash-tags |  |
*DefaultApi* | [**addHashTagsBulk**](Apis/DefaultApi.md#addhashtagsbulk) | **POST** /api/v1/hash-tags/bulk |  |
*DefaultApi* | [**addPage**](Apis/DefaultApi.md#addpage) | **POST** /api/v1/pages |  |
*DefaultApi* | [**addSSOUser**](Apis/DefaultApi.md#addssouser) | **POST** /api/v1/sso-users |  |
*DefaultApi* | [**aggregate**](Apis/DefaultApi.md#aggregate) | **POST** /api/v1/aggregate | Aggregates documents by grouping them (if groupBy is provided) and applying multiple operations. Different operations (e.g. sum, countDistinct, avg, etc.) are supported. |
*DefaultApi* | [**aggregateQuestionResults**](Apis/DefaultApi.md#aggregatequestionresults) | **GET** /api/v1/question-results-aggregation |  |
*DefaultApi* | [**blockUserFromComment**](Apis/DefaultApi.md#blockuserfromcomment) | **POST** /api/v1/comments/{id}/block |  |
*DefaultApi* | [**bulkAggregateQuestionResults**](Apis/DefaultApi.md#bulkaggregatequestionresults) | **POST** /api/v1/question-results-aggregation/bulk |  |
*DefaultApi* | [**changeTicketState**](Apis/DefaultApi.md#changeticketstate) | **PATCH** /api/v1/tickets/{id}/state |  |
*DefaultApi* | [**combineCommentsWithQuestionResults**](Apis/DefaultApi.md#combinecommentswithquestionresults) | **GET** /api/v1/question-results-aggregation/combine/comments |  |
*DefaultApi* | [**createEmailTemplate**](Apis/DefaultApi.md#createemailtemplate) | **POST** /api/v1/email-templates |  |
*DefaultApi* | [**createFeedPost**](Apis/DefaultApi.md#createfeedpost) | **POST** /api/v1/feed-posts |  |
*DefaultApi* | [**createModerator**](Apis/DefaultApi.md#createmoderator) | **POST** /api/v1/moderators |  |
*DefaultApi* | [**createQuestionConfig**](Apis/DefaultApi.md#createquestionconfig) | **POST** /api/v1/question-configs |  |
*DefaultApi* | [**createQuestionResult**](Apis/DefaultApi.md#createquestionresult) | **POST** /api/v1/question-results |  |
*DefaultApi* | [**createSubscription**](Apis/DefaultApi.md#createsubscription) | **POST** /api/v1/subscriptions |  |
*DefaultApi* | [**createTenant**](Apis/DefaultApi.md#createtenant) | **POST** /api/v1/tenants |  |
*DefaultApi* | [**createTenantPackage**](Apis/DefaultApi.md#createtenantpackage) | **POST** /api/v1/tenant-packages |  |
*DefaultApi* | [**createTenantUser**](Apis/DefaultApi.md#createtenantuser) | **POST** /api/v1/tenant-users |  |
*DefaultApi* | [**createTicket**](Apis/DefaultApi.md#createticket) | **POST** /api/v1/tickets |  |
*DefaultApi* | [**createUserBadge**](Apis/DefaultApi.md#createuserbadge) | **POST** /api/v1/user-badges |  |
*DefaultApi* | [**createVote**](Apis/DefaultApi.md#createvote) | **POST** /api/v1/votes |  |
*DefaultApi* | [**deleteComment**](Apis/DefaultApi.md#deletecomment) | **DELETE** /api/v1/comments/{id} |  |
*DefaultApi* | [**deleteDomainConfig**](Apis/DefaultApi.md#deletedomainconfig) | **DELETE** /api/v1/domain-configs/{domain} |  |
*DefaultApi* | [**deleteEmailTemplate**](Apis/DefaultApi.md#deleteemailtemplate) | **DELETE** /api/v1/email-templates/{id} |  |
*DefaultApi* | [**deleteEmailTemplateRenderError**](Apis/DefaultApi.md#deleteemailtemplaterendererror) | **DELETE** /api/v1/email-templates/{id}/render-errors/{errorId} |  |
*DefaultApi* | [**deleteHashTag**](Apis/DefaultApi.md#deletehashtag) | **DELETE** /api/v1/hash-tags/{tag} |  |
*DefaultApi* | [**deleteModerator**](Apis/DefaultApi.md#deletemoderator) | **DELETE** /api/v1/moderators/{id} |  |
*DefaultApi* | [**deleteNotificationCount**](Apis/DefaultApi.md#deletenotificationcount) | **DELETE** /api/v1/notification-count/{id} |  |
*DefaultApi* | [**deletePage**](Apis/DefaultApi.md#deletepage) | **DELETE** /api/v1/pages/{id} |  |
*DefaultApi* | [**deletePendingWebhookEvent**](Apis/DefaultApi.md#deletependingwebhookevent) | **DELETE** /api/v1/pending-webhook-events/{id} |  |
*DefaultApi* | [**deleteQuestionConfig**](Apis/DefaultApi.md#deletequestionconfig) | **DELETE** /api/v1/question-configs/{id} |  |
*DefaultApi* | [**deleteQuestionResult**](Apis/DefaultApi.md#deletequestionresult) | **DELETE** /api/v1/question-results/{id} |  |
*DefaultApi* | [**deleteSSOUser**](Apis/DefaultApi.md#deletessouser) | **DELETE** /api/v1/sso-users/{id} |  |
*DefaultApi* | [**deleteSubscription**](Apis/DefaultApi.md#deletesubscription) | **DELETE** /api/v1/subscriptions/{id} |  |
*DefaultApi* | [**deleteTenant**](Apis/DefaultApi.md#deletetenant) | **DELETE** /api/v1/tenants/{id} |  |
*DefaultApi* | [**deleteTenantPackage**](Apis/DefaultApi.md#deletetenantpackage) | **DELETE** /api/v1/tenant-packages/{id} |  |
*DefaultApi* | [**deleteTenantUser**](Apis/DefaultApi.md#deletetenantuser) | **DELETE** /api/v1/tenant-users/{id} |  |
*DefaultApi* | [**deleteUserBadge**](Apis/DefaultApi.md#deleteuserbadge) | **DELETE** /api/v1/user-badges/{id} |  |
*DefaultApi* | [**deleteVote**](Apis/DefaultApi.md#deletevote) | **DELETE** /api/v1/votes/{id} |  |
*DefaultApi* | [**flagComment**](Apis/DefaultApi.md#flagcomment) | **POST** /api/v1/comments/{id}/flag |  |
*DefaultApi* | [**getAuditLogs**](Apis/DefaultApi.md#getauditlogs) | **GET** /api/v1/audit-logs |  |
*DefaultApi* | [**getCachedNotificationCount**](Apis/DefaultApi.md#getcachednotificationcount) | **GET** /api/v1/notification-count/{id} |  |
*DefaultApi* | [**getComment**](Apis/DefaultApi.md#getcomment) | **GET** /api/v1/comments/{id} |  |
*DefaultApi* | [**getComments**](Apis/DefaultApi.md#getcomments) | **GET** /api/v1/comments |  |
*DefaultApi* | [**getDomainConfig**](Apis/DefaultApi.md#getdomainconfig) | **GET** /api/v1/domain-configs/{domain} |  |
*DefaultApi* | [**getDomainConfigs**](Apis/DefaultApi.md#getdomainconfigs) | **GET** /api/v1/domain-configs |  |
*DefaultApi* | [**getEmailTemplate**](Apis/DefaultApi.md#getemailtemplate) | **GET** /api/v1/email-templates/{id} |  |
*DefaultApi* | [**getEmailTemplateDefinitions**](Apis/DefaultApi.md#getemailtemplatedefinitions) | **GET** /api/v1/email-templates/definitions |  |
*DefaultApi* | [**getEmailTemplateRenderErrors**](Apis/DefaultApi.md#getemailtemplaterendererrors) | **GET** /api/v1/email-templates/{id}/render-errors |  |
*DefaultApi* | [**getEmailTemplates**](Apis/DefaultApi.md#getemailtemplates) | **GET** /api/v1/email-templates |  |
*DefaultApi* | [**getFeedPosts**](Apis/DefaultApi.md#getfeedposts) | **GET** /api/v1/feed-posts |  req tenantId afterId |
*DefaultApi* | [**getHashTags**](Apis/DefaultApi.md#gethashtags) | **GET** /api/v1/hash-tags |  |
*DefaultApi* | [**getModerator**](Apis/DefaultApi.md#getmoderator) | **GET** /api/v1/moderators/{id} |  |
*DefaultApi* | [**getModerators**](Apis/DefaultApi.md#getmoderators) | **GET** /api/v1/moderators |  |
*DefaultApi* | [**getNotificationCount**](Apis/DefaultApi.md#getnotificationcount) | **GET** /api/v1/notifications/count |  |
*DefaultApi* | [**getNotifications**](Apis/DefaultApi.md#getnotifications) | **GET** /api/v1/notifications |  |
*DefaultApi* | [**getPageByURLId**](Apis/DefaultApi.md#getpagebyurlid) | **GET** /api/v1/pages/by-url-id |  |
*DefaultApi* | [**getPages**](Apis/DefaultApi.md#getpages) | **GET** /api/v1/pages |  |
*DefaultApi* | [**getPendingWebhookEventCount**](Apis/DefaultApi.md#getpendingwebhookeventcount) | **GET** /api/v1/pending-webhook-events/count |  |
*DefaultApi* | [**getPendingWebhookEvents**](Apis/DefaultApi.md#getpendingwebhookevents) | **GET** /api/v1/pending-webhook-events |  |
*DefaultApi* | [**getQuestionConfig**](Apis/DefaultApi.md#getquestionconfig) | **GET** /api/v1/question-configs/{id} |  |
*DefaultApi* | [**getQuestionConfigs**](Apis/DefaultApi.md#getquestionconfigs) | **GET** /api/v1/question-configs |  |
*DefaultApi* | [**getQuestionResult**](Apis/DefaultApi.md#getquestionresult) | **GET** /api/v1/question-results/{id} |  |
*DefaultApi* | [**getQuestionResults**](Apis/DefaultApi.md#getquestionresults) | **GET** /api/v1/question-results |  |
*DefaultApi* | [**getSSOUserByEmail**](Apis/DefaultApi.md#getssouserbyemail) | **GET** /api/v1/sso-users/by-email/{email} |  |
*DefaultApi* | [**getSSOUserById**](Apis/DefaultApi.md#getssouserbyid) | **GET** /api/v1/sso-users/by-id/{id} |  |
*DefaultApi* | [**getSSOUsers**](Apis/DefaultApi.md#getssousers) | **GET** /api/v1/sso-users |  |
*DefaultApi* | [**getSubscriptions**](Apis/DefaultApi.md#getsubscriptions) | **GET** /api/v1/subscriptions |  |
*DefaultApi* | [**getTenant**](Apis/DefaultApi.md#gettenant) | **GET** /api/v1/tenants/{id} |  |
*DefaultApi* | [**getTenantDailyUsages**](Apis/DefaultApi.md#gettenantdailyusages) | **GET** /api/v1/tenant-daily-usage |  |
*DefaultApi* | [**getTenantPackage**](Apis/DefaultApi.md#gettenantpackage) | **GET** /api/v1/tenant-packages/{id} |  |
*DefaultApi* | [**getTenantPackages**](Apis/DefaultApi.md#gettenantpackages) | **GET** /api/v1/tenant-packages |  |
*DefaultApi* | [**getTenantUser**](Apis/DefaultApi.md#gettenantuser) | **GET** /api/v1/tenant-users/{id} |  |
*DefaultApi* | [**getTenantUsers**](Apis/DefaultApi.md#gettenantusers) | **GET** /api/v1/tenant-users |  |
*DefaultApi* | [**getTenants**](Apis/DefaultApi.md#gettenants) | **GET** /api/v1/tenants |  |
*DefaultApi* | [**getTicket**](Apis/DefaultApi.md#getticket) | **GET** /api/v1/tickets/{id} |  |
*DefaultApi* | [**getTickets**](Apis/DefaultApi.md#gettickets) | **GET** /api/v1/tickets |  |
*DefaultApi* | [**getUser**](Apis/DefaultApi.md#getuser) | **GET** /api/v1/users/{id} |  |
*DefaultApi* | [**getUserBadge**](Apis/DefaultApi.md#getuserbadge) | **GET** /api/v1/user-badges/{id} |  |
*DefaultApi* | [**getUserBadgeProgressById**](Apis/DefaultApi.md#getuserbadgeprogressbyid) | **GET** /api/v1/user-badge-progress/{id} |  |
*DefaultApi* | [**getUserBadgeProgressByUserId**](Apis/DefaultApi.md#getuserbadgeprogressbyuserid) | **GET** /api/v1/user-badge-progress/user/{userId} |  |
*DefaultApi* | [**getUserBadgeProgressList**](Apis/DefaultApi.md#getuserbadgeprogresslist) | **GET** /api/v1/user-badge-progress |  |
*DefaultApi* | [**getUserBadges**](Apis/DefaultApi.md#getuserbadges) | **GET** /api/v1/user-badges |  |
*DefaultApi* | [**getVotes**](Apis/DefaultApi.md#getvotes) | **GET** /api/v1/votes |  |
*DefaultApi* | [**getVotesForUser**](Apis/DefaultApi.md#getvotesforuser) | **GET** /api/v1/votes/for-user |  |
*DefaultApi* | [**patchDomainConfig**](Apis/DefaultApi.md#patchdomainconfig) | **PATCH** /api/v1/domain-configs/{domainToUpdate} |  |
*DefaultApi* | [**patchHashTag**](Apis/DefaultApi.md#patchhashtag) | **PATCH** /api/v1/hash-tags/{tag} |  |
*DefaultApi* | [**patchPage**](Apis/DefaultApi.md#patchpage) | **PATCH** /api/v1/pages/{id} |  |
*DefaultApi* | [**patchSSOUser**](Apis/DefaultApi.md#patchssouser) | **PATCH** /api/v1/sso-users/{id} |  |
*DefaultApi* | [**putDomainConfig**](Apis/DefaultApi.md#putdomainconfig) | **PUT** /api/v1/domain-configs/{domainToUpdate} |  |
*DefaultApi* | [**putSSOUser**](Apis/DefaultApi.md#putssouser) | **PUT** /api/v1/sso-users/{id} |  |
*DefaultApi* | [**renderEmailTemplate**](Apis/DefaultApi.md#renderemailtemplate) | **POST** /api/v1/email-templates/render |  |
*DefaultApi* | [**replaceTenantPackage**](Apis/DefaultApi.md#replacetenantpackage) | **PUT** /api/v1/tenant-packages/{id} |  |
*DefaultApi* | [**replaceTenantUser**](Apis/DefaultApi.md#replacetenantuser) | **PUT** /api/v1/tenant-users/{id} |  |
*DefaultApi* | [**saveComment**](Apis/DefaultApi.md#savecomment) | **POST** /api/v1/comments |  |
*DefaultApi* | [**saveCommentsBulk**](Apis/DefaultApi.md#savecommentsbulk) | **POST** /api/v1/comments/bulk |  |
*DefaultApi* | [**sendInvite**](Apis/DefaultApi.md#sendinvite) | **POST** /api/v1/moderators/{id}/send-invite |  |
*DefaultApi* | [**sendLoginLink**](Apis/DefaultApi.md#sendloginlink) | **POST** /api/v1/tenant-users/{id}/send-login-link |  |
*DefaultApi* | [**unBlockUserFromComment**](Apis/DefaultApi.md#unblockuserfromcomment) | **POST** /api/v1/comments/{id}/un-block |  |
*DefaultApi* | [**unFlagComment**](Apis/DefaultApi.md#unflagcomment) | **POST** /api/v1/comments/{id}/un-flag |  |
*DefaultApi* | [**updateComment**](Apis/DefaultApi.md#updatecomment) | **PATCH** /api/v1/comments/{id} |  |
*DefaultApi* | [**updateEmailTemplate**](Apis/DefaultApi.md#updateemailtemplate) | **PATCH** /api/v1/email-templates/{id} |  |
*DefaultApi* | [**updateFeedPost**](Apis/DefaultApi.md#updatefeedpost) | **PATCH** /api/v1/feed-posts/{id} |  |
*DefaultApi* | [**updateModerator**](Apis/DefaultApi.md#updatemoderator) | **PATCH** /api/v1/moderators/{id} |  |
*DefaultApi* | [**updateNotification**](Apis/DefaultApi.md#updatenotification) | **PATCH** /api/v1/notifications/{id} |  |
*DefaultApi* | [**updateQuestionConfig**](Apis/DefaultApi.md#updatequestionconfig) | **PATCH** /api/v1/question-configs/{id} |  |
*DefaultApi* | [**updateQuestionResult**](Apis/DefaultApi.md#updatequestionresult) | **PATCH** /api/v1/question-results/{id} |  |
*DefaultApi* | [**updateSubscription**](Apis/DefaultApi.md#updatesubscription) | **PATCH** /api/v1/subscriptions/{id} |  |
*DefaultApi* | [**updateTenant**](Apis/DefaultApi.md#updatetenant) | **PATCH** /api/v1/tenants/{id} |  |
*DefaultApi* | [**updateTenantPackage**](Apis/DefaultApi.md#updatetenantpackage) | **PATCH** /api/v1/tenant-packages/{id} |  |
*DefaultApi* | [**updateTenantUser**](Apis/DefaultApi.md#updatetenantuser) | **PATCH** /api/v1/tenant-users/{id} |  |
*DefaultApi* | [**updateUserBadge**](Apis/DefaultApi.md#updateuserbadge) | **PUT** /api/v1/user-badges/{id} |  |
| *ModerationApi* | [**deleteModerationVote**](Apis/ModerationApi.md#deletemoderationvote) | **DELETE** /auth/my-account/moderate-comments/vote/{commentId}/{voteId} |  |
*ModerationApi* | [**getApiComments**](Apis/ModerationApi.md#getapicomments) | **GET** /auth/my-account/moderate-comments/api/comments |  |
*ModerationApi* | [**getApiExportStatus**](Apis/ModerationApi.md#getapiexportstatus) | **GET** /auth/my-account/moderate-comments/api/export/status |  |
*ModerationApi* | [**getApiIds**](Apis/ModerationApi.md#getapiids) | **GET** /auth/my-account/moderate-comments/api/ids |  |
*ModerationApi* | [**getBanUsersFromComment**](Apis/ModerationApi.md#getbanusersfromcomment) | **GET** /auth/my-account/moderate-comments/ban-users/from-comment/{commentId} |  |
*ModerationApi* | [**getCommentBanStatus**](Apis/ModerationApi.md#getcommentbanstatus) | **GET** /auth/my-account/moderate-comments/get-comment-ban-status/{commentId} |  |
*ModerationApi* | [**getCommentChildren**](Apis/ModerationApi.md#getcommentchildren) | **GET** /auth/my-account/moderate-comments/comment-children/{commentId} |  |
*ModerationApi* | [**getCount**](Apis/ModerationApi.md#getcount) | **GET** /auth/my-account/moderate-comments/count |  |
*ModerationApi* | [**getCounts**](Apis/ModerationApi.md#getcounts) | **GET** /auth/my-account/moderate-comments/banned-users/counts |  |
*ModerationApi* | [**getLogs**](Apis/ModerationApi.md#getlogs) | **GET** /auth/my-account/moderate-comments/logs/{commentId} |  |
*ModerationApi* | [**getManualBadges**](Apis/ModerationApi.md#getmanualbadges) | **GET** /auth/my-account/moderate-comments/get-manual-badges |  |
*ModerationApi* | [**getManualBadgesForUser**](Apis/ModerationApi.md#getmanualbadgesforuser) | **GET** /auth/my-account/moderate-comments/get-manual-badges-for-user |  |
*ModerationApi* | [**getModerationComment**](Apis/ModerationApi.md#getmoderationcomment) | **GET** /auth/my-account/moderate-comments/comment/{commentId} |  |
*ModerationApi* | [**getModerationCommentText**](Apis/ModerationApi.md#getmoderationcommenttext) | **GET** /auth/my-account/moderate-comments/get-comment-text/{commentId} |  |
*ModerationApi* | [**getPreBanSummary**](Apis/ModerationApi.md#getprebansummary) | **GET** /auth/my-account/moderate-comments/pre-ban-summary/{commentId} |  |
*ModerationApi* | [**getSearchCommentsSummary**](Apis/ModerationApi.md#getsearchcommentssummary) | **GET** /auth/my-account/moderate-comments/search/comments/summary |  |
*ModerationApi* | [**getSearchPages**](Apis/ModerationApi.md#getsearchpages) | **GET** /auth/my-account/moderate-comments/search/pages |  |
*ModerationApi* | [**getSearchSites**](Apis/ModerationApi.md#getsearchsites) | **GET** /auth/my-account/moderate-comments/search/sites |  |
*ModerationApi* | [**getSearchSuggest**](Apis/ModerationApi.md#getsearchsuggest) | **GET** /auth/my-account/moderate-comments/search/suggest |  |
*ModerationApi* | [**getSearchUsers**](Apis/ModerationApi.md#getsearchusers) | **GET** /auth/my-account/moderate-comments/search/users |  |
*ModerationApi* | [**getTrustFactor**](Apis/ModerationApi.md#gettrustfactor) | **GET** /auth/my-account/moderate-comments/get-trust-factor |  |
*ModerationApi* | [**getUserBanPreference**](Apis/ModerationApi.md#getuserbanpreference) | **GET** /auth/my-account/moderate-comments/user-ban-preference |  |
*ModerationApi* | [**getUserInternalProfile**](Apis/ModerationApi.md#getuserinternalprofile) | **GET** /auth/my-account/moderate-comments/get-user-internal-profile |  |
*ModerationApi* | [**postAdjustCommentVotes**](Apis/ModerationApi.md#postadjustcommentvotes) | **POST** /auth/my-account/moderate-comments/adjust-comment-votes/{commentId} |  |
*ModerationApi* | [**postApiExport**](Apis/ModerationApi.md#postapiexport) | **POST** /auth/my-account/moderate-comments/api/export |  |
*ModerationApi* | [**postBanUserFromComment**](Apis/ModerationApi.md#postbanuserfromcomment) | **POST** /auth/my-account/moderate-comments/ban-user/from-comment/{commentId} |  |
*ModerationApi* | [**postBanUserUndo**](Apis/ModerationApi.md#postbanuserundo) | **POST** /auth/my-account/moderate-comments/ban-user/undo |  |
*ModerationApi* | [**postBulkPreBanSummary**](Apis/ModerationApi.md#postbulkprebansummary) | **POST** /auth/my-account/moderate-comments/bulk-pre-ban-summary |  |
*ModerationApi* | [**postCommentsByIds**](Apis/ModerationApi.md#postcommentsbyids) | **POST** /auth/my-account/moderate-comments/comments-by-ids |  |
*ModerationApi* | [**postFlagComment**](Apis/ModerationApi.md#postflagcomment) | **POST** /auth/my-account/moderate-comments/flag-comment/{commentId} |  |
*ModerationApi* | [**postRemoveComment**](Apis/ModerationApi.md#postremovecomment) | **POST** /auth/my-account/moderate-comments/remove-comment/{commentId} |  |
*ModerationApi* | [**postRestoreDeletedComment**](Apis/ModerationApi.md#postrestoredeletedcomment) | **POST** /auth/my-account/moderate-comments/restore-deleted-comment/{commentId} |  |
*ModerationApi* | [**postSetCommentApprovalStatus**](Apis/ModerationApi.md#postsetcommentapprovalstatus) | **POST** /auth/my-account/moderate-comments/set-comment-approval-status/{commentId} |  |
*ModerationApi* | [**postSetCommentReviewStatus**](Apis/ModerationApi.md#postsetcommentreviewstatus) | **POST** /auth/my-account/moderate-comments/set-comment-review-status/{commentId} |  |
*ModerationApi* | [**postSetCommentSpamStatus**](Apis/ModerationApi.md#postsetcommentspamstatus) | **POST** /auth/my-account/moderate-comments/set-comment-spam-status/{commentId} |  |
*ModerationApi* | [**postSetCommentText**](Apis/ModerationApi.md#postsetcommenttext) | **POST** /auth/my-account/moderate-comments/set-comment-text/{commentId} |  |
*ModerationApi* | [**postUnFlagComment**](Apis/ModerationApi.md#postunflagcomment) | **POST** /auth/my-account/moderate-comments/un-flag-comment/{commentId} |  |
*ModerationApi* | [**postVote**](Apis/ModerationApi.md#postvote) | **POST** /auth/my-account/moderate-comments/vote/{commentId} |  |
*ModerationApi* | [**putAwardBadge**](Apis/ModerationApi.md#putawardbadge) | **PUT** /auth/my-account/moderate-comments/award-badge |  |
*ModerationApi* | [**putCloseThread**](Apis/ModerationApi.md#putclosethread) | **PUT** /auth/my-account/moderate-comments/close-thread |  |
*ModerationApi* | [**putRemoveBadge**](Apis/ModerationApi.md#putremovebadge) | **PUT** /auth/my-account/moderate-comments/remove-badge |  |
*ModerationApi* | [**putReopenThread**](Apis/ModerationApi.md#putreopenthread) | **PUT** /auth/my-account/moderate-comments/reopen-thread |  |
*ModerationApi* | [**setTrustFactor**](Apis/ModerationApi.md#settrustfactor) | **PUT** /auth/my-account/moderate-comments/set-trust-factor |  |
| *PublicApi* | [**blockFromCommentPublic**](Apis/PublicApi.md#blockfromcommentpublic) | **POST** /block-from-comment/{commentId} |  |
*PublicApi* | [**checkedCommentsForBlocked**](Apis/PublicApi.md#checkedcommentsforblocked) | **GET** /check-blocked-comments |  |
*PublicApi* | [**createCommentPublic**](Apis/PublicApi.md#createcommentpublic) | **POST** /comments/{tenantId} |  |
*PublicApi* | [**createFeedPostPublic**](Apis/PublicApi.md#createfeedpostpublic) | **POST** /feed-posts/{tenantId} |  |
*PublicApi* | [**createV1PageReact**](Apis/PublicApi.md#createv1pagereact) | **POST** /page-reacts/v1/likes/{tenantId} |  |
*PublicApi* | [**createV2PageReact**](Apis/PublicApi.md#createv2pagereact) | **POST** /page-reacts/v2/{tenantId} |  |
*PublicApi* | [**deleteCommentPublic**](Apis/PublicApi.md#deletecommentpublic) | **DELETE** /comments/{tenantId}/{commentId} |  |
*PublicApi* | [**deleteCommentVote**](Apis/PublicApi.md#deletecommentvote) | **DELETE** /comments/{tenantId}/{commentId}/vote/{voteId} |  |
*PublicApi* | [**deleteFeedPostPublic**](Apis/PublicApi.md#deletefeedpostpublic) | **DELETE** /feed-posts/{tenantId}/{postId} |  |
*PublicApi* | [**deleteV1PageReact**](Apis/PublicApi.md#deletev1pagereact) | **DELETE** /page-reacts/v1/likes/{tenantId} |  |
*PublicApi* | [**deleteV2PageReact**](Apis/PublicApi.md#deletev2pagereact) | **DELETE** /page-reacts/v2/{tenantId} |  |
*PublicApi* | [**flagCommentPublic**](Apis/PublicApi.md#flagcommentpublic) | **POST** /flag-comment/{commentId} |  |
*PublicApi* | [**getCommentText**](Apis/PublicApi.md#getcommenttext) | **GET** /comments/{tenantId}/{commentId}/text |  |
*PublicApi* | [**getCommentVoteUserNames**](Apis/PublicApi.md#getcommentvoteusernames) | **GET** /comments/{tenantId}/{commentId}/votes |  |
*PublicApi* | [**getCommentsForUser**](Apis/PublicApi.md#getcommentsforuser) | **GET** /comments-for-user |  |
*PublicApi* | [**getCommentsPublic**](Apis/PublicApi.md#getcommentspublic) | **GET** /comments/{tenantId} |  req tenantId urlId |
*PublicApi* | [**getEventLog**](Apis/PublicApi.md#geteventlog) | **GET** /event-log/{tenantId} |  req tenantId urlId userIdWS |
*PublicApi* | [**getFeedPostsPublic**](Apis/PublicApi.md#getfeedpostspublic) | **GET** /feed-posts/{tenantId} |  req tenantId afterId |
*PublicApi* | [**getFeedPostsStats**](Apis/PublicApi.md#getfeedpostsstats) | **GET** /feed-posts/{tenantId}/stats |  |
*PublicApi* | [**getGifLarge**](Apis/PublicApi.md#getgiflarge) | **GET** /gifs/get-large/{tenantId} |  |
*PublicApi* | [**getGifsSearch**](Apis/PublicApi.md#getgifssearch) | **GET** /gifs/search/{tenantId} |  |
*PublicApi* | [**getGifsTrending**](Apis/PublicApi.md#getgifstrending) | **GET** /gifs/trending/{tenantId} |  |
*PublicApi* | [**getGlobalEventLog**](Apis/PublicApi.md#getglobaleventlog) | **GET** /event-log/global/{tenantId} |  req tenantId urlId userIdWS |
*PublicApi* | [**getOfflineUsers**](Apis/PublicApi.md#getofflineusers) | **GET** /pages/{tenantId}/users/offline | Past commenters on the page who are NOT currently online. Sorted by displayName. Use this after exhausting /users/online to render a \"Members\" section. Cursor pagination on commenterName: server walks the partial {tenantId, urlId, commenterName} index from afterName forward via $gt, no $skip cost. |
*PublicApi* | [**getOnlineUsers**](Apis/PublicApi.md#getonlineusers) | **GET** /pages/{tenantId}/users/online | Currently-online viewers of a page: people whose websocket session is subscribed to the page right now. Returns anonCount + totalCount (room-wide subscribers, including anon viewers we don't enumerate). |
*PublicApi* | [**getPagesPublic**](Apis/PublicApi.md#getpagespublic) | **GET** /pages/{tenantId} | List pages for a tenant. Used by the FChat desktop client to populate its room list. Requires `enableFChat` to be true on the resolved custom config for each page. Pages that require SSO are filtered against the requesting user's group access. |
*PublicApi* | [**getTranslations**](Apis/PublicApi.md#gettranslations) | **GET** /translations/{namespace}/{component} |  |
*PublicApi* | [**getUserNotificationCount**](Apis/PublicApi.md#getusernotificationcount) | **GET** /user-notifications/get-count |  |
*PublicApi* | [**getUserNotifications**](Apis/PublicApi.md#getusernotifications) | **GET** /user-notifications |  |
*PublicApi* | [**getUserPresenceStatuses**](Apis/PublicApi.md#getuserpresencestatuses) | **GET** /user-presence-status |  |
*PublicApi* | [**getUserReactsPublic**](Apis/PublicApi.md#getuserreactspublic) | **GET** /feed-posts/{tenantId}/user-reacts |  |
*PublicApi* | [**getUsersInfo**](Apis/PublicApi.md#getusersinfo) | **GET** /pages/{tenantId}/users/info | Bulk user info for a tenant. Given userIds, return display info from User / SSOUser. Used by the comment widget to enrich users that just appeared via a presence event. No page context: privacy is enforced uniformly (private profiles are masked). |
*PublicApi* | [**getV1PageLikes**](Apis/PublicApi.md#getv1pagelikes) | **GET** /page-reacts/v1/likes/{tenantId} |  |
*PublicApi* | [**getV2PageReactUsers**](Apis/PublicApi.md#getv2pagereactusers) | **GET** /page-reacts/v2/{tenantId}/list |  |
*PublicApi* | [**getV2PageReacts**](Apis/PublicApi.md#getv2pagereacts) | **GET** /page-reacts/v2/{tenantId} |  |
*PublicApi* | [**lockComment**](Apis/PublicApi.md#lockcomment) | **POST** /comments/{tenantId}/{commentId}/lock |  |
*PublicApi* | [**logoutPublic**](Apis/PublicApi.md#logoutpublic) | **PUT** /auth/logout |  |
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

 - [APIAuditLog](./model/APIAuditLog.md)
 - [APIBanUserChangeLog](./model/APIBanUserChangeLog.md)
 - [APIBanUserChangedValues](./model/APIBanUserChangedValues.md)
 - [APIBannedUser](./model/APIBannedUser.md)
 - [APIBannedUserWithMultiMatchInfo](./model/APIBannedUserWithMultiMatchInfo.md)
 - [APIComment](./model/APIComment.md)
 - [APICommentBase](./model/APICommentBase.md)
 - [APICommentBase_meta](./model/APICommentBase_meta.md)
 - [APICommentCommonBannedUser](./model/APICommentCommonBannedUser.md)
 - [APICreateUserBadgeResponse](./model/APICreateUserBadgeResponse.md)
 - [APIDomainConfiguration](./model/APIDomainConfiguration.md)
 - [APIEmptyResponse](./model/APIEmptyResponse.md)
 - [APIEmptySuccessResponse](./model/APIEmptySuccessResponse.md)
 - [APIError](./model/APIError.md)
 - [APIGetCommentResponse](./model/APIGetCommentResponse.md)
 - [APIGetCommentsResponse](./model/APIGetCommentsResponse.md)
 - [APIGetUserBadgeProgressListResponse](./model/APIGetUserBadgeProgressListResponse.md)
 - [APIGetUserBadgeProgressResponse](./model/APIGetUserBadgeProgressResponse.md)
 - [APIGetUserBadgeResponse](./model/APIGetUserBadgeResponse.md)
 - [APIGetUserBadgesResponse](./model/APIGetUserBadgesResponse.md)
 - [APIModerateGetUserBanPreferencesResponse](./model/APIModerateGetUserBanPreferencesResponse.md)
 - [APIModerateUserBanPreferences](./model/APIModerateUserBanPreferences.md)
 - [APIPage](./model/APIPage.md)
 - [APISSOUser](./model/APISSOUser.md)
 - [APISaveCommentResponse](./model/APISaveCommentResponse.md)
 - [APIStatus](./model/APIStatus.md)
 - [APITenant](./model/APITenant.md)
 - [APITenantDailyUsage](./model/APITenantDailyUsage.md)
 - [APITicket](./model/APITicket.md)
 - [APITicketDetail](./model/APITicketDetail.md)
 - [APITicketFile](./model/APITicketFile.md)
 - [APIUserSubscription](./model/APIUserSubscription.md)
 - [AddDomainConfigParams](./model/AddDomainConfigParams.md)
 - [AddDomainConfigResponse](./model/AddDomainConfigResponse.md)
 - [AddDomainConfigResponse_anyOf](./model/AddDomainConfigResponse_anyOf.md)
 - [AddHashTagResponse](./model/AddHashTagResponse.md)
 - [AddHashTagsBulkResponse](./model/AddHashTagsBulkResponse.md)
 - [AddPageAPIResponse](./model/AddPageAPIResponse.md)
 - [AddSSOUserAPIResponse](./model/AddSSOUserAPIResponse.md)
 - [AdjustCommentVotesParams](./model/AdjustCommentVotesParams.md)
 - [AdjustVotesResponse](./model/AdjustVotesResponse.md)
 - [AggregateQuestionResultsResponse](./model/AggregateQuestionResultsResponse.md)
 - [AggregateQuestionResultsResponse_1](./model/AggregateQuestionResultsResponse_1.md)
 - [AggregateResponse](./model/AggregateResponse.md)
 - [AggregateTimeBucket](./model/AggregateTimeBucket.md)
 - [AggregationAPIError](./model/AggregationAPIError.md)
 - [AggregationItem](./model/AggregationItem.md)
 - [AggregationOpType](./model/AggregationOpType.md)
 - [AggregationOperation](./model/AggregationOperation.md)
 - [AggregationRequest](./model/AggregationRequest.md)
 - [AggregationRequest_sort](./model/AggregationRequest_sort.md)
 - [AggregationResponse](./model/AggregationResponse.md)
 - [AggregationResponse_stats](./model/AggregationResponse_stats.md)
 - [AggregationValue](./model/AggregationValue.md)
 - [AwardUserBadgeResponse](./model/AwardUserBadgeResponse.md)
 - [BanUserFromCommentResult](./model/BanUserFromCommentResult.md)
 - [BanUserUndoParams](./model/BanUserUndoParams.md)
 - [BannedUserMatch](./model/BannedUserMatch.md)
 - [BannedUserMatchType](./model/BannedUserMatchType.md)
 - [BannedUserMatch_matchedOnValue](./model/BannedUserMatch_matchedOnValue.md)
 - [BillingInfo](./model/BillingInfo.md)
 - [BlockFromCommentParams](./model/BlockFromCommentParams.md)
 - [BlockFromCommentPublicResponse](./model/BlockFromCommentPublicResponse.md)
 - [BlockSuccess](./model/BlockSuccess.md)
 - [BlockUserFromCommentResponse](./model/BlockUserFromCommentResponse.md)
 - [BuildModerationFilterParams](./model/BuildModerationFilterParams.md)
 - [BuildModerationFilterResponse](./model/BuildModerationFilterResponse.md)
 - [BulkAggregateQuestionItem](./model/BulkAggregateQuestionItem.md)
 - [BulkAggregateQuestionResultsRequest](./model/BulkAggregateQuestionResultsRequest.md)
 - [BulkAggregateQuestionResultsResponse](./model/BulkAggregateQuestionResultsResponse.md)
 - [BulkAggregateQuestionResultsResponse_1](./model/BulkAggregateQuestionResultsResponse_1.md)
 - [BulkCreateHashTagsBody](./model/BulkCreateHashTagsBody.md)
 - [BulkCreateHashTagsBody_tags_inner](./model/BulkCreateHashTagsBody_tags_inner.md)
 - [BulkCreateHashTagsResponse](./model/BulkCreateHashTagsResponse.md)
 - [BulkCreateHashTagsResponse_results_inner](./model/BulkCreateHashTagsResponse_results_inner.md)
 - [BulkPreBanParams](./model/BulkPreBanParams.md)
 - [BulkPreBanSummary](./model/BulkPreBanSummary.md)
 - [ChangeCommentPinStatusResponse](./model/ChangeCommentPinStatusResponse.md)
 - [ChangeTicketStateBody](./model/ChangeTicketStateBody.md)
 - [ChangeTicketStateResponse](./model/ChangeTicketStateResponse.md)
 - [ChangeTicketStateResponse_1](./model/ChangeTicketStateResponse_1.md)
 - [CheckBlockedCommentsResponse](./model/CheckBlockedCommentsResponse.md)
 - [CheckedCommentsForBlockedResponse](./model/CheckedCommentsForBlockedResponse.md)
 - [CombineCommentsWithQuestionResultsResponse](./model/CombineCommentsWithQuestionResultsResponse.md)
 - [CombineQuestionResultsWithCommentsResponse](./model/CombineQuestionResultsWithCommentsResponse.md)
 - [CommentData](./model/CommentData.md)
 - [CommentHTMLRenderingMode](./model/CommentHTMLRenderingMode.md)
 - [CommentLogData](./model/CommentLogData.md)
 - [CommentLogEntry](./model/CommentLogEntry.md)
 - [CommentLogType](./model/CommentLogType.md)
 - [CommentQuestionResultsRenderingType](./model/CommentQuestionResultsRenderingType.md)
 - [CommentQuestionsRequired](./model/CommentQuestionsRequired.md)
 - [CommentTextUpdateRequest](./model/CommentTextUpdateRequest.md)
 - [CommentThreadDeletionMode](./model/CommentThreadDeletionMode.md)
 - [CommentUserBadgeInfo](./model/CommentUserBadgeInfo.md)
 - [CommentUserHashTagInfo](./model/CommentUserHashTagInfo.md)
 - [CommentUserMentionInfo](./model/CommentUserMentionInfo.md)
 - [CommenterNameFormats](./model/CommenterNameFormats.md)
 - [CommentsByIdsParams](./model/CommentsByIdsParams.md)
 - [CreateAPIPageData](./model/CreateAPIPageData.md)
 - [CreateAPISSOUserData](./model/CreateAPISSOUserData.md)
 - [CreateAPIUserSubscriptionData](./model/CreateAPIUserSubscriptionData.md)
 - [CreateCommentParams](./model/CreateCommentParams.md)
 - [CreateCommentPublicResponse](./model/CreateCommentPublicResponse.md)
 - [CreateEmailTemplateBody](./model/CreateEmailTemplateBody.md)
 - [CreateEmailTemplateResponse](./model/CreateEmailTemplateResponse.md)
 - [CreateEmailTemplateResponse_1](./model/CreateEmailTemplateResponse_1.md)
 - [CreateFeedPostParams](./model/CreateFeedPostParams.md)
 - [CreateFeedPostPublicResponse](./model/CreateFeedPostPublicResponse.md)
 - [CreateFeedPostResponse](./model/CreateFeedPostResponse.md)
 - [CreateFeedPostResponse_1](./model/CreateFeedPostResponse_1.md)
 - [CreateFeedPostsResponse](./model/CreateFeedPostsResponse.md)
 - [CreateHashTagBody](./model/CreateHashTagBody.md)
 - [CreateHashTagResponse](./model/CreateHashTagResponse.md)
 - [CreateModeratorBody](./model/CreateModeratorBody.md)
 - [CreateModeratorResponse](./model/CreateModeratorResponse.md)
 - [CreateModeratorResponse_1](./model/CreateModeratorResponse_1.md)
 - [CreateQuestionConfigBody](./model/CreateQuestionConfigBody.md)
 - [CreateQuestionConfigResponse](./model/CreateQuestionConfigResponse.md)
 - [CreateQuestionConfigResponse_1](./model/CreateQuestionConfigResponse_1.md)
 - [CreateQuestionResultBody](./model/CreateQuestionResultBody.md)
 - [CreateQuestionResultResponse](./model/CreateQuestionResultResponse.md)
 - [CreateQuestionResultResponse_1](./model/CreateQuestionResultResponse_1.md)
 - [CreateSubscriptionAPIResponse](./model/CreateSubscriptionAPIResponse.md)
 - [CreateTenantBody](./model/CreateTenantBody.md)
 - [CreateTenantPackageBody](./model/CreateTenantPackageBody.md)
 - [CreateTenantPackageResponse](./model/CreateTenantPackageResponse.md)
 - [CreateTenantPackageResponse_1](./model/CreateTenantPackageResponse_1.md)
 - [CreateTenantResponse](./model/CreateTenantResponse.md)
 - [CreateTenantResponse_1](./model/CreateTenantResponse_1.md)
 - [CreateTenantUserBody](./model/CreateTenantUserBody.md)
 - [CreateTenantUserResponse](./model/CreateTenantUserResponse.md)
 - [CreateTenantUserResponse_1](./model/CreateTenantUserResponse_1.md)
 - [CreateTicketBody](./model/CreateTicketBody.md)
 - [CreateTicketResponse](./model/CreateTicketResponse.md)
 - [CreateTicketResponse_1](./model/CreateTicketResponse_1.md)
 - [CreateUserBadgeParams](./model/CreateUserBadgeParams.md)
 - [CreateUserBadgeResponse](./model/CreateUserBadgeResponse.md)
 - [CreateV1PageReact](./model/CreateV1PageReact.md)
 - [CreateV1PageReactResponse](./model/CreateV1PageReactResponse.md)
 - [CreateV2PageReactResponse](./model/CreateV2PageReactResponse.md)
 - [CreateVoteResponse](./model/CreateVoteResponse.md)
 - [CustomConfigParameters](./model/CustomConfigParameters.md)
 - [CustomEmailTemplate](./model/CustomEmailTemplate.md)
 - [DeleteCommentAction](./model/DeleteCommentAction.md)
 - [DeleteCommentPublicResponse](./model/DeleteCommentPublicResponse.md)
 - [DeleteCommentResponse](./model/DeleteCommentResponse.md)
 - [DeleteCommentResult](./model/DeleteCommentResult.md)
 - [DeleteCommentVoteResponse](./model/DeleteCommentVoteResponse.md)
 - [DeleteDomainConfigResponse](./model/DeleteDomainConfigResponse.md)
 - [DeleteEmailTemplateRenderErrorResponse](./model/DeleteEmailTemplateRenderErrorResponse.md)
 - [DeleteEmailTemplateResponse](./model/DeleteEmailTemplateResponse.md)
 - [DeleteFeedPostPublicResponse](./model/DeleteFeedPostPublicResponse.md)
 - [DeleteFeedPostPublicResponse_anyOf](./model/DeleteFeedPostPublicResponse_anyOf.md)
 - [DeleteHashTagRequestBody](./model/DeleteHashTagRequestBody.md)
 - [DeleteHashTagResponse](./model/DeleteHashTagResponse.md)
 - [DeleteModerationVoteResponse](./model/DeleteModerationVoteResponse.md)
 - [DeleteModeratorResponse](./model/DeleteModeratorResponse.md)
 - [DeleteNotificationCountResponse](./model/DeleteNotificationCountResponse.md)
 - [DeletePageAPIResponse](./model/DeletePageAPIResponse.md)
 - [DeletePendingWebhookEventResponse](./model/DeletePendingWebhookEventResponse.md)
 - [DeleteQuestionConfigResponse](./model/DeleteQuestionConfigResponse.md)
 - [DeleteQuestionResultResponse](./model/DeleteQuestionResultResponse.md)
 - [DeleteSSOUserAPIResponse](./model/DeleteSSOUserAPIResponse.md)
 - [DeleteSubscriptionAPIResponse](./model/DeleteSubscriptionAPIResponse.md)
 - [DeleteTenantPackageResponse](./model/DeleteTenantPackageResponse.md)
 - [DeleteTenantResponse](./model/DeleteTenantResponse.md)
 - [DeleteTenantUserResponse](./model/DeleteTenantUserResponse.md)
 - [DeleteUserBadgeResponse](./model/DeleteUserBadgeResponse.md)
 - [DeleteV1PageReactResponse](./model/DeleteV1PageReactResponse.md)
 - [DeleteV2PageReactResponse](./model/DeleteV2PageReactResponse.md)
 - [DeleteVoteResponse](./model/DeleteVoteResponse.md)
 - [DeletedCommentResultComment](./model/DeletedCommentResultComment.md)
 - [DigestEmailFrequency](./model/DigestEmailFrequency.md)
 - [EmailTemplateDefinition](./model/EmailTemplateDefinition.md)
 - [EmailTemplateRenderErrorResponse](./model/EmailTemplateRenderErrorResponse.md)
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
 - [FlagCommentPublicResponse](./model/FlagCommentPublicResponse.md)
 - [FlagCommentResponse](./model/FlagCommentResponse.md)
 - [FlagCommentResponse_1](./model/FlagCommentResponse_1.md)
 - [GetApiCommentsResponse](./model/GetApiCommentsResponse.md)
 - [GetApiExportStatusResponse](./model/GetApiExportStatusResponse.md)
 - [GetApiIdsResponse](./model/GetApiIdsResponse.md)
 - [GetAuditLogsResponse](./model/GetAuditLogsResponse.md)
 - [GetAuditLogsResponse_1](./model/GetAuditLogsResponse_1.md)
 - [GetBanUsersFromCommentResponse](./model/GetBanUsersFromCommentResponse.md)
 - [GetBannedUsersCountResponse](./model/GetBannedUsersCountResponse.md)
 - [GetBannedUsersFromCommentResponse](./model/GetBannedUsersFromCommentResponse.md)
 - [GetCachedNotificationCountResponse](./model/GetCachedNotificationCountResponse.md)
 - [GetCachedNotificationCountResponse_1](./model/GetCachedNotificationCountResponse_1.md)
 - [GetCommentBanStatusResponse](./model/GetCommentBanStatusResponse.md)
 - [GetCommentBanStatusResponse_1](./model/GetCommentBanStatusResponse_1.md)
 - [GetCommentChildrenResponse](./model/GetCommentChildrenResponse.md)
 - [GetCommentResponse](./model/GetCommentResponse.md)
 - [GetCommentTextResponse](./model/GetCommentTextResponse.md)
 - [GetCommentTextResponse_1](./model/GetCommentTextResponse_1.md)
 - [GetCommentVoteUserNamesResponse](./model/GetCommentVoteUserNamesResponse.md)
 - [GetCommentVoteUserNamesSuccessResponse](./model/GetCommentVoteUserNamesSuccessResponse.md)
 - [GetCommentsForUserResponse](./model/GetCommentsForUserResponse.md)
 - [GetCommentsForUserResponse_1](./model/GetCommentsForUserResponse_1.md)
 - [GetCommentsPublicResponse](./model/GetCommentsPublicResponse.md)
 - [GetCommentsResponse](./model/GetCommentsResponse.md)
 - [GetCommentsResponseWithPresence_PublicComment_](./model/GetCommentsResponseWithPresence_PublicComment_.md)
 - [GetCommentsResponse_PublicComment_](./model/GetCommentsResponse_PublicComment_.md)
 - [GetCountResponse](./model/GetCountResponse.md)
 - [GetCountsResponse](./model/GetCountsResponse.md)
 - [GetDomainConfigResponse](./model/GetDomainConfigResponse.md)
 - [GetDomainConfigsResponse](./model/GetDomainConfigsResponse.md)
 - [GetDomainConfigsResponse_anyOf](./model/GetDomainConfigsResponse_anyOf.md)
 - [GetDomainConfigsResponse_anyOf_1](./model/GetDomainConfigsResponse_anyOf_1.md)
 - [GetEmailTemplateDefinitionsResponse](./model/GetEmailTemplateDefinitionsResponse.md)
 - [GetEmailTemplateDefinitionsResponse_1](./model/GetEmailTemplateDefinitionsResponse_1.md)
 - [GetEmailTemplateRenderErrorsResponse](./model/GetEmailTemplateRenderErrorsResponse.md)
 - [GetEmailTemplateRenderErrorsResponse_1](./model/GetEmailTemplateRenderErrorsResponse_1.md)
 - [GetEmailTemplateResponse](./model/GetEmailTemplateResponse.md)
 - [GetEmailTemplateResponse_1](./model/GetEmailTemplateResponse_1.md)
 - [GetEmailTemplatesResponse](./model/GetEmailTemplatesResponse.md)
 - [GetEmailTemplatesResponse_1](./model/GetEmailTemplatesResponse_1.md)
 - [GetEventLogResponse](./model/GetEventLogResponse.md)
 - [GetEventLogResponse_1](./model/GetEventLogResponse_1.md)
 - [GetFeedPostsPublicResponse](./model/GetFeedPostsPublicResponse.md)
 - [GetFeedPostsResponse](./model/GetFeedPostsResponse.md)
 - [GetFeedPostsResponse_1](./model/GetFeedPostsResponse_1.md)
 - [GetFeedPostsStatsResponse](./model/GetFeedPostsStatsResponse.md)
 - [GetGifLargeResponse](./model/GetGifLargeResponse.md)
 - [GetGifsSearchResponse](./model/GetGifsSearchResponse.md)
 - [GetGifsTrendingResponse](./model/GetGifsTrendingResponse.md)
 - [GetGlobalEventLogResponse](./model/GetGlobalEventLogResponse.md)
 - [GetHashTagsResponse](./model/GetHashTagsResponse.md)
 - [GetHashTagsResponse_1](./model/GetHashTagsResponse_1.md)
 - [GetLogsResponse](./model/GetLogsResponse.md)
 - [GetManualBadgesForUserResponse](./model/GetManualBadgesForUserResponse.md)
 - [GetManualBadgesResponse](./model/GetManualBadgesResponse.md)
 - [GetModerationCommentResponse](./model/GetModerationCommentResponse.md)
 - [GetModerationCommentTextResponse](./model/GetModerationCommentTextResponse.md)
 - [GetModeratorResponse](./model/GetModeratorResponse.md)
 - [GetModeratorResponse_1](./model/GetModeratorResponse_1.md)
 - [GetModeratorsResponse](./model/GetModeratorsResponse.md)
 - [GetModeratorsResponse_1](./model/GetModeratorsResponse_1.md)
 - [GetMyNotificationsResponse](./model/GetMyNotificationsResponse.md)
 - [GetNotificationCountResponse](./model/GetNotificationCountResponse.md)
 - [GetNotificationCountResponse_1](./model/GetNotificationCountResponse_1.md)
 - [GetNotificationsResponse](./model/GetNotificationsResponse.md)
 - [GetNotificationsResponse_1](./model/GetNotificationsResponse_1.md)
 - [GetOfflineUsersResponse](./model/GetOfflineUsersResponse.md)
 - [GetOnlineUsersResponse](./model/GetOnlineUsersResponse.md)
 - [GetPageByURLIdAPIResponse](./model/GetPageByURLIdAPIResponse.md)
 - [GetPagesAPIResponse](./model/GetPagesAPIResponse.md)
 - [GetPagesPublicResponse](./model/GetPagesPublicResponse.md)
 - [GetPendingWebhookEventCountResponse](./model/GetPendingWebhookEventCountResponse.md)
 - [GetPendingWebhookEventCountResponse_1](./model/GetPendingWebhookEventCountResponse_1.md)
 - [GetPendingWebhookEventsResponse](./model/GetPendingWebhookEventsResponse.md)
 - [GetPendingWebhookEventsResponse_1](./model/GetPendingWebhookEventsResponse_1.md)
 - [GetPreBanSummaryResponse](./model/GetPreBanSummaryResponse.md)
 - [GetPublicFeedPostsResponse](./model/GetPublicFeedPostsResponse.md)
 - [GetPublicPagesResponse](./model/GetPublicPagesResponse.md)
 - [GetQuestionConfigResponse](./model/GetQuestionConfigResponse.md)
 - [GetQuestionConfigResponse_1](./model/GetQuestionConfigResponse_1.md)
 - [GetQuestionConfigsResponse](./model/GetQuestionConfigsResponse.md)
 - [GetQuestionConfigsResponse_1](./model/GetQuestionConfigsResponse_1.md)
 - [GetQuestionResultResponse](./model/GetQuestionResultResponse.md)
 - [GetQuestionResultResponse_1](./model/GetQuestionResultResponse_1.md)
 - [GetQuestionResultsResponse](./model/GetQuestionResultsResponse.md)
 - [GetQuestionResultsResponse_1](./model/GetQuestionResultsResponse_1.md)
 - [GetSSOUserByEmailAPIResponse](./model/GetSSOUserByEmailAPIResponse.md)
 - [GetSSOUserByIdAPIResponse](./model/GetSSOUserByIdAPIResponse.md)
 - [GetSSOUsersResponse](./model/GetSSOUsersResponse.md)
 - [GetSearchCommentsSummaryResponse](./model/GetSearchCommentsSummaryResponse.md)
 - [GetSearchPagesResponse](./model/GetSearchPagesResponse.md)
 - [GetSearchSitesResponse](./model/GetSearchSitesResponse.md)
 - [GetSearchSuggestResponse](./model/GetSearchSuggestResponse.md)
 - [GetSearchUsersResponse](./model/GetSearchUsersResponse.md)
 - [GetSubscriptionsAPIResponse](./model/GetSubscriptionsAPIResponse.md)
 - [GetTenantDailyUsagesResponse](./model/GetTenantDailyUsagesResponse.md)
 - [GetTenantDailyUsagesResponse_1](./model/GetTenantDailyUsagesResponse_1.md)
 - [GetTenantManualBadgesResponse](./model/GetTenantManualBadgesResponse.md)
 - [GetTenantPackageResponse](./model/GetTenantPackageResponse.md)
 - [GetTenantPackageResponse_1](./model/GetTenantPackageResponse_1.md)
 - [GetTenantPackagesResponse](./model/GetTenantPackagesResponse.md)
 - [GetTenantPackagesResponse_1](./model/GetTenantPackagesResponse_1.md)
 - [GetTenantResponse](./model/GetTenantResponse.md)
 - [GetTenantResponse_1](./model/GetTenantResponse_1.md)
 - [GetTenantUserResponse](./model/GetTenantUserResponse.md)
 - [GetTenantUserResponse_1](./model/GetTenantUserResponse_1.md)
 - [GetTenantUsersResponse](./model/GetTenantUsersResponse.md)
 - [GetTenantUsersResponse_1](./model/GetTenantUsersResponse_1.md)
 - [GetTenantsResponse](./model/GetTenantsResponse.md)
 - [GetTenantsResponse_1](./model/GetTenantsResponse_1.md)
 - [GetTicketResponse](./model/GetTicketResponse.md)
 - [GetTicketResponse_1](./model/GetTicketResponse_1.md)
 - [GetTicketsResponse](./model/GetTicketsResponse.md)
 - [GetTicketsResponse_1](./model/GetTicketsResponse_1.md)
 - [GetTranslationsResponse](./model/GetTranslationsResponse.md)
 - [GetTranslationsResponse_1](./model/GetTranslationsResponse_1.md)
 - [GetTrustFactorResponse](./model/GetTrustFactorResponse.md)
 - [GetUserBadgeProgressByIdResponse](./model/GetUserBadgeProgressByIdResponse.md)
 - [GetUserBadgeProgressByUserIdResponse](./model/GetUserBadgeProgressByUserIdResponse.md)
 - [GetUserBadgeProgressListResponse](./model/GetUserBadgeProgressListResponse.md)
 - [GetUserBadgeResponse](./model/GetUserBadgeResponse.md)
 - [GetUserBadgesResponse](./model/GetUserBadgesResponse.md)
 - [GetUserBanPreferenceResponse](./model/GetUserBanPreferenceResponse.md)
 - [GetUserInternalProfileResponse](./model/GetUserInternalProfileResponse.md)
 - [GetUserInternalProfileResponse_1](./model/GetUserInternalProfileResponse_1.md)
 - [GetUserInternalProfileResponse_profile](./model/GetUserInternalProfileResponse_profile.md)
 - [GetUserManualBadgesResponse](./model/GetUserManualBadgesResponse.md)
 - [GetUserNotificationCountResponse](./model/GetUserNotificationCountResponse.md)
 - [GetUserNotificationCountResponse_1](./model/GetUserNotificationCountResponse_1.md)
 - [GetUserNotificationsResponse](./model/GetUserNotificationsResponse.md)
 - [GetUserPresenceStatusesResponse](./model/GetUserPresenceStatusesResponse.md)
 - [GetUserPresenceStatusesResponse_1](./model/GetUserPresenceStatusesResponse_1.md)
 - [GetUserReactsPublicResponse](./model/GetUserReactsPublicResponse.md)
 - [GetUserResponse](./model/GetUserResponse.md)
 - [GetUserResponse_1](./model/GetUserResponse_1.md)
 - [GetUserTrustFactorResponse](./model/GetUserTrustFactorResponse.md)
 - [GetUsersInfoResponse](./model/GetUsersInfoResponse.md)
 - [GetV1PageLikes](./model/GetV1PageLikes.md)
 - [GetV1PageLikesResponse](./model/GetV1PageLikesResponse.md)
 - [GetV2PageReactUsersResponse](./model/GetV2PageReactUsersResponse.md)
 - [GetV2PageReactUsersResponse_1](./model/GetV2PageReactUsersResponse_1.md)
 - [GetV2PageReacts](./model/GetV2PageReacts.md)
 - [GetV2PageReactsResponse](./model/GetV2PageReactsResponse.md)
 - [GetVotesForUserResponse](./model/GetVotesForUserResponse.md)
 - [GetVotesForUserResponse_1](./model/GetVotesForUserResponse_1.md)
 - [GetVotesResponse](./model/GetVotesResponse.md)
 - [GetVotesResponse_1](./model/GetVotesResponse_1.md)
 - [GifGetLargeResponse](./model/GifGetLargeResponse.md)
 - [GifRating](./model/GifRating.md)
 - [GifSearchInternalError](./model/GifSearchInternalError.md)
 - [GifSearchResponse](./model/GifSearchResponse.md)
 - [GifSearchResponse_images_inner_inner](./model/GifSearchResponse_images_inner_inner.md)
 - [HeaderAccountNotification](./model/HeaderAccountNotification.md)
 - [HeaderState](./model/HeaderState.md)
 - [IgnoredResponse](./model/IgnoredResponse.md)
 - [ImageContentProfanityLevel](./model/ImageContentProfanityLevel.md)
 - [ImportedAgentApprovalNotificationFrequency](./model/ImportedAgentApprovalNotificationFrequency.md)
 - [ImportedSiteType](./model/ImportedSiteType.md)
 - [LiveEvent](./model/LiveEvent.md)
 - [LiveEventType](./model/LiveEventType.md)
 - [LiveEvent_extraInfo](./model/LiveEvent_extraInfo.md)
 - [LockCommentResponse](./model/LockCommentResponse.md)
 - [MediaAsset](./model/MediaAsset.md)
 - [MentionAutoCompleteMode](./model/MentionAutoCompleteMode.md)
 - [MetaItem](./model/MetaItem.md)
 - [ModerationAPIChildCommentsResponse](./model/ModerationAPIChildCommentsResponse.md)
 - [ModerationAPIComment](./model/ModerationAPIComment.md)
 - [ModerationAPICommentLog](./model/ModerationAPICommentLog.md)
 - [ModerationAPICommentResponse](./model/ModerationAPICommentResponse.md)
 - [ModerationAPICountCommentsResponse](./model/ModerationAPICountCommentsResponse.md)
 - [ModerationAPIGetCommentIdsResponse](./model/ModerationAPIGetCommentIdsResponse.md)
 - [ModerationAPIGetCommentsResponse](./model/ModerationAPIGetCommentsResponse.md)
 - [ModerationAPIGetLogsResponse](./model/ModerationAPIGetLogsResponse.md)
 - [ModerationCommentSearchResponse](./model/ModerationCommentSearchResponse.md)
 - [ModerationExportResponse](./model/ModerationExportResponse.md)
 - [ModerationExportStatusResponse](./model/ModerationExportStatusResponse.md)
 - [ModerationFilter](./model/ModerationFilter.md)
 - [ModerationPageSearchProjected](./model/ModerationPageSearchProjected.md)
 - [ModerationPageSearchResponse](./model/ModerationPageSearchResponse.md)
 - [ModerationSiteSearchProjected](./model/ModerationSiteSearchProjected.md)
 - [ModerationSiteSearchResponse](./model/ModerationSiteSearchResponse.md)
 - [ModerationSuggestResponse](./model/ModerationSuggestResponse.md)
 - [ModerationUserSearchProjected](./model/ModerationUserSearchProjected.md)
 - [ModerationUserSearchResponse](./model/ModerationUserSearchResponse.md)
 - [Moderator](./model/Moderator.md)
 - [NotificationAndCount](./model/NotificationAndCount.md)
 - [NotificationObjectType](./model/NotificationObjectType.md)
 - [NotificationType](./model/NotificationType.md)
 - [PageUserEntry](./model/PageUserEntry.md)
 - [PageUsersInfoResponse](./model/PageUsersInfoResponse.md)
 - [PageUsersOfflineResponse](./model/PageUsersOfflineResponse.md)
 - [PageUsersOnlineResponse](./model/PageUsersOnlineResponse.md)
 - [PagesSortBy](./model/PagesSortBy.md)
 - [PatchDomainConfigParams](./model/PatchDomainConfigParams.md)
 - [PatchDomainConfigResponse](./model/PatchDomainConfigResponse.md)
 - [PatchHashTagResponse](./model/PatchHashTagResponse.md)
 - [PatchPageAPIResponse](./model/PatchPageAPIResponse.md)
 - [PatchSSOUserAPIResponse](./model/PatchSSOUserAPIResponse.md)
 - [PendingCommentToSyncOutbound](./model/PendingCommentToSyncOutbound.md)
 - [PinCommentResponse](./model/PinCommentResponse.md)
 - [PostAdjustCommentVotesResponse](./model/PostAdjustCommentVotesResponse.md)
 - [PostApiExportResponse](./model/PostApiExportResponse.md)
 - [PostBanUserFromCommentResponse](./model/PostBanUserFromCommentResponse.md)
 - [PostBanUserUndoResponse](./model/PostBanUserUndoResponse.md)
 - [PostBulkPreBanSummaryResponse](./model/PostBulkPreBanSummaryResponse.md)
 - [PostCommentsByIdsResponse](./model/PostCommentsByIdsResponse.md)
 - [PostFlagCommentResponse](./model/PostFlagCommentResponse.md)
 - [PostRemoveCommentResponse](./model/PostRemoveCommentResponse.md)
 - [PostRestoreDeletedCommentResponse](./model/PostRestoreDeletedCommentResponse.md)
 - [PostSetCommentApprovalStatusResponse](./model/PostSetCommentApprovalStatusResponse.md)
 - [PostSetCommentReviewStatusResponse](./model/PostSetCommentReviewStatusResponse.md)
 - [PostSetCommentSpamStatusResponse](./model/PostSetCommentSpamStatusResponse.md)
 - [PostSetCommentTextResponse](./model/PostSetCommentTextResponse.md)
 - [PostUnFlagCommentResponse](./model/PostUnFlagCommentResponse.md)
 - [PostVoteResponse](./model/PostVoteResponse.md)
 - [PreBanSummary](./model/PreBanSummary.md)
 - [PubSubComment](./model/PubSubComment.md)
 - [PubSubCommentBase](./model/PubSubCommentBase.md)
 - [PubSubVote](./model/PubSubVote.md)
 - [PublicAPIDeleteCommentResponse](./model/PublicAPIDeleteCommentResponse.md)
 - [PublicAPIGetCommentTextResponse](./model/PublicAPIGetCommentTextResponse.md)
 - [PublicAPISetCommentTextResponse](./model/PublicAPISetCommentTextResponse.md)
 - [PublicBlockFromCommentParams](./model/PublicBlockFromCommentParams.md)
 - [PublicComment](./model/PublicComment.md)
 - [PublicCommentBase](./model/PublicCommentBase.md)
 - [PublicFeedPostsResponse](./model/PublicFeedPostsResponse.md)
 - [PublicPage](./model/PublicPage.md)
 - [PublicVote](./model/PublicVote.md)
 - [PutAwardBadgeResponse](./model/PutAwardBadgeResponse.md)
 - [PutCloseThreadResponse](./model/PutCloseThreadResponse.md)
 - [PutDomainConfigResponse](./model/PutDomainConfigResponse.md)
 - [PutRemoveBadgeResponse](./model/PutRemoveBadgeResponse.md)
 - [PutReopenThreadResponse](./model/PutReopenThreadResponse.md)
 - [PutSSOUserAPIResponse](./model/PutSSOUserAPIResponse.md)
 - [QueryPredicate](./model/QueryPredicate.md)
 - [QueryPredicate_value](./model/QueryPredicate_value.md)
 - [QuestionConfig](./model/QuestionConfig.md)
 - [QuestionConfig_customOptions_inner](./model/QuestionConfig_customOptions_inner.md)
 - [QuestionDatum](./model/QuestionDatum.md)
 - [QuestionRenderingType](./model/QuestionRenderingType.md)
 - [QuestionResult](./model/QuestionResult.md)
 - [QuestionResultAggregationOverall](./model/QuestionResultAggregationOverall.md)
 - [QuestionSubQuestionVisibility](./model/QuestionSubQuestionVisibility.md)
 - [QuestionWhenSave](./model/QuestionWhenSave.md)
 - [ReactBodyParams](./model/ReactBodyParams.md)
 - [ReactFeedPostPublicResponse](./model/ReactFeedPostPublicResponse.md)
 - [ReactFeedPostResponse](./model/ReactFeedPostResponse.md)
 - [Record_string__before_string_or_null__after_string_or_null___value](./model/Record_string__before_string_or_null__after_string_or_null___value.md)
 - [RemoveCommentActionResponse](./model/RemoveCommentActionResponse.md)
 - [RemoveUserBadgeResponse](./model/RemoveUserBadgeResponse.md)
 - [RenderEmailTemplateBody](./model/RenderEmailTemplateBody.md)
 - [RenderEmailTemplateResponse](./model/RenderEmailTemplateResponse.md)
 - [RenderEmailTemplateResponse_1](./model/RenderEmailTemplateResponse_1.md)
 - [RenderableUserNotification](./model/RenderableUserNotification.md)
 - [RepeatCommentCheckIgnoredReason](./model/RepeatCommentCheckIgnoredReason.md)
 - [RepeatCommentHandlingAction](./model/RepeatCommentHandlingAction.md)
 - [ReplaceTenantPackageBody](./model/ReplaceTenantPackageBody.md)
 - [ReplaceTenantPackageResponse](./model/ReplaceTenantPackageResponse.md)
 - [ReplaceTenantUserBody](./model/ReplaceTenantUserBody.md)
 - [ReplaceTenantUserResponse](./model/ReplaceTenantUserResponse.md)
 - [ResetUserNotificationCountResponse](./model/ResetUserNotificationCountResponse.md)
 - [ResetUserNotificationsResponse](./model/ResetUserNotificationsResponse.md)
 - [ResetUserNotificationsResponse_1](./model/ResetUserNotificationsResponse_1.md)
 - [SORT_DIR](./model/SORT_DIR.md)
 - [SSOSecurityLevel](./model/SSOSecurityLevel.md)
 - [SaveCommentResponse](./model/SaveCommentResponse.md)
 - [SaveCommentResponseOptimized](./model/SaveCommentResponseOptimized.md)
 - [SaveCommentsBulkResponse](./model/SaveCommentsBulkResponse.md)
 - [SaveCommentsResponseWithPresence](./model/SaveCommentsResponseWithPresence.md)
 - [SearchUsersResponse](./model/SearchUsersResponse.md)
 - [SearchUsersResponse_1](./model/SearchUsersResponse_1.md)
 - [SearchUsersResult](./model/SearchUsersResult.md)
 - [SearchUsersSectionedResponse](./model/SearchUsersSectionedResponse.md)
 - [SendInviteResponse](./model/SendInviteResponse.md)
 - [SendLoginLinkResponse](./model/SendLoginLinkResponse.md)
 - [SetCommentApprovedResponse](./model/SetCommentApprovedResponse.md)
 - [SetCommentTextParams](./model/SetCommentTextParams.md)
 - [SetCommentTextResponse](./model/SetCommentTextResponse.md)
 - [SetCommentTextResponse_1](./model/SetCommentTextResponse_1.md)
 - [SetCommentTextResult](./model/SetCommentTextResult.md)
 - [SetTrustFactorResponse](./model/SetTrustFactorResponse.md)
 - [SetUserTrustFactorResponse](./model/SetUserTrustFactorResponse.md)
 - [SizePreset](./model/SizePreset.md)
 - [SortDirections](./model/SortDirections.md)
 - [SpamRule](./model/SpamRule.md)
 - [TOSConfig](./model/TOSConfig.md)
 - [TenantBadge](./model/TenantBadge.md)
 - [TenantHashTag](./model/TenantHashTag.md)
 - [TenantPackage](./model/TenantPackage.md)
 - [UnBlockCommentPublicResponse](./model/UnBlockCommentPublicResponse.md)
 - [UnBlockFromCommentParams](./model/UnBlockFromCommentParams.md)
 - [UnBlockUserFromCommentResponse](./model/UnBlockUserFromCommentResponse.md)
 - [UnFlagCommentResponse](./model/UnFlagCommentResponse.md)
 - [UnLockCommentResponse](./model/UnLockCommentResponse.md)
 - [UnPinCommentResponse](./model/UnPinCommentResponse.md)
 - [UnblockSuccess](./model/UnblockSuccess.md)
 - [UpdatableCommentParams](./model/UpdatableCommentParams.md)
 - [UpdateAPIPageData](./model/UpdateAPIPageData.md)
 - [UpdateAPISSOUserData](./model/UpdateAPISSOUserData.md)
 - [UpdateAPIUserSubscriptionData](./model/UpdateAPIUserSubscriptionData.md)
 - [UpdateCommentResponse](./model/UpdateCommentResponse.md)
 - [UpdateDomainConfigParams](./model/UpdateDomainConfigParams.md)
 - [UpdateEmailTemplateBody](./model/UpdateEmailTemplateBody.md)
 - [UpdateEmailTemplateResponse](./model/UpdateEmailTemplateResponse.md)
 - [UpdateFeedPostParams](./model/UpdateFeedPostParams.md)
 - [UpdateFeedPostPublicResponse](./model/UpdateFeedPostPublicResponse.md)
 - [UpdateFeedPostResponse](./model/UpdateFeedPostResponse.md)
 - [UpdateHashTagBody](./model/UpdateHashTagBody.md)
 - [UpdateHashTagResponse](./model/UpdateHashTagResponse.md)
 - [UpdateModeratorBody](./model/UpdateModeratorBody.md)
 - [UpdateModeratorResponse](./model/UpdateModeratorResponse.md)
 - [UpdateNotificationBody](./model/UpdateNotificationBody.md)
 - [UpdateNotificationResponse](./model/UpdateNotificationResponse.md)
 - [UpdateQuestionConfigBody](./model/UpdateQuestionConfigBody.md)
 - [UpdateQuestionConfigResponse](./model/UpdateQuestionConfigResponse.md)
 - [UpdateQuestionResultBody](./model/UpdateQuestionResultBody.md)
 - [UpdateQuestionResultResponse](./model/UpdateQuestionResultResponse.md)
 - [UpdateSubscriptionAPIResponse](./model/UpdateSubscriptionAPIResponse.md)
 - [UpdateTenantBody](./model/UpdateTenantBody.md)
 - [UpdateTenantPackageBody](./model/UpdateTenantPackageBody.md)
 - [UpdateTenantPackageResponse](./model/UpdateTenantPackageResponse.md)
 - [UpdateTenantResponse](./model/UpdateTenantResponse.md)
 - [UpdateTenantUserBody](./model/UpdateTenantUserBody.md)
 - [UpdateTenantUserResponse](./model/UpdateTenantUserResponse.md)
 - [UpdateUserBadgeParams](./model/UpdateUserBadgeParams.md)
 - [UpdateUserBadgeResponse](./model/UpdateUserBadgeResponse.md)
 - [UpdateUserNotificationCommentSubscriptionStatusResponse](./model/UpdateUserNotificationCommentSubscriptionStatusResponse.md)
 - [UpdateUserNotificationPageSubscriptionStatusResponse](./model/UpdateUserNotificationPageSubscriptionStatusResponse.md)
 - [UpdateUserNotificationStatusResponse](./model/UpdateUserNotificationStatusResponse.md)
 - [UploadImageResponse](./model/UploadImageResponse.md)
 - [User](./model/User.md)
 - [UserBadge](./model/UserBadge.md)
 - [UserBadgeProgress](./model/UserBadgeProgress.md)
 - [UserNotification](./model/UserNotification.md)
 - [UserNotificationCount](./model/UserNotificationCount.md)
 - [UserNotificationWriteResponse](./model/UserNotificationWriteResponse.md)
 - [UserPresenceData](./model/UserPresenceData.md)
 - [UserReactsResponse](./model/UserReactsResponse.md)
 - [UserSearchResult](./model/UserSearchResult.md)
 - [UserSearchSection](./model/UserSearchSection.md)
 - [UserSearchSectionResult](./model/UserSearchSectionResult.md)
 - [UserSessionInfo](./model/UserSessionInfo.md)
 - [UsersListLocation](./model/UsersListLocation.md)
 - [VoteBodyParams](./model/VoteBodyParams.md)
 - [VoteCommentResponse](./model/VoteCommentResponse.md)
 - [VoteDeleteResponse](./model/VoteDeleteResponse.md)
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


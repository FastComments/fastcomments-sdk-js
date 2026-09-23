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
*DefaultApi* | [**createAgentTenant**](Apis/DefaultApi.md#createagenttenant) | **POST** /api/v1/agent-tenants | Creates a new trial account for an AI agent without a human signup. No API key is needed to call this.  The response contains the tenant id, an API key that works immediately against the REST API and the MCP server, and a claim URL. Give the claim URL to the human you are working for: opening it while logged in to FastComments attaches the account to them. Unclaimed accounts, and their keys, are deleted 72 hours after creation. Until claimed, the account has the standard trial limits. |
*DefaultApi* | [**createEmailTemplate**](Apis/DefaultApi.md#createemailtemplate) | **POST** /api/v1/email-templates |  |
*DefaultApi* | [**createFeedPost**](Apis/DefaultApi.md#createfeedpost) | **POST** /api/v1/feed-posts |  |
*DefaultApi* | [**createModerator**](Apis/DefaultApi.md#createmoderator) | **POST** /api/v1/moderators |  |
*DefaultApi* | [**createPollVote**](Apis/DefaultApi.md#createpollvote) | **POST** /api/v1/poll-votes | Record a vote on a poll, or move an existing one to a different option. A voter has at most one vote per poll, so calling this again for the same voter moves their vote rather than adding one.  This obeys the site's poll settings: if voting is set to logged-in users only, a vote with just an anonUserId is rejected, and anonymous votes are rate limited per IP per poll. |
*DefaultApi* | [**createQuestionConfig**](Apis/DefaultApi.md#createquestionconfig) | **POST** /api/v1/question-configs |  |
*DefaultApi* | [**createQuestionResult**](Apis/DefaultApi.md#createquestionresult) | **POST** /api/v1/question-results |  |
*DefaultApi* | [**createSubscription**](Apis/DefaultApi.md#createsubscription) | **POST** /api/v1/subscriptions |  |
*DefaultApi* | [**createTenant**](Apis/DefaultApi.md#createtenant) | **POST** /api/v1/tenants |  |
*DefaultApi* | [**createTenantPackage**](Apis/DefaultApi.md#createtenantpackage) | **POST** /api/v1/tenant-packages |  |
*DefaultApi* | [**createTenantUser**](Apis/DefaultApi.md#createtenantuser) | **POST** /api/v1/tenant-users |  |
*DefaultApi* | [**createTicket**](Apis/DefaultApi.md#createticket) | **POST** /api/v1/tickets |  |
*DefaultApi* | [**createUserBadge**](Apis/DefaultApi.md#createuserbadge) | **POST** /api/v1/user-badges |  |
*DefaultApi* | [**createVote**](Apis/DefaultApi.md#createvote) | **POST** /api/v1/votes |  |
*DefaultApi* | [**createWebhook**](Apis/DefaultApi.md#createwebhook) | **POST** /api/v1/webhooks | Subscribes a URL to a comment event (REST hook subscribe). Subscribing the same URL to the same event and domain again returns the existing subscription. Deliveries are HMAC signed, see the webhooks guide; the legacy `token` header is never sent to API subscriptions. |
*DefaultApi* | [**deleteComment**](Apis/DefaultApi.md#deletecomment) | **DELETE** /api/v1/comments/{id} |  |
*DefaultApi* | [**deleteDomainConfig**](Apis/DefaultApi.md#deletedomainconfig) | **DELETE** /api/v1/domain-configs/{domain} |  |
*DefaultApi* | [**deleteEmailTemplate**](Apis/DefaultApi.md#deleteemailtemplate) | **DELETE** /api/v1/email-templates/{id} |  |
*DefaultApi* | [**deleteEmailTemplateRenderError**](Apis/DefaultApi.md#deleteemailtemplaterendererror) | **DELETE** /api/v1/email-templates/{id}/render-errors/{errorId} |  |
*DefaultApi* | [**deleteHashTag**](Apis/DefaultApi.md#deletehashtag) | **DELETE** /api/v1/hash-tags/{tag} |  |
*DefaultApi* | [**deleteModerator**](Apis/DefaultApi.md#deletemoderator) | **DELETE** /api/v1/moderators/{id} |  |
*DefaultApi* | [**deleteNotificationCount**](Apis/DefaultApi.md#deletenotificationcount) | **DELETE** /api/v1/notification-count/{id} |  |
*DefaultApi* | [**deletePage**](Apis/DefaultApi.md#deletepage) | **DELETE** /api/v1/pages/{id} |  |
*DefaultApi* | [**deletePendingWebhookEvent**](Apis/DefaultApi.md#deletependingwebhookevent) | **DELETE** /api/v1/pending-webhook-events/{id} |  |
*DefaultApi* | [**deletePoll**](Apis/DefaultApi.md#deletepoll) | **DELETE** /api/v1/polls/{commentId} | Remove a poll from its comment, along with every vote cast on it. The comment itself is left alone. |
*DefaultApi* | [**deletePollVote**](Apis/DefaultApi.md#deletepollvote) | **DELETE** /api/v1/poll-votes/{id} | Retract a vote. The option it was cast on gives its tally back. |
*DefaultApi* | [**deleteQuestionConfig**](Apis/DefaultApi.md#deletequestionconfig) | **DELETE** /api/v1/question-configs/{id} |  |
*DefaultApi* | [**deleteQuestionResult**](Apis/DefaultApi.md#deletequestionresult) | **DELETE** /api/v1/question-results/{id} |  |
*DefaultApi* | [**deleteSSOUser**](Apis/DefaultApi.md#deletessouser) | **DELETE** /api/v1/sso-users/{id} |  |
*DefaultApi* | [**deleteSubscription**](Apis/DefaultApi.md#deletesubscription) | **DELETE** /api/v1/subscriptions/{id} |  |
*DefaultApi* | [**deleteTenant**](Apis/DefaultApi.md#deletetenant) | **DELETE** /api/v1/tenants/{id} |  |
*DefaultApi* | [**deleteTenantPackage**](Apis/DefaultApi.md#deletetenantpackage) | **DELETE** /api/v1/tenant-packages/{id} |  |
*DefaultApi* | [**deleteTenantUser**](Apis/DefaultApi.md#deletetenantuser) | **DELETE** /api/v1/tenant-users/{id} |  |
*DefaultApi* | [**deleteUserBadge**](Apis/DefaultApi.md#deleteuserbadge) | **DELETE** /api/v1/user-badges/{id} |  |
*DefaultApi* | [**deleteVote**](Apis/DefaultApi.md#deletevote) | **DELETE** /api/v1/votes/{id} |  |
*DefaultApi* | [**deleteWebhook**](Apis/DefaultApi.md#deletewebhook) | **DELETE** /api/v1/webhooks/{id} | Unsubscribes (REST hook unsubscribe). Only subscriptions created through this API can be deleted here; dashboard-managed webhooks are edited in the dashboard. |
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
*DefaultApi* | [**getMe**](Apis/DefaultApi.md#getme) | **GET** /api/v1/me | Identifies the credential in use: the tenant it belongs to and, for OAuth tokens, the user who authorized it. Integrations use this to test a connection and label it. |
*DefaultApi* | [**getModerator**](Apis/DefaultApi.md#getmoderator) | **GET** /api/v1/moderators/{id} |  |
*DefaultApi* | [**getModerators**](Apis/DefaultApi.md#getmoderators) | **GET** /api/v1/moderators |  |
*DefaultApi* | [**getNotificationCount**](Apis/DefaultApi.md#getnotificationcount) | **GET** /api/v1/notifications/count |  |
*DefaultApi* | [**getNotifications**](Apis/DefaultApi.md#getnotifications) | **GET** /api/v1/notifications |  |
*DefaultApi* | [**getPageByURLId**](Apis/DefaultApi.md#getpagebyurlid) | **GET** /api/v1/pages/by-url-id |  |
*DefaultApi* | [**getPages**](Apis/DefaultApi.md#getpages) | **GET** /api/v1/pages |  |
*DefaultApi* | [**getPendingWebhookEventCount**](Apis/DefaultApi.md#getpendingwebhookeventcount) | **GET** /api/v1/pending-webhook-events/count |  |
*DefaultApi* | [**getPendingWebhookEvents**](Apis/DefaultApi.md#getpendingwebhookevents) | **GET** /api/v1/pending-webhook-events |  |
*DefaultApi* | [**getPoll**](Apis/DefaultApi.md#getpoll) | **GET** /api/v1/polls/{commentId} |  |
*DefaultApi* | [**getPollVote**](Apis/DefaultApi.md#getpollvote) | **GET** /api/v1/poll-votes/{id} |  |
*DefaultApi* | [**getPollVotes**](Apis/DefaultApi.md#getpollvotes) | **GET** /api/v1/poll-votes | The individual votes behind one poll's tallies, oldest first.  A poll belongs to a comment, so votes are always read one poll at a time - commentId is required. That keeps every query on the indexes the collection already has.  Obeys the poll's privacy: an anonymous poll's votes cannot be read (poll-anonymous), here or by id. |
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
*DefaultApi* | [**getWebhookSamplePayloads**](Apis/DefaultApi.md#getwebhooksamplepayloads) | **GET** /api/v1/webhooks/sample-payloads | Recent comments in exactly the shape webhook deliveries use, for building integrations (for example Zapier sample data). Every event delivers the same comment object, so `event` only has to be valid. |
*DefaultApi* | [**getWebhooks**](Apis/DefaultApi.md#getwebhooks) | **GET** /api/v1/webhooks | Lists the webhooks configured for the tenant, both dashboard-managed rows and API subscriptions. |
*DefaultApi* | [**patchDomainConfig**](Apis/DefaultApi.md#patchdomainconfig) | **PATCH** /api/v1/domain-configs/{domainToUpdate} |  |
*DefaultApi* | [**patchHashTag**](Apis/DefaultApi.md#patchhashtag) | **PATCH** /api/v1/hash-tags/{tag} |  |
*DefaultApi* | [**patchPage**](Apis/DefaultApi.md#patchpage) | **PATCH** /api/v1/pages/{id} |  |
*DefaultApi* | [**patchPoll**](Apis/DefaultApi.md#patchpoll) | **PATCH** /api/v1/polls/{commentId} | Edit a poll in place, keeping its tallies: change the question, relabel an option, close or reopen it, or change who may see the voters. Options are addressed by id - to add, remove or reorder them, PUT the full list. |
*DefaultApi* | [**patchSSOUser**](Apis/DefaultApi.md#patchssouser) | **PATCH** /api/v1/sso-users/{id} |  |
*DefaultApi* | [**putDomainConfig**](Apis/DefaultApi.md#putdomainconfig) | **PUT** /api/v1/domain-configs/{domainToUpdate} |  |
*DefaultApi* | [**putPoll**](Apis/DefaultApi.md#putpoll) | **PUT** /api/v1/polls/{commentId} | Attach a poll to a comment, or set the full state of the poll it already has.  Options are matched by id: an option sent with the id of an existing option keeps its votes (and takes the new label and position), an option sent without an id is added, and existing options left out of the list are removed along with the votes cast on them.  Keeping no existing option ids on a poll that has votes deletes all of them, so that needs replaceVotes=true. |
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
| *ModerationApi* | [**deleteModerationVote**](Apis/ModerationApi.md#deletemoderationvote) | **DELETE** /auth/my-account/moderate-comments/mod_api/vote/{commentId}/{voteId} |  |
*ModerationApi* | [**getApiComments**](Apis/ModerationApi.md#getapicomments) | **GET** /auth/my-account/moderate-comments/mod_api/api/comments |  |
*ModerationApi* | [**getApiExportStatus**](Apis/ModerationApi.md#getapiexportstatus) | **GET** /auth/my-account/moderate-comments/mod_api/api/export/status |  |
*ModerationApi* | [**getApiIds**](Apis/ModerationApi.md#getapiids) | **GET** /auth/my-account/moderate-comments/mod_api/api/ids |  |
*ModerationApi* | [**getBanUsersFromComment**](Apis/ModerationApi.md#getbanusersfromcomment) | **GET** /auth/my-account/moderate-comments/mod_api/ban-users/from-comment/{commentId} |  |
*ModerationApi* | [**getCommentBanStatus**](Apis/ModerationApi.md#getcommentbanstatus) | **GET** /auth/my-account/moderate-comments/mod_api/get-comment-ban-status/{commentId} |  |
*ModerationApi* | [**getCommentChildren**](Apis/ModerationApi.md#getcommentchildren) | **GET** /auth/my-account/moderate-comments/mod_api/comment-children/{commentId} |  |
*ModerationApi* | [**getCount**](Apis/ModerationApi.md#getcount) | **GET** /auth/my-account/moderate-comments/mod_api/count |  |
*ModerationApi* | [**getCounts**](Apis/ModerationApi.md#getcounts) | **GET** /auth/my-account/moderate-comments/banned-users/mod_api/counts |  |
*ModerationApi* | [**getLogs**](Apis/ModerationApi.md#getlogs) | **GET** /auth/my-account/moderate-comments/mod_api/logs/{commentId} |  |
*ModerationApi* | [**getManualBadges**](Apis/ModerationApi.md#getmanualbadges) | **GET** /auth/my-account/moderate-comments/mod_api/get-manual-badges |  |
*ModerationApi* | [**getManualBadgesForUser**](Apis/ModerationApi.md#getmanualbadgesforuser) | **GET** /auth/my-account/moderate-comments/mod_api/get-manual-badges-for-user |  |
*ModerationApi* | [**getModerationComment**](Apis/ModerationApi.md#getmoderationcomment) | **GET** /auth/my-account/moderate-comments/mod_api/comment/{commentId} |  |
*ModerationApi* | [**getModerationCommentText**](Apis/ModerationApi.md#getmoderationcommenttext) | **GET** /auth/my-account/moderate-comments/mod_api/get-comment-text/{commentId} |  |
*ModerationApi* | [**getPreBanSummary**](Apis/ModerationApi.md#getprebansummary) | **GET** /auth/my-account/moderate-comments/mod_api/pre-ban-summary/{commentId} |  |
*ModerationApi* | [**getSearchCommentsSummary**](Apis/ModerationApi.md#getsearchcommentssummary) | **GET** /auth/my-account/moderate-comments/mod_api/search/comments/summary |  |
*ModerationApi* | [**getSearchPages**](Apis/ModerationApi.md#getsearchpages) | **GET** /auth/my-account/moderate-comments/mod_api/search/pages |  |
*ModerationApi* | [**getSearchSites**](Apis/ModerationApi.md#getsearchsites) | **GET** /auth/my-account/moderate-comments/mod_api/search/sites |  |
*ModerationApi* | [**getSearchSuggest**](Apis/ModerationApi.md#getsearchsuggest) | **GET** /auth/my-account/moderate-comments/mod_api/search/suggest |  |
*ModerationApi* | [**getSearchUsers**](Apis/ModerationApi.md#getsearchusers) | **GET** /auth/my-account/moderate-comments/mod_api/search/users |  |
*ModerationApi* | [**getTrustFactor**](Apis/ModerationApi.md#gettrustfactor) | **GET** /auth/my-account/moderate-comments/mod_api/get-trust-factor |  |
*ModerationApi* | [**getUserBanPreference**](Apis/ModerationApi.md#getuserbanpreference) | **GET** /auth/my-account/moderate-comments/mod_api/user-ban-preference |  |
*ModerationApi* | [**getUserInternalProfile**](Apis/ModerationApi.md#getuserinternalprofile) | **GET** /auth/my-account/moderate-comments/mod_api/get-user-internal-profile |  |
*ModerationApi* | [**postAdjustCommentVotes**](Apis/ModerationApi.md#postadjustcommentvotes) | **POST** /auth/my-account/moderate-comments/mod_api/adjust-comment-votes/{commentId} |  |
*ModerationApi* | [**postApiExport**](Apis/ModerationApi.md#postapiexport) | **POST** /auth/my-account/moderate-comments/mod_api/api/export |  |
*ModerationApi* | [**postBanUserFromComment**](Apis/ModerationApi.md#postbanuserfromcomment) | **POST** /auth/my-account/moderate-comments/mod_api/ban-user/from-comment/{commentId} |  |
*ModerationApi* | [**postBanUserUndo**](Apis/ModerationApi.md#postbanuserundo) | **POST** /auth/my-account/moderate-comments/mod_api/ban-user/undo |  |
*ModerationApi* | [**postBulkPreBanSummary**](Apis/ModerationApi.md#postbulkprebansummary) | **POST** /auth/my-account/moderate-comments/mod_api/bulk-pre-ban-summary |  |
*ModerationApi* | [**postCommentsByIds**](Apis/ModerationApi.md#postcommentsbyids) | **POST** /auth/my-account/moderate-comments/mod_api/comments-by-ids |  |
*ModerationApi* | [**postFlagComment**](Apis/ModerationApi.md#postflagcomment) | **POST** /auth/my-account/moderate-comments/mod_api/flag-comment/{commentId} |  |
*ModerationApi* | [**postRemoveComment**](Apis/ModerationApi.md#postremovecomment) | **POST** /auth/my-account/moderate-comments/mod_api/remove-comment/{commentId} |  |
*ModerationApi* | [**postRestoreDeletedComment**](Apis/ModerationApi.md#postrestoredeletedcomment) | **POST** /auth/my-account/moderate-comments/mod_api/restore-deleted-comment/{commentId} |  |
*ModerationApi* | [**postSetCommentApprovalStatus**](Apis/ModerationApi.md#postsetcommentapprovalstatus) | **POST** /auth/my-account/moderate-comments/mod_api/set-comment-approval-status/{commentId} |  |
*ModerationApi* | [**postSetCommentReviewStatus**](Apis/ModerationApi.md#postsetcommentreviewstatus) | **POST** /auth/my-account/moderate-comments/mod_api/set-comment-review-status/{commentId} |  |
*ModerationApi* | [**postSetCommentSpamStatus**](Apis/ModerationApi.md#postsetcommentspamstatus) | **POST** /auth/my-account/moderate-comments/mod_api/set-comment-spam-status/{commentId} |  |
*ModerationApi* | [**postSetCommentText**](Apis/ModerationApi.md#postsetcommenttext) | **POST** /auth/my-account/moderate-comments/mod_api/set-comment-text/{commentId} |  |
*ModerationApi* | [**postUnFlagComment**](Apis/ModerationApi.md#postunflagcomment) | **POST** /auth/my-account/moderate-comments/mod_api/un-flag-comment/{commentId} |  |
*ModerationApi* | [**postVote**](Apis/ModerationApi.md#postvote) | **POST** /auth/my-account/moderate-comments/mod_api/vote/{commentId} |  |
*ModerationApi* | [**putAwardBadge**](Apis/ModerationApi.md#putawardbadge) | **PUT** /auth/my-account/moderate-comments/mod_api/award-badge |  |
*ModerationApi* | [**putCloseThread**](Apis/ModerationApi.md#putclosethread) | **PUT** /auth/my-account/moderate-comments/mod_api/close-thread |  |
*ModerationApi* | [**putRemoveBadge**](Apis/ModerationApi.md#putremovebadge) | **PUT** /auth/my-account/moderate-comments/mod_api/remove-badge |  |
*ModerationApi* | [**putReopenThread**](Apis/ModerationApi.md#putreopenthread) | **PUT** /auth/my-account/moderate-comments/mod_api/reopen-thread |  |
*ModerationApi* | [**setTrustFactor**](Apis/ModerationApi.md#settrustfactor) | **PUT** /auth/my-account/moderate-comments/mod_api/set-trust-factor |  |
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
 - [AddPageAPIResponse](./model/AddPageAPIResponse.md)
 - [AddSSOUserAPIResponse](./model/AddSSOUserAPIResponse.md)
 - [AdjustCommentVotesParams](./model/AdjustCommentVotesParams.md)
 - [AdjustVotesResponse](./model/AdjustVotesResponse.md)
 - [AggregateQuestionResultsResponse](./model/AggregateQuestionResultsResponse.md)
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
 - [BlockSuccess](./model/BlockSuccess.md)
 - [BuildModerationFilterParams](./model/BuildModerationFilterParams.md)
 - [BuildModerationFilterResponse](./model/BuildModerationFilterResponse.md)
 - [BulkAggregateQuestionItem](./model/BulkAggregateQuestionItem.md)
 - [BulkAggregateQuestionResultsRequest](./model/BulkAggregateQuestionResultsRequest.md)
 - [BulkAggregateQuestionResultsResponse](./model/BulkAggregateQuestionResultsResponse.md)
 - [BulkCreateHashTagsBody](./model/BulkCreateHashTagsBody.md)
 - [BulkCreateHashTagsBody_tags_inner](./model/BulkCreateHashTagsBody_tags_inner.md)
 - [BulkCreateHashTagsResponse](./model/BulkCreateHashTagsResponse.md)
 - [BulkCreateHashTagsResponse_results_inner](./model/BulkCreateHashTagsResponse_results_inner.md)
 - [BulkPreBanParams](./model/BulkPreBanParams.md)
 - [BulkPreBanSummary](./model/BulkPreBanSummary.md)
 - [ChangeCommentPinStatusResponse](./model/ChangeCommentPinStatusResponse.md)
 - [ChangeTicketStateBody](./model/ChangeTicketStateBody.md)
 - [ChangeTicketStateResponse](./model/ChangeTicketStateResponse.md)
 - [CheckBlockedCommentsResponse](./model/CheckBlockedCommentsResponse.md)
 - [CombineQuestionResultsWithCommentsResponse](./model/CombineQuestionResultsWithCommentsResponse.md)
 - [CommentData](./model/CommentData.md)
 - [CommentHTMLRenderingMode](./model/CommentHTMLRenderingMode.md)
 - [CommentLogData](./model/CommentLogData.md)
 - [CommentLogEntry](./model/CommentLogEntry.md)
 - [CommentLogType](./model/CommentLogType.md)
 - [CommentPoll](./model/CommentPoll.md)
 - [CommentPollInput](./model/CommentPollInput.md)
 - [CommentPollOption](./model/CommentPollOption.md)
 - [CommentPollOptionInput](./model/CommentPollOptionInput.md)
 - [CommentPollPatch](./model/CommentPollPatch.md)
 - [CommentPollPatch_options_inner](./model/CommentPollPatch_options_inner.md)
 - [CommentPollPutInput](./model/CommentPollPutInput.md)
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
 - [CreateAgentTenantBody](./model/CreateAgentTenantBody.md)
 - [CreateAgentTenantResponse](./model/CreateAgentTenantResponse.md)
 - [CreateCommentParams](./model/CreateCommentParams.md)
 - [CreateEmailTemplateBody](./model/CreateEmailTemplateBody.md)
 - [CreateEmailTemplateResponse](./model/CreateEmailTemplateResponse.md)
 - [CreateFeedPostParams](./model/CreateFeedPostParams.md)
 - [CreateFeedPostResponse](./model/CreateFeedPostResponse.md)
 - [CreateFeedPostsResponse](./model/CreateFeedPostsResponse.md)
 - [CreateHashTagBody](./model/CreateHashTagBody.md)
 - [CreateHashTagResponse](./model/CreateHashTagResponse.md)
 - [CreateModeratorBody](./model/CreateModeratorBody.md)
 - [CreateModeratorResponse](./model/CreateModeratorResponse.md)
 - [CreatePollVoteBody](./model/CreatePollVoteBody.md)
 - [CreatePollVoteResponse](./model/CreatePollVoteResponse.md)
 - [CreateQuestionConfigBody](./model/CreateQuestionConfigBody.md)
 - [CreateQuestionConfigResponse](./model/CreateQuestionConfigResponse.md)
 - [CreateQuestionResultBody](./model/CreateQuestionResultBody.md)
 - [CreateQuestionResultResponse](./model/CreateQuestionResultResponse.md)
 - [CreateSubscriptionAPIResponse](./model/CreateSubscriptionAPIResponse.md)
 - [CreateTenantBody](./model/CreateTenantBody.md)
 - [CreateTenantPackageBody](./model/CreateTenantPackageBody.md)
 - [CreateTenantPackageResponse](./model/CreateTenantPackageResponse.md)
 - [CreateTenantResponse](./model/CreateTenantResponse.md)
 - [CreateTenantUserBody](./model/CreateTenantUserBody.md)
 - [CreateTenantUserResponse](./model/CreateTenantUserResponse.md)
 - [CreateTicketBody](./model/CreateTicketBody.md)
 - [CreateTicketResponse](./model/CreateTicketResponse.md)
 - [CreateUserBadgeParams](./model/CreateUserBadgeParams.md)
 - [CreateV1PageReact](./model/CreateV1PageReact.md)
 - [CreateWebhookParams](./model/CreateWebhookParams.md)
 - [CreateWebhookResponse](./model/CreateWebhookResponse.md)
 - [CustomConfigParameters](./model/CustomConfigParameters.md)
 - [CustomEmailTemplate](./model/CustomEmailTemplate.md)
 - [DeleteCommentAction](./model/DeleteCommentAction.md)
 - [DeleteCommentResult](./model/DeleteCommentResult.md)
 - [DeleteDomainConfigResponse](./model/DeleteDomainConfigResponse.md)
 - [DeleteFeedPostPublicResponse](./model/DeleteFeedPostPublicResponse.md)
 - [DeleteHashTagRequestBody](./model/DeleteHashTagRequestBody.md)
 - [DeletePageAPIResponse](./model/DeletePageAPIResponse.md)
 - [DeletePollVoteResponse](./model/DeletePollVoteResponse.md)
 - [DeleteSSOUserAPIResponse](./model/DeleteSSOUserAPIResponse.md)
 - [DeleteSubscriptionAPIResponse](./model/DeleteSubscriptionAPIResponse.md)
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
 - [FlagCommentResponse](./model/FlagCommentResponse.md)
 - [GetAuditLogsResponse](./model/GetAuditLogsResponse.md)
 - [GetBannedUsersCountResponse](./model/GetBannedUsersCountResponse.md)
 - [GetBannedUsersFromCommentResponse](./model/GetBannedUsersFromCommentResponse.md)
 - [GetCachedNotificationCountResponse](./model/GetCachedNotificationCountResponse.md)
 - [GetCommentBanStatusResponse](./model/GetCommentBanStatusResponse.md)
 - [GetCommentTextResponse](./model/GetCommentTextResponse.md)
 - [GetCommentVoteUserNamesSuccessResponse](./model/GetCommentVoteUserNamesSuccessResponse.md)
 - [GetCommentsForUserResponse](./model/GetCommentsForUserResponse.md)
 - [GetCommentsResponseWithPresence_PublicComment_](./model/GetCommentsResponseWithPresence_PublicComment_.md)
 - [GetCommentsResponse_PublicComment_](./model/GetCommentsResponse_PublicComment_.md)
 - [GetDomainConfigResponse](./model/GetDomainConfigResponse.md)
 - [GetDomainConfigsResponse](./model/GetDomainConfigsResponse.md)
 - [GetDomainConfigsResponse_anyOf](./model/GetDomainConfigsResponse_anyOf.md)
 - [GetDomainConfigsResponse_anyOf_1](./model/GetDomainConfigsResponse_anyOf_1.md)
 - [GetEmailTemplateDefinitionsResponse](./model/GetEmailTemplateDefinitionsResponse.md)
 - [GetEmailTemplateRenderErrorsResponse](./model/GetEmailTemplateRenderErrorsResponse.md)
 - [GetEmailTemplateResponse](./model/GetEmailTemplateResponse.md)
 - [GetEmailTemplatesResponse](./model/GetEmailTemplatesResponse.md)
 - [GetEventLogResponse](./model/GetEventLogResponse.md)
 - [GetFeedPostsResponse](./model/GetFeedPostsResponse.md)
 - [GetGifsSearchResponse](./model/GetGifsSearchResponse.md)
 - [GetGifsTrendingResponse](./model/GetGifsTrendingResponse.md)
 - [GetHashTagsResponse](./model/GetHashTagsResponse.md)
 - [GetMeResponse](./model/GetMeResponse.md)
 - [GetModeratorResponse](./model/GetModeratorResponse.md)
 - [GetModeratorsResponse](./model/GetModeratorsResponse.md)
 - [GetMyNotificationsResponse](./model/GetMyNotificationsResponse.md)
 - [GetNotificationCountResponse](./model/GetNotificationCountResponse.md)
 - [GetNotificationsResponse](./model/GetNotificationsResponse.md)
 - [GetPageByURLIdAPIResponse](./model/GetPageByURLIdAPIResponse.md)
 - [GetPagesAPIResponse](./model/GetPagesAPIResponse.md)
 - [GetPendingWebhookEventCountResponse](./model/GetPendingWebhookEventCountResponse.md)
 - [GetPendingWebhookEventsResponse](./model/GetPendingWebhookEventsResponse.md)
 - [GetPollResponse](./model/GetPollResponse.md)
 - [GetPollVoteResponse](./model/GetPollVoteResponse.md)
 - [GetPollVotesResponse](./model/GetPollVotesResponse.md)
 - [GetPublicFeedPostsResponse](./model/GetPublicFeedPostsResponse.md)
 - [GetPublicPagesResponse](./model/GetPublicPagesResponse.md)
 - [GetQuestionConfigResponse](./model/GetQuestionConfigResponse.md)
 - [GetQuestionConfigsResponse](./model/GetQuestionConfigsResponse.md)
 - [GetQuestionResultResponse](./model/GetQuestionResultResponse.md)
 - [GetQuestionResultsResponse](./model/GetQuestionResultsResponse.md)
 - [GetSSOUserByEmailAPIResponse](./model/GetSSOUserByEmailAPIResponse.md)
 - [GetSSOUserByIdAPIResponse](./model/GetSSOUserByIdAPIResponse.md)
 - [GetSSOUsersResponse](./model/GetSSOUsersResponse.md)
 - [GetSubscriptionsAPIResponse](./model/GetSubscriptionsAPIResponse.md)
 - [GetTenantDailyUsagesResponse](./model/GetTenantDailyUsagesResponse.md)
 - [GetTenantManualBadgesResponse](./model/GetTenantManualBadgesResponse.md)
 - [GetTenantPackageResponse](./model/GetTenantPackageResponse.md)
 - [GetTenantPackagesResponse](./model/GetTenantPackagesResponse.md)
 - [GetTenantResponse](./model/GetTenantResponse.md)
 - [GetTenantUserResponse](./model/GetTenantUserResponse.md)
 - [GetTenantUsersResponse](./model/GetTenantUsersResponse.md)
 - [GetTenantsResponse](./model/GetTenantsResponse.md)
 - [GetTicketResponse](./model/GetTicketResponse.md)
 - [GetTicketsResponse](./model/GetTicketsResponse.md)
 - [GetTranslationsResponse](./model/GetTranslationsResponse.md)
 - [GetUserInternalProfileResponse](./model/GetUserInternalProfileResponse.md)
 - [GetUserInternalProfileResponse_profile](./model/GetUserInternalProfileResponse_profile.md)
 - [GetUserManualBadgesResponse](./model/GetUserManualBadgesResponse.md)
 - [GetUserNotificationCountResponse](./model/GetUserNotificationCountResponse.md)
 - [GetUserPresenceStatusesResponse](./model/GetUserPresenceStatusesResponse.md)
 - [GetUserResponse](./model/GetUserResponse.md)
 - [GetUserTrustFactorResponse](./model/GetUserTrustFactorResponse.md)
 - [GetV1PageLikes](./model/GetV1PageLikes.md)
 - [GetV2PageReactUsersResponse](./model/GetV2PageReactUsersResponse.md)
 - [GetV2PageReacts](./model/GetV2PageReacts.md)
 - [GetVotesForUserResponse](./model/GetVotesForUserResponse.md)
 - [GetVotesResponse](./model/GetVotesResponse.md)
 - [GetWebhookSamplePayloadsResponse](./model/GetWebhookSamplePayloadsResponse.md)
 - [GetWebhooksResponse](./model/GetWebhooksResponse.md)
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
 - [MeAuthType](./model/MeAuthType.md)
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
 - [OAuthScope](./model/OAuthScope.md)
 - [PageUserEntry](./model/PageUserEntry.md)
 - [PageUsersInfoResponse](./model/PageUsersInfoResponse.md)
 - [PageUsersOfflineResponse](./model/PageUsersOfflineResponse.md)
 - [PageUsersOnlineResponse](./model/PageUsersOnlineResponse.md)
 - [PagesSortBy](./model/PagesSortBy.md)
 - [PatchDomainConfigParams](./model/PatchDomainConfigParams.md)
 - [PatchDomainConfigResponse](./model/PatchDomainConfigResponse.md)
 - [PatchPageAPIResponse](./model/PatchPageAPIResponse.md)
 - [PatchSSOUserAPIResponse](./model/PatchSSOUserAPIResponse.md)
 - [PendingCommentToSyncOutbound](./model/PendingCommentToSyncOutbound.md)
 - [Pick_CommentPoll.options-or-totalVotes-or-closesAt_](./model/Pick_CommentPoll.options-or-totalVotes-or-closesAt_.md)
 - [PollCreationMode](./model/PollCreationMode.md)
 - [PollPrivacy](./model/PollPrivacy.md)
 - [PollVotingMode](./model/PollVotingMode.md)
 - [PostRemoveCommentApiResponse](./model/PostRemoveCommentApiResponse.md)
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
 - [PublicPollVote](./model/PublicPollVote.md)
 - [PublicVote](./model/PublicVote.md)
 - [PublicWebhook](./model/PublicWebhook.md)
 - [PutDomainConfigResponse](./model/PutDomainConfigResponse.md)
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
 - [ReactFeedPostResponse](./model/ReactFeedPostResponse.md)
 - [Record_string__before_string_or_null__after_string_or_null___value](./model/Record_string__before_string_or_null__after_string_or_null___value.md)
 - [RemoveCommentActionResponse](./model/RemoveCommentActionResponse.md)
 - [RemoveUserBadgeResponse](./model/RemoveUserBadgeResponse.md)
 - [RenderEmailTemplateBody](./model/RenderEmailTemplateBody.md)
 - [RenderEmailTemplateResponse](./model/RenderEmailTemplateResponse.md)
 - [RenderableUserNotification](./model/RenderableUserNotification.md)
 - [RepeatCommentCheckIgnoredReason](./model/RepeatCommentCheckIgnoredReason.md)
 - [RepeatCommentHandlingAction](./model/RepeatCommentHandlingAction.md)
 - [ReplaceTenantPackageBody](./model/ReplaceTenantPackageBody.md)
 - [ReplaceTenantUserBody](./model/ReplaceTenantUserBody.md)
 - [ResetUserNotificationsResponse](./model/ResetUserNotificationsResponse.md)
 - [SORT_DIR](./model/SORT_DIR.md)
 - [SSOSecurityLevel](./model/SSOSecurityLevel.md)
 - [SaveCommentResponseOptimized](./model/SaveCommentResponseOptimized.md)
 - [SaveCommentsBulkResponse](./model/SaveCommentsBulkResponse.md)
 - [SaveCommentsResponseWithPresence](./model/SaveCommentsResponseWithPresence.md)
 - [SavePollResponse](./model/SavePollResponse.md)
 - [SearchUsersResponse](./model/SearchUsersResponse.md)
 - [SearchUsersResult](./model/SearchUsersResult.md)
 - [SearchUsersSectionedResponse](./model/SearchUsersSectionedResponse.md)
 - [SetCommentApprovedResponse](./model/SetCommentApprovedResponse.md)
 - [SetCommentTextParams](./model/SetCommentTextParams.md)
 - [SetCommentTextResponse](./model/SetCommentTextResponse.md)
 - [SetCommentTextResult](./model/SetCommentTextResult.md)
 - [SetUserTrustFactorResponse](./model/SetUserTrustFactorResponse.md)
 - [SizePreset](./model/SizePreset.md)
 - [SortDirections](./model/SortDirections.md)
 - [SpamRule](./model/SpamRule.md)
 - [TOSConfig](./model/TOSConfig.md)
 - [TenantBadge](./model/TenantBadge.md)
 - [TenantHashTag](./model/TenantHashTag.md)
 - [TenantPackage](./model/TenantPackage.md)
 - [UnBlockFromCommentParams](./model/UnBlockFromCommentParams.md)
 - [UnblockSuccess](./model/UnblockSuccess.md)
 - [UpdatableCommentParams](./model/UpdatableCommentParams.md)
 - [UpdateAPIPageData](./model/UpdateAPIPageData.md)
 - [UpdateAPISSOUserData](./model/UpdateAPISSOUserData.md)
 - [UpdateAPIUserSubscriptionData](./model/UpdateAPIUserSubscriptionData.md)
 - [UpdateDomainConfigParams](./model/UpdateDomainConfigParams.md)
 - [UpdateEmailTemplateBody](./model/UpdateEmailTemplateBody.md)
 - [UpdateFeedPostParams](./model/UpdateFeedPostParams.md)
 - [UpdateHashTagBody](./model/UpdateHashTagBody.md)
 - [UpdateHashTagResponse](./model/UpdateHashTagResponse.md)
 - [UpdateModeratorBody](./model/UpdateModeratorBody.md)
 - [UpdateNotificationBody](./model/UpdateNotificationBody.md)
 - [UpdateQuestionConfigBody](./model/UpdateQuestionConfigBody.md)
 - [UpdateQuestionResultBody](./model/UpdateQuestionResultBody.md)
 - [UpdateSubscriptionAPIResponse](./model/UpdateSubscriptionAPIResponse.md)
 - [UpdateTenantBody](./model/UpdateTenantBody.md)
 - [UpdateTenantPackageBody](./model/UpdateTenantPackageBody.md)
 - [UpdateTenantUserBody](./model/UpdateTenantUserBody.md)
 - [UpdateUserBadgeParams](./model/UpdateUserBadgeParams.md)
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
 - [VoteDeleteResponse](./model/VoteDeleteResponse.md)
 - [VoteResponse](./model/VoteResponse.md)
 - [VoteResponseUser](./model/VoteResponseUser.md)
 - [VoteResponse_status](./model/VoteResponse_status.md)
 - [VoteStyle](./model/VoteStyle.md)
 - [WebhookComment](./model/WebhookComment.md)
 - [WebhookEventName](./model/WebhookEventName.md)
 - [WebhookHTTPMethod](./model/WebhookHTTPMethod.md)
 - [WebhookSource](./model/WebhookSource.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="api_key"></a>
### api_key

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header


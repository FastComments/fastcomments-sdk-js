# CreateAgentTenantResponse
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **status** | [**APIStatus**](APIStatus.md) |  | [default to null] |
| **tenantId** | **String** | Pass as tenantId on every API and MCP call. | [default to null] |
| **apiKey** | **String** | Full-access key for this tenant. Works immediately. Keep it secret. | [default to null] |
| **claimUrl** | **String** | Give this to the human. Opening it while logged in attaches the tenant to their account. | [default to null] |
| **expiresAt** | **String** | ISO date. The tenant and its key are deleted at this time unless claimed. | [default to null] |
| **apiBaseUrl** | **String** |  | [default to null] |
| **mcpUrl** | **String** |  | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


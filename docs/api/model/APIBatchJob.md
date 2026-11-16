# APIBatchJob
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **pageMigrationUndoResult** | [**PageMigrationUndoCounts**](PageMigrationUndoCounts.md) |  | [optional] [default to null] |
| **undoId** | **String** | migrate-pages: set once the job has finished. Pass to POST /api/v1/pages/migrations/{undoId}/undo within 90 days. undo-page-migration: the migration being undone. | [optional] [default to null] |
| **pageMigrationResults** | [**List**](APIBatchJob_pageMigrationResults_inner.md) | migrate-pages: one entry per finished migration, in request order. | [optional] [default to null] |
| **totalCount** | **Integer** | Total work, when known up front. | [optional] [default to null] |
| **processedCount** | **Integer** | Work done so far. The unit depends on the type: migrations finished for migrate-pages, records restored for undo-page-migration, rows for imports and exports. | [default to null] |
| **completedAt** | **Date** |  | [optional] [default to null] |
| **createdAt** | **Date** |  | [default to null] |
| **status** | **String** | requested, running, success or failed. | [default to null] |
| **type** | **String** | For example migrate-pages, undo-page-migration, export, import. | [default to null] |
| **id** | **String** |  | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


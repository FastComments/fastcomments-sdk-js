# PageMigrationUndoCounts
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **restored** | **Integer** | Records put back to their pre-migration values. | [default to null] |
| **skipped** | **Integer** | Records left alone because they changed after the migration, or no longer exist. | [default to null] |
| **notRestorable** | **Integer** | Records a page merge or duplicate cleanup deleted during the migration. These cannot be brought back. | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


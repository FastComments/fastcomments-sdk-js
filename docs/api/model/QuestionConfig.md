# QuestionConfig
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **\_id** | **String** |  | [default to null] |
| **tenantId** | **String** |  | [default to null] |
| **name** | **String** |  | [default to null] |
| **question** | **String** |  | [default to null] |
| **summaryLabel** | **String** |  | [optional] [default to null] |
| **helpText** | **String** |  | [default to null] |
| **createdAt** | **Date** |  | [default to null] |
| **createdBy** | **String** |  | [default to null] |
| **usedCount** | **Double** |  | [default to null] |
| **lastUsed** | **Date** |  | [default to null] |
| **type** | **String** | One of nps, slider, star, thumbs, choice, multi, emoji, scale. Answers: nps 0-10, slider min-max, star 1-numStars, thumbs 1 (up) or 0 (down), choice &#x3D; option index, multi &#x3D; option indexes (values), emoji/scale &#x3D; option index + 1. | [default to null] |
| **numStars** | **Double** |  | [default to null] |
| **min** | **Double** |  | [default to null] |
| **max** | **Double** |  | [default to null] |
| **defaultValue** | **Double** |  | [default to null] |
| **labelNegative** | **String** |  | [default to null] |
| **labelPositive** | **String** |  | [default to null] |
| **customOptions** | [**List**](QuestionConfig_customOptions_inner.md) | Option labels for choice, multi, emoji and scale questions. | [default to null] |
| **subQuestionIds** | **List** |  | [default to null] |
| **alwaysShowSubQuestions** | **Boolean** |  | [default to null] |
| **subQuestionConditions** | [**List**](SubQuestionCondition.md) | Sub-questions listed here only show when this question&#39;s answer matches. Others always show. | [optional] [default to null] |
| **commentBoxCondition** | [**QuestionCondition**](QuestionCondition.md) |  | [optional] [default to null] |
| **commentBoxPrompt** | **String** | Placeholder for the comment box when commentBoxCondition reveals it. | [optional] [default to null] |
| **reportingOrder** | **Double** |  | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


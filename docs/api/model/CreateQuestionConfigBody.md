# CreateQuestionConfigBody
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** |  | [default to null] |
| **question** | **String** |  | [default to null] |
| **helpText** | **String** |  | [optional] [default to null] |
| **type** | **String** | One of nps, slider, star, thumbs, choice, multi, emoji, scale. choice, multi, emoji and scale take their labels from customOptions (choice/multi 2-20 options, emoji/scale 3-7). | [default to null] |
| **numStars** | **Double** |  | [optional] [default to null] |
| **min** | **Double** |  | [optional] [default to null] |
| **max** | **Double** |  | [optional] [default to null] |
| **defaultValue** | **Double** |  | [optional] [default to null] |
| **labelNegative** | **String** |  | [optional] [default to null] |
| **labelPositive** | **String** |  | [optional] [default to null] |
| **customOptions** | [**List**](QuestionConfig_customOptions_inner.md) |  | [optional] [default to null] |
| **subQuestionIds** | **List** |  | [optional] [default to null] |
| **alwaysShowSubQuestions** | **Boolean** |  | [optional] [default to null] |
| **subQuestionConditions** | [**List**](SubQuestionCondition.md) | Show a sub-question only when this question&#39;s answer matches its rule. | [optional] [default to null] |
| **commentBoxCondition** | [**QuestionCondition**](QuestionCondition.md) |  | [optional] [default to null] |
| **commentBoxPrompt** | **String** | Comment box placeholder when commentBoxCondition reveals it. | [optional] [default to null] |
| **reportingOrder** | **Double** |  | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


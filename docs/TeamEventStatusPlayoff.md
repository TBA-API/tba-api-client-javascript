# TbaApiV3client.TeamEventStatusPlayoff

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **String** | The highest playoff level the team reached. | [optional] 
**currentLevelRecord** | [**WLTRecord**](WLTRecord.md) |  | [optional] 
**record** | [**WLTRecord**](WLTRecord.md) |  | [optional] 
**status** | **String** | Current competition status for the playoffs. | [optional] 
**playoffAverage** | **Number** | The average match score during playoffs. Year specific. May be null if not relevant for a given year. | [optional] 


<a name="LevelEnum"></a>
## Enum: LevelEnum


* `qm` (value: `"qm"`)

* `ef` (value: `"ef"`)

* `qf` (value: `"qf"`)

* `sf` (value: `"sf"`)

* `f` (value: `"f"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `won` (value: `"won"`)

* `eliminated` (value: `"eliminated"`)

* `playing` (value: `"playing"`)





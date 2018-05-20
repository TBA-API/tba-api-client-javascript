# TbaApiV3client.Match

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | TBA match key with the format &#x60;yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]&#x60;, where &#x60;yyyy&#x60; is the year, and &#x60;EVENT_CODE&#x60; is the event code of the event, &#x60;COMP_LEVEL&#x60; is (qm, ef, qf, sf, f), and &#x60;MATCH_NUMBER&#x60; is the match number in the competition level. A set number may be appended to the competition level if more than one match in required per set. | 
**compLevel** | **String** | The competition level the match was played at. | 
**setNumber** | **Number** | The set number in a series of matches where more than one match is required in the match series. | 
**matchNumber** | **Number** | The match number of the match in the competition level. | 
**alliances** | [**MatchSimpleAlliances**](MatchSimpleAlliances.md) |  | [optional] 
**winningAlliance** | **String** | The color (red/blue) of the winning alliance. Will contain an empty string in the event of no winner, or a tie. | [optional] 
**eventKey** | **String** | Event key of the event the match was played at. | 
**time** | **Number** | UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the scheduled match time, as taken from the published schedule. | [optional] 
**actualTime** | **Number** | UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of actual match start time. | [optional] 
**predictedTime** | **Number** | UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the TBA predicted match start time. | [optional] 
**postResultTime** | **Number** | UNIX timestamp (seconds since 1-Jan-1970 00:00:00) when the match result was posted. | [optional] 
**scoreBreakdown** | **Object** | Score breakdown for auto, teleop, etc. points. Varies from year to year. May be null. | [optional] 
**videos** | [**[MatchVideos]**](MatchVideos.md) | Array of video objects associated with this match. | [optional] 


<a name="CompLevelEnum"></a>
## Enum: CompLevelEnum


* `qm` (value: `"qm"`)

* `ef` (value: `"ef"`)

* `qf` (value: `"qf"`)

* `sf` (value: `"sf"`)

* `f` (value: `"f"`)





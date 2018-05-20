# TbaApiV3client.APIStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentSeason** | **Number** | Year of the current FRC season. | 
**maxSeason** | **Number** | Maximum FRC season year for valid queries. | 
**isDatafeedDown** | **Boolean** | True if the entire FMS API provided by FIRST is down. | 
**downEvents** | **[String]** | An array of strings containing event keys of any active events that are no longer updating. | 
**ios** | [**APIStatusAppVersion**](APIStatusAppVersion.md) |  | 
**android** | [**APIStatusAppVersion**](APIStatusAppVersion.md) |  | 



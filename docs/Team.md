# TbaApiV3client.Team

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | TBA team key with the format &#x60;frcXXXX&#x60; with &#x60;XXXX&#x60; representing the team number. | 
**teamNumber** | **Number** | Official team number issued by FIRST. | 
**nickname** | **String** | Team nickname provided by FIRST. | [optional] 
**name** | **String** | Official long name registered with FIRST. | 
**city** | **String** | City of team derived from parsing the address registered with FIRST. | [optional] 
**stateProv** | **String** | State of team derived from parsing the address registered with FIRST. | [optional] 
**country** | **String** | Country of team derived from parsing the address registered with FIRST. | [optional] 
**address** | **String** | Will be NULL, for future development. | [optional] 
**postalCode** | **String** | Postal code from the team address. | [optional] 
**gmapsPlaceId** | **String** | Will be NULL, for future development. | [optional] 
**gmapsUrl** | **String** | Will be NULL, for future development. | [optional] 
**lat** | **Number** | Will be NULL, for future development. | [optional] 
**lng** | **Number** | Will be NULL, for future development. | [optional] 
**locationName** | **String** | Will be NULL, for future development. | [optional] 
**website** | **String** | Official website associated with the team. | [optional] 
**rookieYear** | **Number** | First year the team officially competed. | 
**motto** | **String** | Team&#39;s motto as provided by FIRST. | [optional] 
**homeChampionship** | **Object** | Location of the team&#39;s home championship each year as a key-value pair. The year (as a string) is the key, and the city is the value. | [optional] 



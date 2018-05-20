# TbaApiV3client.EventSimple

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event. | 
**name** | **String** | Official name of event on record either provided by FIRST or organizers of offseason event. | 
**eventCode** | **String** | Event short code, as provided by FIRST. | 
**eventType** | **Number** | Event Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/event_type.py#L2 | 
**district** | [**DistrictList**](DistrictList.md) | The district this event is in, may be null. | [optional] 
**city** | **String** | City, town, village, etc. the event is located in. | [optional] 
**stateProv** | **String** | State or Province the event is located in. | [optional] 
**country** | **String** | Country the event is located in. | [optional] 
**startDate** | **Date** | Event start date in &#x60;yyyy-mm-dd&#x60; format. | 
**endDate** | **Date** | Event end date in &#x60;yyyy-mm-dd&#x60; format. | 
**year** | **Number** | Year the event data is for. | 



# TbaApiV3client.Award

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the award as provided by FIRST. May vary for the same award type. | 
**awardType** | **Number** | Type of award given. See https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/award_type.py#L6 | 
**eventKey** | **String** | The event_key of the event the award was won at. | 
**recipientList** | [**[AwardRecipient]**](AwardRecipient.md) | A list of recipients of the award at the event. Either team_key and/or awardee for individual awards. | 
**year** | **Number** | The year this award was won. | 



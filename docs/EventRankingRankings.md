# TbaApiV3client.EventRankingRankings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matchesPlayed** | **Number** | Number of matches played by this team. | 
**qualAverage** | **Number** | The average match score during qualifications. Year specific. May be null if not relevant for a given year. | [optional] 
**extraStats** | **[Number]** | Additional special data on the team&#39;s performance calculated by TBA. | [optional] 
**sortOrders** | **[Number]** | Additional year-specific information, may be null. See parent &#x60;sort_order_info&#x60; for details. | [optional] 
**record** | [**WLTRecord**](WLTRecord.md) |  | 
**rank** | **Number** | The team&#39;s rank at the event as provided by FIRST. | 
**dq** | **Number** | Number of times disqualified. | 
**teamKey** | **String** | The team with this rank. | 



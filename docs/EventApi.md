# TbaApiV3client.EventApi

All URIs are relative to *https://www.thebluealliance.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDistrictEvents**](EventApi.md#getDistrictEvents) | **GET** /district/{district_key}/events | 
[**getDistrictEventsKeys**](EventApi.md#getDistrictEventsKeys) | **GET** /district/{district_key}/events/keys | 
[**getDistrictEventsSimple**](EventApi.md#getDistrictEventsSimple) | **GET** /district/{district_key}/events/simple | 
[**getEvent**](EventApi.md#getEvent) | **GET** /event/{event_key} | 
[**getEventAlliances**](EventApi.md#getEventAlliances) | **GET** /event/{event_key}/alliances | 
[**getEventAwards**](EventApi.md#getEventAwards) | **GET** /event/{event_key}/awards | 
[**getEventDistrictPoints**](EventApi.md#getEventDistrictPoints) | **GET** /event/{event_key}/district_points | 
[**getEventInsights**](EventApi.md#getEventInsights) | **GET** /event/{event_key}/insights | 
[**getEventMatchTimeseries**](EventApi.md#getEventMatchTimeseries) | **GET** /event/{event_key}/matches/timeseries | 
[**getEventMatches**](EventApi.md#getEventMatches) | **GET** /event/{event_key}/matches | 
[**getEventMatchesKeys**](EventApi.md#getEventMatchesKeys) | **GET** /event/{event_key}/matches/keys | 
[**getEventMatchesSimple**](EventApi.md#getEventMatchesSimple) | **GET** /event/{event_key}/matches/simple | 
[**getEventOPRs**](EventApi.md#getEventOPRs) | **GET** /event/{event_key}/oprs | 
[**getEventPredictions**](EventApi.md#getEventPredictions) | **GET** /event/{event_key}/predictions | 
[**getEventRankings**](EventApi.md#getEventRankings) | **GET** /event/{event_key}/rankings | 
[**getEventSimple**](EventApi.md#getEventSimple) | **GET** /event/{event_key}/simple | 
[**getEventTeams**](EventApi.md#getEventTeams) | **GET** /event/{event_key}/teams | 
[**getEventTeamsKeys**](EventApi.md#getEventTeamsKeys) | **GET** /event/{event_key}/teams/keys | 
[**getEventTeamsSimple**](EventApi.md#getEventTeamsSimple) | **GET** /event/{event_key}/teams/simple | 
[**getEventTeamsStatuses**](EventApi.md#getEventTeamsStatuses) | **GET** /event/{event_key}/teams/statuses | 
[**getEventsByYear**](EventApi.md#getEventsByYear) | **GET** /events/{year} | 
[**getEventsByYearKeys**](EventApi.md#getEventsByYearKeys) | **GET** /events/{year}/keys | 
[**getEventsByYearSimple**](EventApi.md#getEventsByYearSimple) | **GET** /events/{year}/simple | 
[**getTeamEventAwards**](EventApi.md#getTeamEventAwards) | **GET** /team/{team_key}/event/{event_key}/awards | 
[**getTeamEventMatches**](EventApi.md#getTeamEventMatches) | **GET** /team/{team_key}/event/{event_key}/matches | 
[**getTeamEventMatchesKeys**](EventApi.md#getTeamEventMatchesKeys) | **GET** /team/{team_key}/event/{event_key}/matches/keys | 
[**getTeamEventMatchesSimple**](EventApi.md#getTeamEventMatchesSimple) | **GET** /team/{team_key}/event/{event_key}/matches/simple | 
[**getTeamEventStatus**](EventApi.md#getTeamEventStatus) | **GET** /team/{team_key}/event/{event_key}/status | 
[**getTeamEvents**](EventApi.md#getTeamEvents) | **GET** /team/{team_key}/events | 
[**getTeamEventsByYear**](EventApi.md#getTeamEventsByYear) | **GET** /team/{team_key}/events/{year} | 
[**getTeamEventsByYearKeys**](EventApi.md#getTeamEventsByYearKeys) | **GET** /team/{team_key}/events/{year}/keys | 
[**getTeamEventsByYearSimple**](EventApi.md#getTeamEventsByYearSimple) | **GET** /team/{team_key}/events/{year}/simple | 
[**getTeamEventsKeys**](EventApi.md#getTeamEventsKeys) | **GET** /team/{team_key}/events/keys | 
[**getTeamEventsSimple**](EventApi.md#getTeamEventsSimple) | **GET** /team/{team_key}/events/simple | 
[**getTeamEventsStatusesByYear**](EventApi.md#getTeamEventsStatusesByYear) | **GET** /team/{team_key}/events/{year}/statuses | 



## getDistrictEvents

> [Event] getDistrictEvents()



Gets a list of events in the given district.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getDistrictEvents((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Event]**](Event.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDistrictEventsKeys

> [String] getDistrictEventsKeys()



Gets a list of event keys for events in the given district.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getDistrictEventsKeys((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDistrictEventsSimple

> [EventSimple] getDistrictEventsSimple(districtKey)



Gets a short-form list of events in the given district.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
let districtKey = "districtKey_example"; // String | TBA District Key, eg `2016fim`
apiInstance.getDistrictEventsSimple(districtKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **districtKey** | **String**| TBA District Key, eg &#x60;2016fim&#x60; | 

### Return type

[**[EventSimple]**](EventSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEvent

> Event getEvent()



Gets an Event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEvent((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Event**](Event.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventAlliances

> [EliminationAlliance] getEventAlliances()



Gets a list of Elimination Alliances for the given Event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventAlliances((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[EliminationAlliance]**](EliminationAlliance.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventAwards

> [Award] getEventAwards()



Gets a list of awards from the given event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventAwards((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Award]**](Award.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventDistrictPoints

> EventDistrictPoints getEventDistrictPoints()



Gets a list of team rankings for the Event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventDistrictPoints((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EventDistrictPoints**](EventDistrictPoints.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventInsights

> EventInsights getEventInsights()



Gets a set of Event-specific insights for the given Event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventInsights((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EventInsights**](EventInsights.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventMatchTimeseries

> [String] getEventMatchTimeseries()



Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data. *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up. *WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventMatchTimeseries((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventMatches

> [Match] getEventMatches()



Gets a list of matches for the given event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventMatches((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Match]**](Match.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventMatchesKeys

> [String] getEventMatchesKeys()



Gets a list of match keys for the given event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventMatchesKeys((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventMatchesSimple

> [MatchSimple] getEventMatchesSimple()



Gets a short-form list of matches for the given event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventMatchesSimple((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[MatchSimple]**](MatchSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventOPRs

> EventOPRs getEventOPRs()



Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventOPRs((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EventOPRs**](EventOPRs.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventPredictions

> Object getEventPredictions()



Gets information on TBA-generated predictions for the given Event. Contains year-specific information. *WARNING* This endpoint is currently under development and may change at any time.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventPredictions((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventRankings

> EventRanking getEventRankings()



Gets a list of team rankings for the Event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventRankings((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EventRanking**](EventRanking.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventSimple

> EventSimple getEventSimple()



Gets a short-form Event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventSimple((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EventSimple**](EventSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventTeams

> [Team] getEventTeams()



Gets a list of &#x60;Team&#x60; objects that competed in the given event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventTeams((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Team]**](Team.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventTeamsKeys

> [String] getEventTeamsKeys()



Gets a list of &#x60;Team&#x60; keys that competed in the given event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventTeamsKeys((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventTeamsSimple

> [TeamSimple] getEventTeamsSimple()



Gets a short-form list of &#x60;Team&#x60; objects that competed in the given event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventTeamsSimple((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[TeamSimple]**](TeamSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventTeamsStatuses

> {String: TeamEventStatus} getEventTeamsStatuses()



Gets a key-value list of the event statuses for teams competing at the given event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventTeamsStatuses((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**{String: TeamEventStatus}**](TeamEventStatus.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventsByYear

> [Event] getEventsByYear()



Gets a list of events in the given year.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventsByYear((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Event]**](Event.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventsByYearKeys

> [String] getEventsByYearKeys()



Gets a list of event keys in the given year.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventsByYearKeys((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEventsByYearSimple

> [EventSimple] getEventsByYearSimple()



Gets a short-form list of events in the given year.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getEventsByYearSimple((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[EventSimple]**](EventSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamEventAwards

> [Award] getTeamEventAwards()



Gets a list of awards the given team won at the given event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getTeamEventAwards((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Award]**](Award.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamEventMatches

> [Match] getTeamEventMatches()



Gets a list of matches for the given team and event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getTeamEventMatches((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Match]**](Match.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamEventMatchesKeys

> [String] getTeamEventMatchesKeys()



Gets a list of match keys for matches for the given team and event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getTeamEventMatchesKeys((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamEventMatchesSimple

> [Match] getTeamEventMatchesSimple()



Gets a short-form list of matches for the given team and event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getTeamEventMatchesSimple((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Match]**](Match.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamEventStatus

> TeamEventStatus getTeamEventStatus()



Gets the competition rank and status of the team at the given event.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getTeamEventStatus((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**TeamEventStatus**](TeamEventStatus.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamEvents

> [Event] getTeamEvents()



Gets a list of all events this team has competed at.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getTeamEvents((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Event]**](Event.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamEventsByYear

> [Event] getTeamEventsByYear()



Gets a list of events this team has competed at in the given year.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getTeamEventsByYear((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Event]**](Event.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamEventsByYearKeys

> [String] getTeamEventsByYearKeys()



Gets a list of the event keys for events this team has competed at in the given year.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getTeamEventsByYearKeys((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamEventsByYearSimple

> [EventSimple] getTeamEventsByYearSimple()



Gets a short-form list of events this team has competed at in the given year.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getTeamEventsByYearSimple((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[EventSimple]**](EventSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamEventsKeys

> [String] getTeamEventsKeys()



Gets a list of the event keys for all events this team has competed at.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getTeamEventsKeys((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamEventsSimple

> [EventSimple] getTeamEventsSimple()



Gets a short-form list of all events this team has competed at.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getTeamEventsSimple((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[EventSimple]**](EventSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamEventsStatusesByYear

> {String: TeamEventStatus} getTeamEventsStatusesByYear()



Gets a key-value list of the event statuses for events this team has competed at in the given year.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.EventApi();
apiInstance.getTeamEventsStatusesByYear((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**{String: TeamEventStatus}**](TeamEventStatus.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


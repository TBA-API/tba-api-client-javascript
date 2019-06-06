# TbaApiV3client.DistrictApi

All URIs are relative to *https://www.thebluealliance.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDistrictEvents**](DistrictApi.md#getDistrictEvents) | **GET** /district/{district_key}/events | 
[**getDistrictEventsKeys**](DistrictApi.md#getDistrictEventsKeys) | **GET** /district/{district_key}/events/keys | 
[**getDistrictEventsSimple**](DistrictApi.md#getDistrictEventsSimple) | **GET** /district/{district_key}/events/simple | 
[**getDistrictRankings**](DistrictApi.md#getDistrictRankings) | **GET** /district/{district_key}/rankings | 
[**getDistrictTeams**](DistrictApi.md#getDistrictTeams) | **GET** /district/{district_key}/teams | 
[**getDistrictTeamsKeys**](DistrictApi.md#getDistrictTeamsKeys) | **GET** /district/{district_key}/teams/keys | 
[**getDistrictTeamsSimple**](DistrictApi.md#getDistrictTeamsSimple) | **GET** /district/{district_key}/teams/simple | 
[**getDistrictsByYear**](DistrictApi.md#getDistrictsByYear) | **GET** /districts/{year} | 
[**getEventDistrictPoints**](DistrictApi.md#getEventDistrictPoints) | **GET** /event/{event_key}/district_points | 
[**getTeamDistricts**](DistrictApi.md#getTeamDistricts) | **GET** /team/{team_key}/districts | 



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

let apiInstance = new TbaApiV3client.DistrictApi();
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

let apiInstance = new TbaApiV3client.DistrictApi();
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

let apiInstance = new TbaApiV3client.DistrictApi();
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


## getDistrictRankings

> [DistrictRanking] getDistrictRankings()



Gets a list of team district rankings for the given district.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.DistrictApi();
apiInstance.getDistrictRankings((error, data, response) => {
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

[**[DistrictRanking]**](DistrictRanking.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDistrictTeams

> [Team] getDistrictTeams()



Gets a list of &#x60;Team&#x60; objects that competed in events in the given district.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.DistrictApi();
apiInstance.getDistrictTeams((error, data, response) => {
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


## getDistrictTeamsKeys

> [String] getDistrictTeamsKeys()



Gets a list of &#x60;Team&#x60; objects that competed in events in the given district.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.DistrictApi();
apiInstance.getDistrictTeamsKeys((error, data, response) => {
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


## getDistrictTeamsSimple

> [TeamSimple] getDistrictTeamsSimple()



Gets a short-form list of &#x60;Team&#x60; objects that competed in events in the given district.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.DistrictApi();
apiInstance.getDistrictTeamsSimple((error, data, response) => {
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


## getDistrictsByYear

> [DistrictList] getDistrictsByYear()



Gets a list of districts and their corresponding district key, for the given year.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.DistrictApi();
apiInstance.getDistrictsByYear((error, data, response) => {
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

[**[DistrictList]**](DistrictList.md)

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

let apiInstance = new TbaApiV3client.DistrictApi();
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


## getTeamDistricts

> [DistrictList] getTeamDistricts()



Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.DistrictApi();
apiInstance.getTeamDistricts((error, data, response) => {
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

[**[DistrictList]**](DistrictList.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


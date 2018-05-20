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


<a name="getDistrictEvents"></a>
# **getDistrictEvents**
> [Event] getDistrictEvents(districtKey, opts)



Gets a list of events in the given district.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.DistrictApi();

var districtKey = "districtKey_example"; // String | TBA District Key, eg `2016fim`

var opts = { 
  'ifModifiedSince': "ifModifiedSince_example" // String | Value of the `Last-Modified` header in the most recently cached response by the client.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDistrictEvents(districtKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **districtKey** | **String**| TBA District Key, eg &#x60;2016fim&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDistrictEventsKeys"></a>
# **getDistrictEventsKeys**
> [&#39;String&#39;] getDistrictEventsKeys(districtKey, opts)



Gets a list of event keys for events in the given district.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.DistrictApi();

var districtKey = "districtKey_example"; // String | TBA District Key, eg `2016fim`

var opts = { 
  'ifModifiedSince': "ifModifiedSince_example" // String | Value of the `Last-Modified` header in the most recently cached response by the client.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDistrictEventsKeys(districtKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **districtKey** | **String**| TBA District Key, eg &#x60;2016fim&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDistrictEventsSimple"></a>
# **getDistrictEventsSimple**
> [EventSimple] getDistrictEventsSimple(districtKey, opts)



Gets a short-form list of events in the given district.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.DistrictApi();

var districtKey = "districtKey_example"; // String | TBA District Key, eg `2016fim`

var opts = { 
  'ifModifiedSince': "ifModifiedSince_example" // String | Value of the `Last-Modified` header in the most recently cached response by the client.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDistrictEventsSimple(districtKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **districtKey** | **String**| TBA District Key, eg &#x60;2016fim&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[EventSimple]**](EventSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDistrictRankings"></a>
# **getDistrictRankings**
> [DistrictRanking] getDistrictRankings(districtKey, opts)



Gets a list of team district rankings for the given district.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.DistrictApi();

var districtKey = "districtKey_example"; // String | TBA District Key, eg `2016fim`

var opts = { 
  'ifModifiedSince': "ifModifiedSince_example" // String | Value of the `Last-Modified` header in the most recently cached response by the client.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDistrictRankings(districtKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **districtKey** | **String**| TBA District Key, eg &#x60;2016fim&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[DistrictRanking]**](DistrictRanking.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDistrictTeams"></a>
# **getDistrictTeams**
> [Team] getDistrictTeams(districtKey, opts)



Gets a list of &#x60;Team&#x60; objects that competed in events in the given district.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.DistrictApi();

var districtKey = "districtKey_example"; // String | TBA District Key, eg `2016fim`

var opts = { 
  'ifModifiedSince': "ifModifiedSince_example" // String | Value of the `Last-Modified` header in the most recently cached response by the client.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDistrictTeams(districtKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **districtKey** | **String**| TBA District Key, eg &#x60;2016fim&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Team]**](Team.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDistrictTeamsKeys"></a>
# **getDistrictTeamsKeys**
> [&#39;String&#39;] getDistrictTeamsKeys(districtKey, opts)



Gets a list of &#x60;Team&#x60; objects that competed in events in the given district.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.DistrictApi();

var districtKey = "districtKey_example"; // String | TBA District Key, eg `2016fim`

var opts = { 
  'ifModifiedSince': "ifModifiedSince_example" // String | Value of the `Last-Modified` header in the most recently cached response by the client.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDistrictTeamsKeys(districtKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **districtKey** | **String**| TBA District Key, eg &#x60;2016fim&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDistrictTeamsSimple"></a>
# **getDistrictTeamsSimple**
> [TeamSimple] getDistrictTeamsSimple(districtKey, opts)



Gets a short-form list of &#x60;Team&#x60; objects that competed in events in the given district.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.DistrictApi();

var districtKey = "districtKey_example"; // String | TBA District Key, eg `2016fim`

var opts = { 
  'ifModifiedSince': "ifModifiedSince_example" // String | Value of the `Last-Modified` header in the most recently cached response by the client.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDistrictTeamsSimple(districtKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **districtKey** | **String**| TBA District Key, eg &#x60;2016fim&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[TeamSimple]**](TeamSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDistrictsByYear"></a>
# **getDistrictsByYear**
> [DistrictList] getDistrictsByYear(year, opts)



Gets a list of districts and their corresponding district key, for the given year.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.DistrictApi();

var year = 56; // Number | Competition Year (or Season). Must be 4 digits.

var opts = { 
  'ifModifiedSince': "ifModifiedSince_example" // String | Value of the `Last-Modified` header in the most recently cached response by the client.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDistrictsByYear(year, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[DistrictList]**](DistrictList.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventDistrictPoints"></a>
# **getEventDistrictPoints**
> EventDistrictPoints getEventDistrictPoints(eventKey, opts)



Gets a list of team rankings for the Event.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.DistrictApi();

var eventKey = "eventKey_example"; // String | TBA Event Key, eg `2016nytr`

var opts = { 
  'ifModifiedSince': "ifModifiedSince_example" // String | Value of the `Last-Modified` header in the most recently cached response by the client.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEventDistrictPoints(eventKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventKey** | **String**| TBA Event Key, eg &#x60;2016nytr&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**EventDistrictPoints**](EventDistrictPoints.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamDistricts"></a>
# **getTeamDistricts**
> [DistrictList] getTeamDistricts(teamKey, opts)



Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.DistrictApi();

var teamKey = "teamKey_example"; // String | TBA Team Key, eg `frc254`

var opts = { 
  'ifModifiedSince': "ifModifiedSince_example" // String | Value of the `Last-Modified` header in the most recently cached response by the client.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTeamDistricts(teamKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[DistrictList]**](DistrictList.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


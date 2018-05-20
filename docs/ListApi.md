# TbaApiV3client.ListApi

All URIs are relative to *https://www.thebluealliance.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDistrictEvents**](ListApi.md#getDistrictEvents) | **GET** /district/{district_key}/events | 
[**getDistrictEventsKeys**](ListApi.md#getDistrictEventsKeys) | **GET** /district/{district_key}/events/keys | 
[**getDistrictEventsSimple**](ListApi.md#getDistrictEventsSimple) | **GET** /district/{district_key}/events/simple | 
[**getDistrictRankings**](ListApi.md#getDistrictRankings) | **GET** /district/{district_key}/rankings | 
[**getDistrictTeams**](ListApi.md#getDistrictTeams) | **GET** /district/{district_key}/teams | 
[**getDistrictTeamsKeys**](ListApi.md#getDistrictTeamsKeys) | **GET** /district/{district_key}/teams/keys | 
[**getDistrictTeamsSimple**](ListApi.md#getDistrictTeamsSimple) | **GET** /district/{district_key}/teams/simple | 
[**getEventTeams**](ListApi.md#getEventTeams) | **GET** /event/{event_key}/teams | 
[**getEventTeamsKeys**](ListApi.md#getEventTeamsKeys) | **GET** /event/{event_key}/teams/keys | 
[**getEventTeamsSimple**](ListApi.md#getEventTeamsSimple) | **GET** /event/{event_key}/teams/simple | 
[**getEventTeamsStatuses**](ListApi.md#getEventTeamsStatuses) | **GET** /event/{event_key}/teams/statuses | 
[**getEventsByYear**](ListApi.md#getEventsByYear) | **GET** /events/{year} | 
[**getEventsByYearKeys**](ListApi.md#getEventsByYearKeys) | **GET** /events/{year}/keys | 
[**getEventsByYearSimple**](ListApi.md#getEventsByYearSimple) | **GET** /events/{year}/simple | 
[**getTeamEventsStatusesByYear**](ListApi.md#getTeamEventsStatusesByYear) | **GET** /team/{team_key}/events/{year}/statuses | 
[**getTeams**](ListApi.md#getTeams) | **GET** /teams/{page_num} | 
[**getTeamsByYear**](ListApi.md#getTeamsByYear) | **GET** /teams/{year}/{page_num} | 
[**getTeamsByYearKeys**](ListApi.md#getTeamsByYearKeys) | **GET** /teams/{year}/{page_num}/keys | 
[**getTeamsByYearSimple**](ListApi.md#getTeamsByYearSimple) | **GET** /teams/{year}/{page_num}/simple | 
[**getTeamsKeys**](ListApi.md#getTeamsKeys) | **GET** /teams/{page_num}/keys | 
[**getTeamsSimple**](ListApi.md#getTeamsSimple) | **GET** /teams/{page_num}/simple | 


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

var apiInstance = new TbaApiV3client.ListApi();

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

var apiInstance = new TbaApiV3client.ListApi();

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

var apiInstance = new TbaApiV3client.ListApi();

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

var apiInstance = new TbaApiV3client.ListApi();

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

var apiInstance = new TbaApiV3client.ListApi();

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

var apiInstance = new TbaApiV3client.ListApi();

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

var apiInstance = new TbaApiV3client.ListApi();

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

<a name="getEventTeams"></a>
# **getEventTeams**
> [Team] getEventTeams(eventKey, opts)



Gets a list of &#x60;Team&#x60; objects that competed in the given event.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.ListApi();

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
apiInstance.getEventTeams(eventKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventKey** | **String**| TBA Event Key, eg &#x60;2016nytr&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Team]**](Team.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventTeamsKeys"></a>
# **getEventTeamsKeys**
> [&#39;String&#39;] getEventTeamsKeys(eventKey, opts)



Gets a list of &#x60;Team&#x60; keys that competed in the given event.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.ListApi();

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
apiInstance.getEventTeamsKeys(eventKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventKey** | **String**| TBA Event Key, eg &#x60;2016nytr&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventTeamsSimple"></a>
# **getEventTeamsSimple**
> [TeamSimple] getEventTeamsSimple(eventKey, opts)



Gets a short-form list of &#x60;Team&#x60; objects that competed in the given event.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.ListApi();

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
apiInstance.getEventTeamsSimple(eventKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventKey** | **String**| TBA Event Key, eg &#x60;2016nytr&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[TeamSimple]**](TeamSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventTeamsStatuses"></a>
# **getEventTeamsStatuses**
> {&#39;String&#39;: TeamEventStatus} getEventTeamsStatuses(eventKey, opts)



Gets a key-value list of the event statuses for teams competing at the given event.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.ListApi();

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
apiInstance.getEventTeamsStatuses(eventKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventKey** | **String**| TBA Event Key, eg &#x60;2016nytr&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**{&#39;String&#39;: TeamEventStatus}**](TeamEventStatus.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventsByYear"></a>
# **getEventsByYear**
> [Event] getEventsByYear(year, opts)



Gets a list of events in the given year.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.ListApi();

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
apiInstance.getEventsByYear(year, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventsByYearKeys"></a>
# **getEventsByYearKeys**
> [&#39;String&#39;] getEventsByYearKeys(year, opts)



Gets a list of event keys in the given year.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.ListApi();

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
apiInstance.getEventsByYearKeys(year, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getEventsByYearSimple"></a>
# **getEventsByYearSimple**
> [EventSimple] getEventsByYearSimple(year, opts)



Gets a short-form list of events in the given year.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.ListApi();

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
apiInstance.getEventsByYearSimple(year, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[EventSimple]**](EventSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamEventsStatusesByYear"></a>
# **getTeamEventsStatusesByYear**
> {&#39;String&#39;: TeamEventStatus} getTeamEventsStatusesByYear(teamKeyyear, opts)



Gets a key-value list of the event statuses for events this team has competed at in the given year.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.ListApi();

var teamKey = "teamKey_example"; // String | TBA Team Key, eg `frc254`

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
apiInstance.getTeamEventsStatusesByYear(teamKeyyear, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**{&#39;String&#39;: TeamEventStatus}**](TeamEventStatus.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeams"></a>
# **getTeams**
> [Team] getTeams(pageNum, opts)



Gets a list of &#x60;Team&#x60; objects, paginated in groups of 500.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.ListApi();

var pageNum = 56; // Number | Page number of results to return, zero-indexed

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
apiInstance.getTeams(pageNum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNum** | **Number**| Page number of results to return, zero-indexed | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Team]**](Team.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamsByYear"></a>
# **getTeamsByYear**
> [Team] getTeamsByYear(yearpageNum, opts)



Gets a list of &#x60;Team&#x60; objects that competed in the given year, paginated in groups of 500.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.ListApi();

var year = 56; // Number | Competition Year (or Season). Must be 4 digits.

var pageNum = 56; // Number | Page number of results to return, zero-indexed

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
apiInstance.getTeamsByYear(yearpageNum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **pageNum** | **Number**| Page number of results to return, zero-indexed | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Team]**](Team.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamsByYearKeys"></a>
# **getTeamsByYearKeys**
> [&#39;String&#39;] getTeamsByYearKeys(yearpageNum, opts)



Gets a list Team Keys that competed in the given year, paginated in groups of 500.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.ListApi();

var year = 56; // Number | Competition Year (or Season). Must be 4 digits.

var pageNum = 56; // Number | Page number of results to return, zero-indexed

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
apiInstance.getTeamsByYearKeys(yearpageNum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **pageNum** | **Number**| Page number of results to return, zero-indexed | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamsByYearSimple"></a>
# **getTeamsByYearSimple**
> [TeamSimple] getTeamsByYearSimple(yearpageNum, opts)



Gets a list of short form &#x60;Team_Simple&#x60; objects that competed in the given year, paginated in groups of 500.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.ListApi();

var year = 56; // Number | Competition Year (or Season). Must be 4 digits.

var pageNum = 56; // Number | Page number of results to return, zero-indexed

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
apiInstance.getTeamsByYearSimple(yearpageNum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **pageNum** | **Number**| Page number of results to return, zero-indexed | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[TeamSimple]**](TeamSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamsKeys"></a>
# **getTeamsKeys**
> [&#39;String&#39;] getTeamsKeys(pageNum, opts)



Gets a list of Team keys, paginated in groups of 500. (Note, each page will not have 500 teams, but will include the teams within that range of 500.)

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.ListApi();

var pageNum = 56; // Number | Page number of results to return, zero-indexed

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
apiInstance.getTeamsKeys(pageNum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNum** | **Number**| Page number of results to return, zero-indexed | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamsSimple"></a>
# **getTeamsSimple**
> [TeamSimple] getTeamsSimple(pageNum, opts)



Gets a list of short form &#x60;Team_Simple&#x60; objects, paginated in groups of 500.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.ListApi();

var pageNum = 56; // Number | Page number of results to return, zero-indexed

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
apiInstance.getTeamsSimple(pageNum, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNum** | **Number**| Page number of results to return, zero-indexed | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[TeamSimple]**](TeamSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


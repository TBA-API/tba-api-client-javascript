# TbaApiV3client.TeamApi

All URIs are relative to *https://www.thebluealliance.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDistrictRankings**](TeamApi.md#getDistrictRankings) | **GET** /district/{district_key}/rankings | 
[**getDistrictTeams**](TeamApi.md#getDistrictTeams) | **GET** /district/{district_key}/teams | 
[**getDistrictTeamsKeys**](TeamApi.md#getDistrictTeamsKeys) | **GET** /district/{district_key}/teams/keys | 
[**getDistrictTeamsSimple**](TeamApi.md#getDistrictTeamsSimple) | **GET** /district/{district_key}/teams/simple | 
[**getEventTeams**](TeamApi.md#getEventTeams) | **GET** /event/{event_key}/teams | 
[**getEventTeamsKeys**](TeamApi.md#getEventTeamsKeys) | **GET** /event/{event_key}/teams/keys | 
[**getEventTeamsSimple**](TeamApi.md#getEventTeamsSimple) | **GET** /event/{event_key}/teams/simple | 
[**getEventTeamsStatuses**](TeamApi.md#getEventTeamsStatuses) | **GET** /event/{event_key}/teams/statuses | 
[**getTeam**](TeamApi.md#getTeam) | **GET** /team/{team_key} | 
[**getTeamAwards**](TeamApi.md#getTeamAwards) | **GET** /team/{team_key}/awards | 
[**getTeamAwardsByYear**](TeamApi.md#getTeamAwardsByYear) | **GET** /team/{team_key}/awards/{year} | 
[**getTeamDistricts**](TeamApi.md#getTeamDistricts) | **GET** /team/{team_key}/districts | 
[**getTeamEventAwards**](TeamApi.md#getTeamEventAwards) | **GET** /team/{team_key}/event/{event_key}/awards | 
[**getTeamEventMatches**](TeamApi.md#getTeamEventMatches) | **GET** /team/{team_key}/event/{event_key}/matches | 
[**getTeamEventMatchesKeys**](TeamApi.md#getTeamEventMatchesKeys) | **GET** /team/{team_key}/event/{event_key}/matches/keys | 
[**getTeamEventMatchesSimple**](TeamApi.md#getTeamEventMatchesSimple) | **GET** /team/{team_key}/event/{event_key}/matches/simple | 
[**getTeamEventStatus**](TeamApi.md#getTeamEventStatus) | **GET** /team/{team_key}/event/{event_key}/status | 
[**getTeamEvents**](TeamApi.md#getTeamEvents) | **GET** /team/{team_key}/events | 
[**getTeamEventsByYear**](TeamApi.md#getTeamEventsByYear) | **GET** /team/{team_key}/events/{year} | 
[**getTeamEventsByYearKeys**](TeamApi.md#getTeamEventsByYearKeys) | **GET** /team/{team_key}/events/{year}/keys | 
[**getTeamEventsByYearSimple**](TeamApi.md#getTeamEventsByYearSimple) | **GET** /team/{team_key}/events/{year}/simple | 
[**getTeamEventsKeys**](TeamApi.md#getTeamEventsKeys) | **GET** /team/{team_key}/events/keys | 
[**getTeamEventsSimple**](TeamApi.md#getTeamEventsSimple) | **GET** /team/{team_key}/events/simple | 
[**getTeamEventsStatusesByYear**](TeamApi.md#getTeamEventsStatusesByYear) | **GET** /team/{team_key}/events/{year}/statuses | 
[**getTeamMatchesByYear**](TeamApi.md#getTeamMatchesByYear) | **GET** /team/{team_key}/matches/{year} | 
[**getTeamMatchesByYearKeys**](TeamApi.md#getTeamMatchesByYearKeys) | **GET** /team/{team_key}/matches/{year}/keys | 
[**getTeamMatchesByYearSimple**](TeamApi.md#getTeamMatchesByYearSimple) | **GET** /team/{team_key}/matches/{year}/simple | 
[**getTeamMediaByTag**](TeamApi.md#getTeamMediaByTag) | **GET** /team/{team_key}/media/tag/{media_tag} | 
[**getTeamMediaByTagYear**](TeamApi.md#getTeamMediaByTagYear) | **GET** /team/{team_key}/media/tag/{media_tag}/{year} | 
[**getTeamMediaByYear**](TeamApi.md#getTeamMediaByYear) | **GET** /team/{team_key}/media/{year} | 
[**getTeamRobots**](TeamApi.md#getTeamRobots) | **GET** /team/{team_key}/robots | 
[**getTeamSimple**](TeamApi.md#getTeamSimple) | **GET** /team/{team_key}/simple | 
[**getTeamSocialMedia**](TeamApi.md#getTeamSocialMedia) | **GET** /team/{team_key}/social_media | 
[**getTeamYearsParticipated**](TeamApi.md#getTeamYearsParticipated) | **GET** /team/{team_key}/years_participated | 
[**getTeams**](TeamApi.md#getTeams) | **GET** /teams/{page_num} | 
[**getTeamsByYear**](TeamApi.md#getTeamsByYear) | **GET** /teams/{year}/{page_num} | 
[**getTeamsByYearKeys**](TeamApi.md#getTeamsByYearKeys) | **GET** /teams/{year}/{page_num}/keys | 
[**getTeamsByYearSimple**](TeamApi.md#getTeamsByYearSimple) | **GET** /teams/{year}/{page_num}/simple | 
[**getTeamsKeys**](TeamApi.md#getTeamsKeys) | **GET** /teams/{page_num}/keys | 
[**getTeamsSimple**](TeamApi.md#getTeamsSimple) | **GET** /teams/{page_num}/simple | 


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

var apiInstance = new TbaApiV3client.TeamApi();

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

var apiInstance = new TbaApiV3client.TeamApi();

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

var apiInstance = new TbaApiV3client.TeamApi();

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

var apiInstance = new TbaApiV3client.TeamApi();

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

var apiInstance = new TbaApiV3client.TeamApi();

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

var apiInstance = new TbaApiV3client.TeamApi();

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

var apiInstance = new TbaApiV3client.TeamApi();

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

var apiInstance = new TbaApiV3client.TeamApi();

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

<a name="getTeam"></a>
# **getTeam**
> Team getTeam(teamKey, opts)



Gets a &#x60;Team&#x60; object for the team referenced by the given key.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeam(teamKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**Team**](Team.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamAwards"></a>
# **getTeamAwards**
> [Award] getTeamAwards(teamKey, opts)



Gets a list of awards the given team has won.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamAwards(teamKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Award]**](Award.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamAwardsByYear"></a>
# **getTeamAwardsByYear**
> [Award] getTeamAwardsByYear(teamKeyyear, opts)



Gets a list of awards the given team has won in a given year.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamAwardsByYear(teamKeyyear, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Award]**](Award.md)

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

var apiInstance = new TbaApiV3client.TeamApi();

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

<a name="getTeamEventAwards"></a>
# **getTeamEventAwards**
> [Award] getTeamEventAwards(teamKeyeventKey, opts)



Gets a list of awards the given team won at the given event.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

var teamKey = "teamKey_example"; // String | TBA Team Key, eg `frc254`

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
apiInstance.getTeamEventAwards(teamKeyeventKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **eventKey** | **String**| TBA Event Key, eg &#x60;2016nytr&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Award]**](Award.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamEventMatches"></a>
# **getTeamEventMatches**
> [Match] getTeamEventMatches(teamKeyeventKey, opts)



Gets a list of matches for the given team and event.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

var teamKey = "teamKey_example"; // String | TBA Team Key, eg `frc254`

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
apiInstance.getTeamEventMatches(teamKeyeventKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **eventKey** | **String**| TBA Event Key, eg &#x60;2016nytr&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Match]**](Match.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamEventMatchesKeys"></a>
# **getTeamEventMatchesKeys**
> [&#39;String&#39;] getTeamEventMatchesKeys(teamKeyeventKey, opts)



Gets a list of match keys for matches for the given team and event.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

var teamKey = "teamKey_example"; // String | TBA Team Key, eg `frc254`

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
apiInstance.getTeamEventMatchesKeys(teamKeyeventKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **eventKey** | **String**| TBA Event Key, eg &#x60;2016nytr&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamEventMatchesSimple"></a>
# **getTeamEventMatchesSimple**
> [Match] getTeamEventMatchesSimple(teamKeyeventKey, opts)



Gets a short-form list of matches for the given team and event.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

var teamKey = "teamKey_example"; // String | TBA Team Key, eg `frc254`

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
apiInstance.getTeamEventMatchesSimple(teamKeyeventKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **eventKey** | **String**| TBA Event Key, eg &#x60;2016nytr&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Match]**](Match.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamEventStatus"></a>
# **getTeamEventStatus**
> TeamEventStatus getTeamEventStatus(teamKeyeventKey, opts)



Gets the competition rank and status of the team at the given event.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

var teamKey = "teamKey_example"; // String | TBA Team Key, eg `frc254`

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
apiInstance.getTeamEventStatus(teamKeyeventKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **eventKey** | **String**| TBA Event Key, eg &#x60;2016nytr&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**TeamEventStatus**](TeamEventStatus.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamEvents"></a>
# **getTeamEvents**
> [Event] getTeamEvents(teamKey, opts)



Gets a list of all events this team has competed at.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamEvents(teamKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamEventsByYear"></a>
# **getTeamEventsByYear**
> [Event] getTeamEventsByYear(teamKeyyear, opts)



Gets a list of events this team has competed at in the given year.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamEventsByYear(teamKeyyear, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamEventsByYearKeys"></a>
# **getTeamEventsByYearKeys**
> [&#39;String&#39;] getTeamEventsByYearKeys(teamKeyyear, opts)



Gets a list of the event keys for events this team has competed at in the given year.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamEventsByYearKeys(teamKeyyear, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamEventsByYearSimple"></a>
# **getTeamEventsByYearSimple**
> [EventSimple] getTeamEventsByYearSimple(teamKeyyear, opts)



Gets a short-form list of events this team has competed at in the given year.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamEventsByYearSimple(teamKeyyear, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[EventSimple]**](EventSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamEventsKeys"></a>
# **getTeamEventsKeys**
> [&#39;String&#39;] getTeamEventsKeys(teamKey, opts)



Gets a list of the event keys for all events this team has competed at.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamEventsKeys(teamKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamEventsSimple"></a>
# **getTeamEventsSimple**
> [EventSimple] getTeamEventsSimple(teamKey, opts)



Gets a short-form list of all events this team has competed at.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamEventsSimple(teamKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
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

var apiInstance = new TbaApiV3client.TeamApi();

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

<a name="getTeamMatchesByYear"></a>
# **getTeamMatchesByYear**
> [Match] getTeamMatchesByYear(teamKeyyear, opts)



Gets a list of matches for the given team and year.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamMatchesByYear(teamKeyyear, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Match]**](Match.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamMatchesByYearKeys"></a>
# **getTeamMatchesByYearKeys**
> [&#39;String&#39;] getTeamMatchesByYearKeys(teamKeyyear, opts)



Gets a list of match keys for matches for the given team and year.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamMatchesByYearKeys(teamKeyyear, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamMatchesByYearSimple"></a>
# **getTeamMatchesByYearSimple**
> [MatchSimple] getTeamMatchesByYearSimple(teamKeyyear, opts)



Gets a short-form list of matches for the given team and year.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamMatchesByYearSimple(teamKeyyear, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[MatchSimple]**](MatchSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamMediaByTag"></a>
# **getTeamMediaByTag**
> [Media] getTeamMediaByTag(teamKeymediaTag, , opts)



Gets a list of Media (videos / pictures) for the given team and tag.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

var teamKey = "teamKey_example"; // String | TBA Team Key, eg `frc254`

var mediaTag = "mediaTag_example"; // String | Media Tag which describes the Media.

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
apiInstance.getTeamMediaByTag(teamKeymediaTag, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **mediaTag** | **String**| Media Tag which describes the Media. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Media]**](Media.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamMediaByTagYear"></a>
# **getTeamMediaByTagYear**
> [Media] getTeamMediaByTagYear(teamKeymediaTag, year, opts)



Gets a list of Media (videos / pictures) for the given team, tag and year.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

var teamKey = "teamKey_example"; // String | TBA Team Key, eg `frc254`

var mediaTag = "mediaTag_example"; // String | Media Tag which describes the Media.

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
apiInstance.getTeamMediaByTagYear(teamKeymediaTag, year, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **mediaTag** | **String**| Media Tag which describes the Media. | 
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Media]**](Media.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamMediaByYear"></a>
# **getTeamMediaByYear**
> [Media] getTeamMediaByYear(teamKeyyear, opts)



Gets a list of Media (videos / pictures) for the given team and year.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamMediaByYear(teamKeyyear, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **year** | **Number**| Competition Year (or Season). Must be 4 digits. | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Media]**](Media.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamRobots"></a>
# **getTeamRobots**
> [TeamRobot] getTeamRobots(teamKey, opts)



Gets a list of year and robot name pairs for each year that a robot name was provided. Will return an empty array if the team has never named a robot.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamRobots(teamKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[TeamRobot]**](TeamRobot.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamSimple"></a>
# **getTeamSimple**
> TeamSimple getTeamSimple(teamKey, opts)



Gets a &#x60;Team_Simple&#x60; object for the team referenced by the given key.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamSimple(teamKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**TeamSimple**](TeamSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamSocialMedia"></a>
# **getTeamSocialMedia**
> [Media] getTeamSocialMedia(teamKey, opts)



Gets a list of Media (social media) for the given team.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamSocialMedia(teamKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

[**[Media]**](Media.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTeamYearsParticipated"></a>
# **getTeamYearsParticipated**
> [&#39;Number&#39;] getTeamYearsParticipated(teamKey, opts)



Gets a list of years in which the team participated in at least one competition.

### Example
```javascript
var TbaApiV3client = require('tba-api-v3client');
var defaultClient = TbaApiV3client.ApiClient.instance;

// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

var apiInstance = new TbaApiV3client.TeamApi();

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
apiInstance.getTeamYearsParticipated(teamKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamKey** | **String**| TBA Team Key, eg &#x60;frc254&#x60; | 
 **ifModifiedSince** | **String**| Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client. | [optional] 

### Return type

**[&#39;Number&#39;]**

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

var apiInstance = new TbaApiV3client.TeamApi();

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

var apiInstance = new TbaApiV3client.TeamApi();

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

var apiInstance = new TbaApiV3client.TeamApi();

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

var apiInstance = new TbaApiV3client.TeamApi();

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

var apiInstance = new TbaApiV3client.TeamApi();

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

var apiInstance = new TbaApiV3client.TeamApi();

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


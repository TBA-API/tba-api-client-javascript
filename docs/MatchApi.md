# TbaApiV3client.MatchApi

All URIs are relative to *https://www.thebluealliance.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEventMatchTimeseries**](MatchApi.md#getEventMatchTimeseries) | **GET** /event/{event_key}/matches/timeseries | 
[**getEventMatches**](MatchApi.md#getEventMatches) | **GET** /event/{event_key}/matches | 
[**getEventMatchesKeys**](MatchApi.md#getEventMatchesKeys) | **GET** /event/{event_key}/matches/keys | 
[**getEventMatchesSimple**](MatchApi.md#getEventMatchesSimple) | **GET** /event/{event_key}/matches/simple | 
[**getMatch**](MatchApi.md#getMatch) | **GET** /match/{match_key} | 
[**getMatchSimple**](MatchApi.md#getMatchSimple) | **GET** /match/{match_key}/simple | 
[**getMatchTimeseries**](MatchApi.md#getMatchTimeseries) | **GET** /match/{match_key}/timeseries | 
[**getTeamEventMatches**](MatchApi.md#getTeamEventMatches) | **GET** /team/{team_key}/event/{event_key}/matches | 
[**getTeamEventMatchesKeys**](MatchApi.md#getTeamEventMatchesKeys) | **GET** /team/{team_key}/event/{event_key}/matches/keys | 
[**getTeamEventMatchesSimple**](MatchApi.md#getTeamEventMatchesSimple) | **GET** /team/{team_key}/event/{event_key}/matches/simple | 
[**getTeamMatchesByYear**](MatchApi.md#getTeamMatchesByYear) | **GET** /team/{team_key}/matches/{year} | 
[**getTeamMatchesByYearKeys**](MatchApi.md#getTeamMatchesByYearKeys) | **GET** /team/{team_key}/matches/{year}/keys | 
[**getTeamMatchesByYearSimple**](MatchApi.md#getTeamMatchesByYearSimple) | **GET** /team/{team_key}/matches/{year}/simple | 



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

let apiInstance = new TbaApiV3client.MatchApi();
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

let apiInstance = new TbaApiV3client.MatchApi();
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

let apiInstance = new TbaApiV3client.MatchApi();
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

let apiInstance = new TbaApiV3client.MatchApi();
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


## getMatch

> Match getMatch()



Gets a &#x60;Match&#x60; object for the given match key.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.MatchApi();
apiInstance.getMatch((error, data, response) => {
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

[**Match**](Match.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMatchSimple

> MatchSimple getMatchSimple()



Gets a short-form &#x60;Match&#x60; object for the given match key.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.MatchApi();
apiInstance.getMatchSimple((error, data, response) => {
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

[**MatchSimple**](MatchSimple.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMatchTimeseries

> [Object] getMatchTimeseries()



Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available. *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up. *WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.MatchApi();
apiInstance.getMatchTimeseries((error, data, response) => {
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

**[Object]**

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

let apiInstance = new TbaApiV3client.MatchApi();
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

let apiInstance = new TbaApiV3client.MatchApi();
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

let apiInstance = new TbaApiV3client.MatchApi();
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


## getTeamMatchesByYear

> [Match] getTeamMatchesByYear()



Gets a list of matches for the given team and year.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.MatchApi();
apiInstance.getTeamMatchesByYear((error, data, response) => {
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


## getTeamMatchesByYearKeys

> [String] getTeamMatchesByYearKeys()



Gets a list of match keys for matches for the given team and year.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.MatchApi();
apiInstance.getTeamMatchesByYearKeys((error, data, response) => {
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


## getTeamMatchesByYearSimple

> [MatchSimple] getTeamMatchesByYearSimple()



Gets a short-form list of matches for the given team and year.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.MatchApi();
apiInstance.getTeamMatchesByYearSimple((error, data, response) => {
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


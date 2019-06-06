# TbaApiV3client.TBAApi

All URIs are relative to *https://www.thebluealliance.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatus**](TBAApi.md#getStatus) | **GET** /status | 



## getStatus

> APIStatus getStatus()



Returns API status, and TBA status information.

### Example

```javascript
import TbaApiV3client from 'tba-api-v3client';
let defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
let apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix = 'Token';

let apiInstance = new TbaApiV3client.TBAApi();
apiInstance.getStatus((error, data, response) => {
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

[**APIStatus**](APIStatus.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


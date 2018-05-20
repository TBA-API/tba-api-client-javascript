# TbaApiV3client.Webcast

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of webcast, typically descriptive of the streaming provider. | 
**channel** | **String** | Type specific channel information. May be the YouTube stream, or Twitch channel name. In the case of iframe types, contains HTML to embed the stream in an HTML iframe. | 
**file** | **String** | File identification as may be required for some types. May be null. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `youtube` (value: `"youtube"`)

* `twitch` (value: `"twitch"`)

* `ustream` (value: `"ustream"`)

* `iframe` (value: `"iframe"`)

* `html5` (value: `"html5"`)

* `rtmp` (value: `"rtmp"`)

* `livestream` (value: `"livestream"`)





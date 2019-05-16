# tba-api-v3client

TbaApiV3client - JavaScript client for tba-api-v3client
# Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 3.04.1
- Package version: 3.04.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install tba-api-v3client --save
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TbaApiV3client = require('tba-api-v3client');

var defaultClient = TbaApiV3client.ApiClient.instance;
// Configure API key authorization: apiKey
var apiKey = defaultClient.authentications['apiKey'];
apiKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['X-TBA-Auth-Key'] = "Token"

var api = new TbaApiV3client.DistrictApi()
var districtKey = "districtKey_example"; // {String} TBA District Key, eg `2016fim`
var opts = {
  'ifModifiedSince': "ifModifiedSince_example" // {String} Value of the `Last-Modified` header in the most recently cached response by the client.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getDistrictEvents(districtKey, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://www.thebluealliance.com/api/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TbaApiV3client.DistrictApi* | [**getDistrictEvents**](docs/DistrictApi.md#getDistrictEvents) | **GET** /district/{district_key}/events | 
*TbaApiV3client.DistrictApi* | [**getDistrictEventsKeys**](docs/DistrictApi.md#getDistrictEventsKeys) | **GET** /district/{district_key}/events/keys | 
*TbaApiV3client.DistrictApi* | [**getDistrictEventsSimple**](docs/DistrictApi.md#getDistrictEventsSimple) | **GET** /district/{district_key}/events/simple | 
*TbaApiV3client.DistrictApi* | [**getDistrictRankings**](docs/DistrictApi.md#getDistrictRankings) | **GET** /district/{district_key}/rankings | 
*TbaApiV3client.DistrictApi* | [**getDistrictTeams**](docs/DistrictApi.md#getDistrictTeams) | **GET** /district/{district_key}/teams | 
*TbaApiV3client.DistrictApi* | [**getDistrictTeamsKeys**](docs/DistrictApi.md#getDistrictTeamsKeys) | **GET** /district/{district_key}/teams/keys | 
*TbaApiV3client.DistrictApi* | [**getDistrictTeamsSimple**](docs/DistrictApi.md#getDistrictTeamsSimple) | **GET** /district/{district_key}/teams/simple | 
*TbaApiV3client.DistrictApi* | [**getDistrictsByYear**](docs/DistrictApi.md#getDistrictsByYear) | **GET** /districts/{year} | 
*TbaApiV3client.DistrictApi* | [**getEventDistrictPoints**](docs/DistrictApi.md#getEventDistrictPoints) | **GET** /event/{event_key}/district_points | 
*TbaApiV3client.DistrictApi* | [**getTeamDistricts**](docs/DistrictApi.md#getTeamDistricts) | **GET** /team/{team_key}/districts | 
*TbaApiV3client.EventApi* | [**getDistrictEvents**](docs/EventApi.md#getDistrictEvents) | **GET** /district/{district_key}/events | 
*TbaApiV3client.EventApi* | [**getDistrictEventsKeys**](docs/EventApi.md#getDistrictEventsKeys) | **GET** /district/{district_key}/events/keys | 
*TbaApiV3client.EventApi* | [**getDistrictEventsSimple**](docs/EventApi.md#getDistrictEventsSimple) | **GET** /district/{district_key}/events/simple | 
*TbaApiV3client.EventApi* | [**getEvent**](docs/EventApi.md#getEvent) | **GET** /event/{event_key} | 
*TbaApiV3client.EventApi* | [**getEventAlliances**](docs/EventApi.md#getEventAlliances) | **GET** /event/{event_key}/alliances | 
*TbaApiV3client.EventApi* | [**getEventAwards**](docs/EventApi.md#getEventAwards) | **GET** /event/{event_key}/awards | 
*TbaApiV3client.EventApi* | [**getEventDistrictPoints**](docs/EventApi.md#getEventDistrictPoints) | **GET** /event/{event_key}/district_points | 
*TbaApiV3client.EventApi* | [**getEventInsights**](docs/EventApi.md#getEventInsights) | **GET** /event/{event_key}/insights | 
*TbaApiV3client.EventApi* | [**getEventMatchTimeseries**](docs/EventApi.md#getEventMatchTimeseries) | **GET** /event/{event_key}/matches/timeseries | 
*TbaApiV3client.EventApi* | [**getEventMatches**](docs/EventApi.md#getEventMatches) | **GET** /event/{event_key}/matches | 
*TbaApiV3client.EventApi* | [**getEventMatchesKeys**](docs/EventApi.md#getEventMatchesKeys) | **GET** /event/{event_key}/matches/keys | 
*TbaApiV3client.EventApi* | [**getEventMatchesSimple**](docs/EventApi.md#getEventMatchesSimple) | **GET** /event/{event_key}/matches/simple | 
*TbaApiV3client.EventApi* | [**getEventOPRs**](docs/EventApi.md#getEventOPRs) | **GET** /event/{event_key}/oprs | 
*TbaApiV3client.EventApi* | [**getEventPredictions**](docs/EventApi.md#getEventPredictions) | **GET** /event/{event_key}/predictions | 
*TbaApiV3client.EventApi* | [**getEventRankings**](docs/EventApi.md#getEventRankings) | **GET** /event/{event_key}/rankings | 
*TbaApiV3client.EventApi* | [**getEventSimple**](docs/EventApi.md#getEventSimple) | **GET** /event/{event_key}/simple | 
*TbaApiV3client.EventApi* | [**getEventTeams**](docs/EventApi.md#getEventTeams) | **GET** /event/{event_key}/teams | 
*TbaApiV3client.EventApi* | [**getEventTeamsKeys**](docs/EventApi.md#getEventTeamsKeys) | **GET** /event/{event_key}/teams/keys | 
*TbaApiV3client.EventApi* | [**getEventTeamsSimple**](docs/EventApi.md#getEventTeamsSimple) | **GET** /event/{event_key}/teams/simple | 
*TbaApiV3client.EventApi* | [**getEventTeamsStatuses**](docs/EventApi.md#getEventTeamsStatuses) | **GET** /event/{event_key}/teams/statuses | 
*TbaApiV3client.EventApi* | [**getEventsByYear**](docs/EventApi.md#getEventsByYear) | **GET** /events/{year} | 
*TbaApiV3client.EventApi* | [**getEventsByYearKeys**](docs/EventApi.md#getEventsByYearKeys) | **GET** /events/{year}/keys | 
*TbaApiV3client.EventApi* | [**getEventsByYearSimple**](docs/EventApi.md#getEventsByYearSimple) | **GET** /events/{year}/simple | 
*TbaApiV3client.EventApi* | [**getTeamEventAwards**](docs/EventApi.md#getTeamEventAwards) | **GET** /team/{team_key}/event/{event_key}/awards | 
*TbaApiV3client.EventApi* | [**getTeamEventMatches**](docs/EventApi.md#getTeamEventMatches) | **GET** /team/{team_key}/event/{event_key}/matches | 
*TbaApiV3client.EventApi* | [**getTeamEventMatchesKeys**](docs/EventApi.md#getTeamEventMatchesKeys) | **GET** /team/{team_key}/event/{event_key}/matches/keys | 
*TbaApiV3client.EventApi* | [**getTeamEventMatchesSimple**](docs/EventApi.md#getTeamEventMatchesSimple) | **GET** /team/{team_key}/event/{event_key}/matches/simple | 
*TbaApiV3client.EventApi* | [**getTeamEventStatus**](docs/EventApi.md#getTeamEventStatus) | **GET** /team/{team_key}/event/{event_key}/status | 
*TbaApiV3client.EventApi* | [**getTeamEvents**](docs/EventApi.md#getTeamEvents) | **GET** /team/{team_key}/events | 
*TbaApiV3client.EventApi* | [**getTeamEventsByYear**](docs/EventApi.md#getTeamEventsByYear) | **GET** /team/{team_key}/events/{year} | 
*TbaApiV3client.EventApi* | [**getTeamEventsByYearKeys**](docs/EventApi.md#getTeamEventsByYearKeys) | **GET** /team/{team_key}/events/{year}/keys | 
*TbaApiV3client.EventApi* | [**getTeamEventsByYearSimple**](docs/EventApi.md#getTeamEventsByYearSimple) | **GET** /team/{team_key}/events/{year}/simple | 
*TbaApiV3client.EventApi* | [**getTeamEventsKeys**](docs/EventApi.md#getTeamEventsKeys) | **GET** /team/{team_key}/events/keys | 
*TbaApiV3client.EventApi* | [**getTeamEventsSimple**](docs/EventApi.md#getTeamEventsSimple) | **GET** /team/{team_key}/events/simple | 
*TbaApiV3client.EventApi* | [**getTeamEventsStatusesByYear**](docs/EventApi.md#getTeamEventsStatusesByYear) | **GET** /team/{team_key}/events/{year}/statuses | 
*TbaApiV3client.ListApi* | [**getDistrictEvents**](docs/ListApi.md#getDistrictEvents) | **GET** /district/{district_key}/events | 
*TbaApiV3client.ListApi* | [**getDistrictEventsKeys**](docs/ListApi.md#getDistrictEventsKeys) | **GET** /district/{district_key}/events/keys | 
*TbaApiV3client.ListApi* | [**getDistrictEventsSimple**](docs/ListApi.md#getDistrictEventsSimple) | **GET** /district/{district_key}/events/simple | 
*TbaApiV3client.ListApi* | [**getDistrictRankings**](docs/ListApi.md#getDistrictRankings) | **GET** /district/{district_key}/rankings | 
*TbaApiV3client.ListApi* | [**getDistrictTeams**](docs/ListApi.md#getDistrictTeams) | **GET** /district/{district_key}/teams | 
*TbaApiV3client.ListApi* | [**getDistrictTeamsKeys**](docs/ListApi.md#getDistrictTeamsKeys) | **GET** /district/{district_key}/teams/keys | 
*TbaApiV3client.ListApi* | [**getDistrictTeamsSimple**](docs/ListApi.md#getDistrictTeamsSimple) | **GET** /district/{district_key}/teams/simple | 
*TbaApiV3client.ListApi* | [**getEventTeams**](docs/ListApi.md#getEventTeams) | **GET** /event/{event_key}/teams | 
*TbaApiV3client.ListApi* | [**getEventTeamsKeys**](docs/ListApi.md#getEventTeamsKeys) | **GET** /event/{event_key}/teams/keys | 
*TbaApiV3client.ListApi* | [**getEventTeamsSimple**](docs/ListApi.md#getEventTeamsSimple) | **GET** /event/{event_key}/teams/simple | 
*TbaApiV3client.ListApi* | [**getEventTeamsStatuses**](docs/ListApi.md#getEventTeamsStatuses) | **GET** /event/{event_key}/teams/statuses | 
*TbaApiV3client.ListApi* | [**getEventsByYear**](docs/ListApi.md#getEventsByYear) | **GET** /events/{year} | 
*TbaApiV3client.ListApi* | [**getEventsByYearKeys**](docs/ListApi.md#getEventsByYearKeys) | **GET** /events/{year}/keys | 
*TbaApiV3client.ListApi* | [**getEventsByYearSimple**](docs/ListApi.md#getEventsByYearSimple) | **GET** /events/{year}/simple | 
*TbaApiV3client.ListApi* | [**getTeamEventsStatusesByYear**](docs/ListApi.md#getTeamEventsStatusesByYear) | **GET** /team/{team_key}/events/{year}/statuses | 
*TbaApiV3client.ListApi* | [**getTeams**](docs/ListApi.md#getTeams) | **GET** /teams/{page_num} | 
*TbaApiV3client.ListApi* | [**getTeamsByYear**](docs/ListApi.md#getTeamsByYear) | **GET** /teams/{year}/{page_num} | 
*TbaApiV3client.ListApi* | [**getTeamsByYearKeys**](docs/ListApi.md#getTeamsByYearKeys) | **GET** /teams/{year}/{page_num}/keys | 
*TbaApiV3client.ListApi* | [**getTeamsByYearSimple**](docs/ListApi.md#getTeamsByYearSimple) | **GET** /teams/{year}/{page_num}/simple | 
*TbaApiV3client.ListApi* | [**getTeamsKeys**](docs/ListApi.md#getTeamsKeys) | **GET** /teams/{page_num}/keys | 
*TbaApiV3client.ListApi* | [**getTeamsSimple**](docs/ListApi.md#getTeamsSimple) | **GET** /teams/{page_num}/simple | 
*TbaApiV3client.MatchApi* | [**getEventMatchTimeseries**](docs/MatchApi.md#getEventMatchTimeseries) | **GET** /event/{event_key}/matches/timeseries | 
*TbaApiV3client.MatchApi* | [**getEventMatches**](docs/MatchApi.md#getEventMatches) | **GET** /event/{event_key}/matches | 
*TbaApiV3client.MatchApi* | [**getEventMatchesKeys**](docs/MatchApi.md#getEventMatchesKeys) | **GET** /event/{event_key}/matches/keys | 
*TbaApiV3client.MatchApi* | [**getEventMatchesSimple**](docs/MatchApi.md#getEventMatchesSimple) | **GET** /event/{event_key}/matches/simple | 
*TbaApiV3client.MatchApi* | [**getMatch**](docs/MatchApi.md#getMatch) | **GET** /match/{match_key} | 
*TbaApiV3client.MatchApi* | [**getMatchSimple**](docs/MatchApi.md#getMatchSimple) | **GET** /match/{match_key}/simple | 
*TbaApiV3client.MatchApi* | [**getMatchTimeseries**](docs/MatchApi.md#getMatchTimeseries) | **GET** /match/{match_key}/timeseries | 
*TbaApiV3client.MatchApi* | [**getTeamEventMatches**](docs/MatchApi.md#getTeamEventMatches) | **GET** /team/{team_key}/event/{event_key}/matches | 
*TbaApiV3client.MatchApi* | [**getTeamEventMatchesKeys**](docs/MatchApi.md#getTeamEventMatchesKeys) | **GET** /team/{team_key}/event/{event_key}/matches/keys | 
*TbaApiV3client.MatchApi* | [**getTeamEventMatchesSimple**](docs/MatchApi.md#getTeamEventMatchesSimple) | **GET** /team/{team_key}/event/{event_key}/matches/simple | 
*TbaApiV3client.MatchApi* | [**getTeamMatchesByYear**](docs/MatchApi.md#getTeamMatchesByYear) | **GET** /team/{team_key}/matches/{year} | 
*TbaApiV3client.MatchApi* | [**getTeamMatchesByYearKeys**](docs/MatchApi.md#getTeamMatchesByYearKeys) | **GET** /team/{team_key}/matches/{year}/keys | 
*TbaApiV3client.MatchApi* | [**getTeamMatchesByYearSimple**](docs/MatchApi.md#getTeamMatchesByYearSimple) | **GET** /team/{team_key}/matches/{year}/simple | 
*TbaApiV3client.TBAApi* | [**getStatus**](docs/TBAApi.md#getStatus) | **GET** /status | 
*TbaApiV3client.TeamApi* | [**getDistrictRankings**](docs/TeamApi.md#getDistrictRankings) | **GET** /district/{district_key}/rankings | 
*TbaApiV3client.TeamApi* | [**getDistrictTeams**](docs/TeamApi.md#getDistrictTeams) | **GET** /district/{district_key}/teams | 
*TbaApiV3client.TeamApi* | [**getDistrictTeamsKeys**](docs/TeamApi.md#getDistrictTeamsKeys) | **GET** /district/{district_key}/teams/keys | 
*TbaApiV3client.TeamApi* | [**getDistrictTeamsSimple**](docs/TeamApi.md#getDistrictTeamsSimple) | **GET** /district/{district_key}/teams/simple | 
*TbaApiV3client.TeamApi* | [**getEventTeams**](docs/TeamApi.md#getEventTeams) | **GET** /event/{event_key}/teams | 
*TbaApiV3client.TeamApi* | [**getEventTeamsKeys**](docs/TeamApi.md#getEventTeamsKeys) | **GET** /event/{event_key}/teams/keys | 
*TbaApiV3client.TeamApi* | [**getEventTeamsSimple**](docs/TeamApi.md#getEventTeamsSimple) | **GET** /event/{event_key}/teams/simple | 
*TbaApiV3client.TeamApi* | [**getEventTeamsStatuses**](docs/TeamApi.md#getEventTeamsStatuses) | **GET** /event/{event_key}/teams/statuses | 
*TbaApiV3client.TeamApi* | [**getTeam**](docs/TeamApi.md#getTeam) | **GET** /team/{team_key} | 
*TbaApiV3client.TeamApi* | [**getTeamAwards**](docs/TeamApi.md#getTeamAwards) | **GET** /team/{team_key}/awards | 
*TbaApiV3client.TeamApi* | [**getTeamAwardsByYear**](docs/TeamApi.md#getTeamAwardsByYear) | **GET** /team/{team_key}/awards/{year} | 
*TbaApiV3client.TeamApi* | [**getTeamDistricts**](docs/TeamApi.md#getTeamDistricts) | **GET** /team/{team_key}/districts | 
*TbaApiV3client.TeamApi* | [**getTeamEventAwards**](docs/TeamApi.md#getTeamEventAwards) | **GET** /team/{team_key}/event/{event_key}/awards | 
*TbaApiV3client.TeamApi* | [**getTeamEventMatches**](docs/TeamApi.md#getTeamEventMatches) | **GET** /team/{team_key}/event/{event_key}/matches | 
*TbaApiV3client.TeamApi* | [**getTeamEventMatchesKeys**](docs/TeamApi.md#getTeamEventMatchesKeys) | **GET** /team/{team_key}/event/{event_key}/matches/keys | 
*TbaApiV3client.TeamApi* | [**getTeamEventMatchesSimple**](docs/TeamApi.md#getTeamEventMatchesSimple) | **GET** /team/{team_key}/event/{event_key}/matches/simple | 
*TbaApiV3client.TeamApi* | [**getTeamEventStatus**](docs/TeamApi.md#getTeamEventStatus) | **GET** /team/{team_key}/event/{event_key}/status | 
*TbaApiV3client.TeamApi* | [**getTeamEvents**](docs/TeamApi.md#getTeamEvents) | **GET** /team/{team_key}/events | 
*TbaApiV3client.TeamApi* | [**getTeamEventsByYear**](docs/TeamApi.md#getTeamEventsByYear) | **GET** /team/{team_key}/events/{year} | 
*TbaApiV3client.TeamApi* | [**getTeamEventsByYearKeys**](docs/TeamApi.md#getTeamEventsByYearKeys) | **GET** /team/{team_key}/events/{year}/keys | 
*TbaApiV3client.TeamApi* | [**getTeamEventsByYearSimple**](docs/TeamApi.md#getTeamEventsByYearSimple) | **GET** /team/{team_key}/events/{year}/simple | 
*TbaApiV3client.TeamApi* | [**getTeamEventsKeys**](docs/TeamApi.md#getTeamEventsKeys) | **GET** /team/{team_key}/events/keys | 
*TbaApiV3client.TeamApi* | [**getTeamEventsSimple**](docs/TeamApi.md#getTeamEventsSimple) | **GET** /team/{team_key}/events/simple | 
*TbaApiV3client.TeamApi* | [**getTeamEventsStatusesByYear**](docs/TeamApi.md#getTeamEventsStatusesByYear) | **GET** /team/{team_key}/events/{year}/statuses | 
*TbaApiV3client.TeamApi* | [**getTeamMatchesByYear**](docs/TeamApi.md#getTeamMatchesByYear) | **GET** /team/{team_key}/matches/{year} | 
*TbaApiV3client.TeamApi* | [**getTeamMatchesByYearKeys**](docs/TeamApi.md#getTeamMatchesByYearKeys) | **GET** /team/{team_key}/matches/{year}/keys | 
*TbaApiV3client.TeamApi* | [**getTeamMatchesByYearSimple**](docs/TeamApi.md#getTeamMatchesByYearSimple) | **GET** /team/{team_key}/matches/{year}/simple | 
*TbaApiV3client.TeamApi* | [**getTeamMediaByTag**](docs/TeamApi.md#getTeamMediaByTag) | **GET** /team/{team_key}/media/tag/{media_tag} | 
*TbaApiV3client.TeamApi* | [**getTeamMediaByTagYear**](docs/TeamApi.md#getTeamMediaByTagYear) | **GET** /team/{team_key}/media/tag/{media_tag}/{year} | 
*TbaApiV3client.TeamApi* | [**getTeamMediaByYear**](docs/TeamApi.md#getTeamMediaByYear) | **GET** /team/{team_key}/media/{year} | 
*TbaApiV3client.TeamApi* | [**getTeamRobots**](docs/TeamApi.md#getTeamRobots) | **GET** /team/{team_key}/robots | 
*TbaApiV3client.TeamApi* | [**getTeamSimple**](docs/TeamApi.md#getTeamSimple) | **GET** /team/{team_key}/simple | 
*TbaApiV3client.TeamApi* | [**getTeamSocialMedia**](docs/TeamApi.md#getTeamSocialMedia) | **GET** /team/{team_key}/social_media | 
*TbaApiV3client.TeamApi* | [**getTeamYearsParticipated**](docs/TeamApi.md#getTeamYearsParticipated) | **GET** /team/{team_key}/years_participated | 
*TbaApiV3client.TeamApi* | [**getTeams**](docs/TeamApi.md#getTeams) | **GET** /teams/{page_num} | 
*TbaApiV3client.TeamApi* | [**getTeamsByYear**](docs/TeamApi.md#getTeamsByYear) | **GET** /teams/{year}/{page_num} | 
*TbaApiV3client.TeamApi* | [**getTeamsByYearKeys**](docs/TeamApi.md#getTeamsByYearKeys) | **GET** /teams/{year}/{page_num}/keys | 
*TbaApiV3client.TeamApi* | [**getTeamsByYearSimple**](docs/TeamApi.md#getTeamsByYearSimple) | **GET** /teams/{year}/{page_num}/simple | 
*TbaApiV3client.TeamApi* | [**getTeamsKeys**](docs/TeamApi.md#getTeamsKeys) | **GET** /teams/{page_num}/keys | 
*TbaApiV3client.TeamApi* | [**getTeamsSimple**](docs/TeamApi.md#getTeamsSimple) | **GET** /teams/{page_num}/simple | 


## Documentation for Models

 - [TbaApiV3client.APIStatus](docs/APIStatus.md)
 - [TbaApiV3client.APIStatusAppVersion](docs/APIStatusAppVersion.md)
 - [TbaApiV3client.Award](docs/Award.md)
 - [TbaApiV3client.AwardRecipient](docs/AwardRecipient.md)
 - [TbaApiV3client.DistrictList](docs/DistrictList.md)
 - [TbaApiV3client.DistrictRanking](docs/DistrictRanking.md)
 - [TbaApiV3client.DistrictRankingEventPoints](docs/DistrictRankingEventPoints.md)
 - [TbaApiV3client.EliminationAlliance](docs/EliminationAlliance.md)
 - [TbaApiV3client.EliminationAllianceBackup](docs/EliminationAllianceBackup.md)
 - [TbaApiV3client.EliminationAllianceStatus](docs/EliminationAllianceStatus.md)
 - [TbaApiV3client.Event](docs/Event.md)
 - [TbaApiV3client.EventDistrictPoints](docs/EventDistrictPoints.md)
 - [TbaApiV3client.EventDistrictPointsPoints](docs/EventDistrictPointsPoints.md)
 - [TbaApiV3client.EventDistrictPointsTiebreakers](docs/EventDistrictPointsTiebreakers.md)
 - [TbaApiV3client.EventInsights](docs/EventInsights.md)
 - [TbaApiV3client.EventInsights2016](docs/EventInsights2016.md)
 - [TbaApiV3client.EventInsights2017](docs/EventInsights2017.md)
 - [TbaApiV3client.EventInsights2018](docs/EventInsights2018.md)
 - [TbaApiV3client.EventOPRs](docs/EventOPRs.md)
 - [TbaApiV3client.EventRanking](docs/EventRanking.md)
 - [TbaApiV3client.EventRankingExtraStatsInfo](docs/EventRankingExtraStatsInfo.md)
 - [TbaApiV3client.EventRankingRankings](docs/EventRankingRankings.md)
 - [TbaApiV3client.EventRankingSortOrderInfo](docs/EventRankingSortOrderInfo.md)
 - [TbaApiV3client.EventSimple](docs/EventSimple.md)
 - [TbaApiV3client.Match](docs/Match.md)
 - [TbaApiV3client.MatchAlliance](docs/MatchAlliance.md)
 - [TbaApiV3client.MatchAlliances](docs/MatchAlliances.md)
 - [TbaApiV3client.MatchScoreBreakdown2015](docs/MatchScoreBreakdown2015.md)
 - [TbaApiV3client.MatchScoreBreakdown2015Alliance](docs/MatchScoreBreakdown2015Alliance.md)
 - [TbaApiV3client.MatchScoreBreakdown2016](docs/MatchScoreBreakdown2016.md)
 - [TbaApiV3client.MatchScoreBreakdown2016Alliance](docs/MatchScoreBreakdown2016Alliance.md)
 - [TbaApiV3client.MatchScoreBreakdown2017](docs/MatchScoreBreakdown2017.md)
 - [TbaApiV3client.MatchScoreBreakdown2017Alliance](docs/MatchScoreBreakdown2017Alliance.md)
 - [TbaApiV3client.MatchScoreBreakdown2018](docs/MatchScoreBreakdown2018.md)
 - [TbaApiV3client.MatchScoreBreakdown2018Alliance](docs/MatchScoreBreakdown2018Alliance.md)
 - [TbaApiV3client.MatchScoreBreakdown2019](docs/MatchScoreBreakdown2019.md)
 - [TbaApiV3client.MatchScoreBreakdown2019Alliance](docs/MatchScoreBreakdown2019Alliance.md)
 - [TbaApiV3client.MatchSimple](docs/MatchSimple.md)
 - [TbaApiV3client.MatchTimeseries2018](docs/MatchTimeseries2018.md)
 - [TbaApiV3client.MatchVideos](docs/MatchVideos.md)
 - [TbaApiV3client.Media](docs/Media.md)
 - [TbaApiV3client.Team](docs/Team.md)
 - [TbaApiV3client.TeamEventStatus](docs/TeamEventStatus.md)
 - [TbaApiV3client.TeamEventStatusAlliance](docs/TeamEventStatusAlliance.md)
 - [TbaApiV3client.TeamEventStatusAllianceBackup](docs/TeamEventStatusAllianceBackup.md)
 - [TbaApiV3client.TeamEventStatusPlayoff](docs/TeamEventStatusPlayoff.md)
 - [TbaApiV3client.TeamEventStatusRank](docs/TeamEventStatusRank.md)
 - [TbaApiV3client.TeamEventStatusRankRanking](docs/TeamEventStatusRankRanking.md)
 - [TbaApiV3client.TeamEventStatusRankSortOrderInfo](docs/TeamEventStatusRankSortOrderInfo.md)
 - [TbaApiV3client.TeamRobot](docs/TeamRobot.md)
 - [TbaApiV3client.TeamSimple](docs/TeamSimple.md)
 - [TbaApiV3client.WLTRecord](docs/WLTRecord.md)
 - [TbaApiV3client.Webcast](docs/Webcast.md)


## Documentation for Authorization



### apiKey


- **Type**: API key
- **API key parameter name**: X-TBA-Auth-Key
- **Location**: HTTP header


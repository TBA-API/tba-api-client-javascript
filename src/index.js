/**
 * The Blue Alliance API v3
 * # Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
 *
 * The version of the OpenAPI document: 3.04.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import APIStatus from './model/APIStatus';
import APIStatusAppVersion from './model/APIStatusAppVersion';
import Award from './model/Award';
import AwardRecipient from './model/AwardRecipient';
import DistrictList from './model/DistrictList';
import DistrictRanking from './model/DistrictRanking';
import DistrictRankingEventPoints from './model/DistrictRankingEventPoints';
import EliminationAlliance from './model/EliminationAlliance';
import EliminationAllianceBackup from './model/EliminationAllianceBackup';
import EliminationAllianceStatus from './model/EliminationAllianceStatus';
import Event from './model/Event';
import EventDistrictPoints from './model/EventDistrictPoints';
import EventDistrictPointsPoints from './model/EventDistrictPointsPoints';
import EventDistrictPointsTiebreakers from './model/EventDistrictPointsTiebreakers';
import EventInsights from './model/EventInsights';
import EventInsights2016 from './model/EventInsights2016';
import EventInsights2017 from './model/EventInsights2017';
import EventInsights2018 from './model/EventInsights2018';
import EventOPRs from './model/EventOPRs';
import EventRanking from './model/EventRanking';
import EventRankingExtraStatsInfo from './model/EventRankingExtraStatsInfo';
import EventRankingRankings from './model/EventRankingRankings';
import EventRankingSortOrderInfo from './model/EventRankingSortOrderInfo';
import EventSimple from './model/EventSimple';
import Match from './model/Match';
import MatchAlliance from './model/MatchAlliance';
import MatchScoreBreakdown2015 from './model/MatchScoreBreakdown2015';
import MatchScoreBreakdown2015Alliance from './model/MatchScoreBreakdown2015Alliance';
import MatchScoreBreakdown2016 from './model/MatchScoreBreakdown2016';
import MatchScoreBreakdown2016Alliance from './model/MatchScoreBreakdown2016Alliance';
import MatchScoreBreakdown2017 from './model/MatchScoreBreakdown2017';
import MatchScoreBreakdown2017Alliance from './model/MatchScoreBreakdown2017Alliance';
import MatchScoreBreakdown2018 from './model/MatchScoreBreakdown2018';
import MatchScoreBreakdown2018Alliance from './model/MatchScoreBreakdown2018Alliance';
import MatchScoreBreakdown2019 from './model/MatchScoreBreakdown2019';
import MatchScoreBreakdown2019Alliance from './model/MatchScoreBreakdown2019Alliance';
import MatchSimple from './model/MatchSimple';
import MatchSimpleAlliances from './model/MatchSimpleAlliances';
import MatchTimeseries2018 from './model/MatchTimeseries2018';
import MatchVideos from './model/MatchVideos';
import Media from './model/Media';
import Team from './model/Team';
import TeamEventStatus from './model/TeamEventStatus';
import TeamEventStatusAlliance from './model/TeamEventStatusAlliance';
import TeamEventStatusAllianceBackup from './model/TeamEventStatusAllianceBackup';
import TeamEventStatusPlayoff from './model/TeamEventStatusPlayoff';
import TeamEventStatusRank from './model/TeamEventStatusRank';
import TeamEventStatusRankRanking from './model/TeamEventStatusRankRanking';
import TeamEventStatusRankSortOrderInfo from './model/TeamEventStatusRankSortOrderInfo';
import TeamRobot from './model/TeamRobot';
import TeamSimple from './model/TeamSimple';
import WLTRecord from './model/WLTRecord';
import Webcast from './model/Webcast';
import DistrictApi from './api/DistrictApi';
import EventApi from './api/EventApi';
import ListApi from './api/ListApi';
import MatchApi from './api/MatchApi';
import TBAApi from './api/TBAApi';
import TeamApi from './api/TeamApi';


/**
* _Overview__Information_and_statistics_about_FIRST_Robotics_Competition_teams_and_events___Authentication_All_endpoints_require_an_Auth_Key_to_be_passed_in_the_header_X_TBA_Auth_Key__If_you_do_not_have_an_auth_key_yet_you_can_obtain_one_from_your__Account_Page__account___A_User_Agent_header_may_need_to_be_set_to_prevent_a_403_Unauthorized_error_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TbaApiV3client = require('index'); // See note below*.
* var xxxSvc = new TbaApiV3client.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TbaApiV3client.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TbaApiV3client.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TbaApiV3client.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 3.04.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The APIStatus model constructor.
     * @property {module:model/APIStatus}
     */
    APIStatus,

    /**
     * The APIStatusAppVersion model constructor.
     * @property {module:model/APIStatusAppVersion}
     */
    APIStatusAppVersion,

    /**
     * The Award model constructor.
     * @property {module:model/Award}
     */
    Award,

    /**
     * The AwardRecipient model constructor.
     * @property {module:model/AwardRecipient}
     */
    AwardRecipient,

    /**
     * The DistrictList model constructor.
     * @property {module:model/DistrictList}
     */
    DistrictList,

    /**
     * The DistrictRanking model constructor.
     * @property {module:model/DistrictRanking}
     */
    DistrictRanking,

    /**
     * The DistrictRankingEventPoints model constructor.
     * @property {module:model/DistrictRankingEventPoints}
     */
    DistrictRankingEventPoints,

    /**
     * The EliminationAlliance model constructor.
     * @property {module:model/EliminationAlliance}
     */
    EliminationAlliance,

    /**
     * The EliminationAllianceBackup model constructor.
     * @property {module:model/EliminationAllianceBackup}
     */
    EliminationAllianceBackup,

    /**
     * The EliminationAllianceStatus model constructor.
     * @property {module:model/EliminationAllianceStatus}
     */
    EliminationAllianceStatus,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The EventDistrictPoints model constructor.
     * @property {module:model/EventDistrictPoints}
     */
    EventDistrictPoints,

    /**
     * The EventDistrictPointsPoints model constructor.
     * @property {module:model/EventDistrictPointsPoints}
     */
    EventDistrictPointsPoints,

    /**
     * The EventDistrictPointsTiebreakers model constructor.
     * @property {module:model/EventDistrictPointsTiebreakers}
     */
    EventDistrictPointsTiebreakers,

    /**
     * The EventInsights model constructor.
     * @property {module:model/EventInsights}
     */
    EventInsights,

    /**
     * The EventInsights2016 model constructor.
     * @property {module:model/EventInsights2016}
     */
    EventInsights2016,

    /**
     * The EventInsights2017 model constructor.
     * @property {module:model/EventInsights2017}
     */
    EventInsights2017,

    /**
     * The EventInsights2018 model constructor.
     * @property {module:model/EventInsights2018}
     */
    EventInsights2018,

    /**
     * The EventOPRs model constructor.
     * @property {module:model/EventOPRs}
     */
    EventOPRs,

    /**
     * The EventRanking model constructor.
     * @property {module:model/EventRanking}
     */
    EventRanking,

    /**
     * The EventRankingExtraStatsInfo model constructor.
     * @property {module:model/EventRankingExtraStatsInfo}
     */
    EventRankingExtraStatsInfo,

    /**
     * The EventRankingRankings model constructor.
     * @property {module:model/EventRankingRankings}
     */
    EventRankingRankings,

    /**
     * The EventRankingSortOrderInfo model constructor.
     * @property {module:model/EventRankingSortOrderInfo}
     */
    EventRankingSortOrderInfo,

    /**
     * The EventSimple model constructor.
     * @property {module:model/EventSimple}
     */
    EventSimple,

    /**
     * The Match model constructor.
     * @property {module:model/Match}
     */
    Match,

    /**
     * The MatchAlliance model constructor.
     * @property {module:model/MatchAlliance}
     */
    MatchAlliance,

    /**
     * The MatchScoreBreakdown2015 model constructor.
     * @property {module:model/MatchScoreBreakdown2015}
     */
    MatchScoreBreakdown2015,

    /**
     * The MatchScoreBreakdown2015Alliance model constructor.
     * @property {module:model/MatchScoreBreakdown2015Alliance}
     */
    MatchScoreBreakdown2015Alliance,

    /**
     * The MatchScoreBreakdown2016 model constructor.
     * @property {module:model/MatchScoreBreakdown2016}
     */
    MatchScoreBreakdown2016,

    /**
     * The MatchScoreBreakdown2016Alliance model constructor.
     * @property {module:model/MatchScoreBreakdown2016Alliance}
     */
    MatchScoreBreakdown2016Alliance,

    /**
     * The MatchScoreBreakdown2017 model constructor.
     * @property {module:model/MatchScoreBreakdown2017}
     */
    MatchScoreBreakdown2017,

    /**
     * The MatchScoreBreakdown2017Alliance model constructor.
     * @property {module:model/MatchScoreBreakdown2017Alliance}
     */
    MatchScoreBreakdown2017Alliance,

    /**
     * The MatchScoreBreakdown2018 model constructor.
     * @property {module:model/MatchScoreBreakdown2018}
     */
    MatchScoreBreakdown2018,

    /**
     * The MatchScoreBreakdown2018Alliance model constructor.
     * @property {module:model/MatchScoreBreakdown2018Alliance}
     */
    MatchScoreBreakdown2018Alliance,

    /**
     * The MatchScoreBreakdown2019 model constructor.
     * @property {module:model/MatchScoreBreakdown2019}
     */
    MatchScoreBreakdown2019,

    /**
     * The MatchScoreBreakdown2019Alliance model constructor.
     * @property {module:model/MatchScoreBreakdown2019Alliance}
     */
    MatchScoreBreakdown2019Alliance,

    /**
     * The MatchSimple model constructor.
     * @property {module:model/MatchSimple}
     */
    MatchSimple,

    /**
     * The MatchSimpleAlliances model constructor.
     * @property {module:model/MatchSimpleAlliances}
     */
    MatchSimpleAlliances,

    /**
     * The MatchTimeseries2018 model constructor.
     * @property {module:model/MatchTimeseries2018}
     */
    MatchTimeseries2018,

    /**
     * The MatchVideos model constructor.
     * @property {module:model/MatchVideos}
     */
    MatchVideos,

    /**
     * The Media model constructor.
     * @property {module:model/Media}
     */
    Media,

    /**
     * The Team model constructor.
     * @property {module:model/Team}
     */
    Team,

    /**
     * The TeamEventStatus model constructor.
     * @property {module:model/TeamEventStatus}
     */
    TeamEventStatus,

    /**
     * The TeamEventStatusAlliance model constructor.
     * @property {module:model/TeamEventStatusAlliance}
     */
    TeamEventStatusAlliance,

    /**
     * The TeamEventStatusAllianceBackup model constructor.
     * @property {module:model/TeamEventStatusAllianceBackup}
     */
    TeamEventStatusAllianceBackup,

    /**
     * The TeamEventStatusPlayoff model constructor.
     * @property {module:model/TeamEventStatusPlayoff}
     */
    TeamEventStatusPlayoff,

    /**
     * The TeamEventStatusRank model constructor.
     * @property {module:model/TeamEventStatusRank}
     */
    TeamEventStatusRank,

    /**
     * The TeamEventStatusRankRanking model constructor.
     * @property {module:model/TeamEventStatusRankRanking}
     */
    TeamEventStatusRankRanking,

    /**
     * The TeamEventStatusRankSortOrderInfo model constructor.
     * @property {module:model/TeamEventStatusRankSortOrderInfo}
     */
    TeamEventStatusRankSortOrderInfo,

    /**
     * The TeamRobot model constructor.
     * @property {module:model/TeamRobot}
     */
    TeamRobot,

    /**
     * The TeamSimple model constructor.
     * @property {module:model/TeamSimple}
     */
    TeamSimple,

    /**
     * The WLTRecord model constructor.
     * @property {module:model/WLTRecord}
     */
    WLTRecord,

    /**
     * The Webcast model constructor.
     * @property {module:model/Webcast}
     */
    Webcast,

    /**
    * The DistrictApi service constructor.
    * @property {module:api/DistrictApi}
    */
    DistrictApi,

    /**
    * The EventApi service constructor.
    * @property {module:api/EventApi}
    */
    EventApi,

    /**
    * The ListApi service constructor.
    * @property {module:api/ListApi}
    */
    ListApi,

    /**
    * The MatchApi service constructor.
    * @property {module:api/MatchApi}
    */
    MatchApi,

    /**
    * The TBAApi service constructor.
    * @property {module:api/TBAApi}
    */
    TBAApi,

    /**
    * The TeamApi service constructor.
    * @property {module:api/TeamApi}
    */
    TeamApi
};

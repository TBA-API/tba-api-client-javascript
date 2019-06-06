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


import ApiClient from "../ApiClient";
import DistrictList from '../model/DistrictList';
import DistrictRanking from '../model/DistrictRanking';
import Event from '../model/Event';
import EventDistrictPoints from '../model/EventDistrictPoints';
import EventSimple from '../model/EventSimple';
import Team from '../model/Team';
import TeamSimple from '../model/TeamSimple';

/**
* District service.
* @module api/DistrictApi
* @version 3.04.1
*/
export default class DistrictApi {

    /**
    * Constructs a new DistrictApi. 
    * @alias module:api/DistrictApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getDistrictEvents operation.
     * @callback module:api/DistrictApi~getDistrictEventsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of events in the given district.
     * @param {module:api/DistrictApi~getDistrictEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */
    getDistrictEvents(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Event];
      return this.apiClient.callApi(
        '/district/{district_key}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDistrictEventsKeys operation.
     * @callback module:api/DistrictApi~getDistrictEventsKeysCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of event keys for events in the given district.
     * @param {module:api/DistrictApi~getDistrictEventsKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    getDistrictEventsKeys(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/district/{district_key}/events/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDistrictEventsSimple operation.
     * @callback module:api/DistrictApi~getDistrictEventsSimpleCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EventSimple>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a short-form list of events in the given district.
     * @param {String} districtKey TBA District Key, eg `2016fim`
     * @param {module:api/DistrictApi~getDistrictEventsSimpleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EventSimple>}
     */
    getDistrictEventsSimple(districtKey, callback) {
      let postBody = null;
      // verify the required parameter 'districtKey' is set
      if (districtKey === undefined || districtKey === null) {
        throw new Error("Missing the required parameter 'districtKey' when calling getDistrictEventsSimple");
      }

      let pathParams = {
        'district_key': districtKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [EventSimple];
      return this.apiClient.callApi(
        '/district/{district_key}/events/simple', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDistrictRankings operation.
     * @callback module:api/DistrictApi~getDistrictRankingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DistrictRanking>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of team district rankings for the given district.
     * @param {module:api/DistrictApi~getDistrictRankingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DistrictRanking>}
     */
    getDistrictRankings(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DistrictRanking];
      return this.apiClient.callApi(
        '/district/{district_key}/rankings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDistrictTeams operation.
     * @callback module:api/DistrictApi~getDistrictTeamsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Team>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of `Team` objects that competed in events in the given district.
     * @param {module:api/DistrictApi~getDistrictTeamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Team>}
     */
    getDistrictTeams(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Team];
      return this.apiClient.callApi(
        '/district/{district_key}/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDistrictTeamsKeys operation.
     * @callback module:api/DistrictApi~getDistrictTeamsKeysCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of `Team` objects that competed in events in the given district.
     * @param {module:api/DistrictApi~getDistrictTeamsKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    getDistrictTeamsKeys(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/district/{district_key}/teams/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDistrictTeamsSimple operation.
     * @callback module:api/DistrictApi~getDistrictTeamsSimpleCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TeamSimple>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a short-form list of `Team` objects that competed in events in the given district.
     * @param {module:api/DistrictApi~getDistrictTeamsSimpleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TeamSimple>}
     */
    getDistrictTeamsSimple(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TeamSimple];
      return this.apiClient.callApi(
        '/district/{district_key}/teams/simple', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getDistrictsByYear operation.
     * @callback module:api/DistrictApi~getDistrictsByYearCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DistrictList>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of districts and their corresponding district key, for the given year.
     * @param {module:api/DistrictApi~getDistrictsByYearCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DistrictList>}
     */
    getDistrictsByYear(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DistrictList];
      return this.apiClient.callApi(
        '/districts/{year}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEventDistrictPoints operation.
     * @callback module:api/DistrictApi~getEventDistrictPointsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EventDistrictPoints} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of team rankings for the Event.
     * @param {module:api/DistrictApi~getEventDistrictPointsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EventDistrictPoints}
     */
    getEventDistrictPoints(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EventDistrictPoints;
      return this.apiClient.callApi(
        '/event/{event_key}/district_points', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeamDistricts operation.
     * @callback module:api/DistrictApi~getTeamDistrictsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DistrictList>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets an array of districts representing each year the team was in a district. Will return an empty array if the team was never in a district.
     * @param {module:api/DistrictApi~getTeamDistrictsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DistrictList>}
     */
    getTeamDistricts(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['apiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DistrictList];
      return this.apiClient.callApi(
        '/team/{team_key}/districts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

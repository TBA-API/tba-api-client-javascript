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
import Match from '../model/Match';
import MatchSimple from '../model/MatchSimple';

/**
* Match service.
* @module api/MatchApi
* @version 3.04.1
*/
export default class MatchApi {

    /**
    * Constructs a new MatchApi. 
    * @alias module:api/MatchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getEventMatchTimeseries operation.
     * @callback module:api/MatchApi~getEventMatchTimeseriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets an array of Match Keys for the given event key that have timeseries data. Returns an empty array if no matches have timeseries data. *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up. *WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
     * @param {module:api/MatchApi~getEventMatchTimeseriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    getEventMatchTimeseries(callback) {
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
        '/event/{event_key}/matches/timeseries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEventMatches operation.
     * @callback module:api/MatchApi~getEventMatchesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Match>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of matches for the given event.
     * @param {module:api/MatchApi~getEventMatchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Match>}
     */
    getEventMatches(callback) {
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
      let returnType = [Match];
      return this.apiClient.callApi(
        '/event/{event_key}/matches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEventMatchesKeys operation.
     * @callback module:api/MatchApi~getEventMatchesKeysCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of match keys for the given event.
     * @param {module:api/MatchApi~getEventMatchesKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    getEventMatchesKeys(callback) {
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
        '/event/{event_key}/matches/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEventMatchesSimple operation.
     * @callback module:api/MatchApi~getEventMatchesSimpleCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MatchSimple>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a short-form list of matches for the given event.
     * @param {module:api/MatchApi~getEventMatchesSimpleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MatchSimple>}
     */
    getEventMatchesSimple(callback) {
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
      let returnType = [MatchSimple];
      return this.apiClient.callApi(
        '/event/{event_key}/matches/simple', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMatch operation.
     * @callback module:api/MatchApi~getMatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Match} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a `Match` object for the given match key.
     * @param {module:api/MatchApi~getMatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Match}
     */
    getMatch(callback) {
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
      let returnType = Match;
      return this.apiClient.callApi(
        '/match/{match_key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMatchSimple operation.
     * @callback module:api/MatchApi~getMatchSimpleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MatchSimple} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a short-form `Match` object for the given match key.
     * @param {module:api/MatchApi~getMatchSimpleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MatchSimple}
     */
    getMatchSimple(callback) {
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
      let returnType = MatchSimple;
      return this.apiClient.callApi(
        '/match/{match_key}/simple', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getMatchTimeseries operation.
     * @callback module:api/MatchApi~getMatchTimeseriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets an array of game-specific Match Timeseries objects for the given match key or an empty array if not available. *WARNING:* This is *not* official data, and is subject to a significant possibility of error, or missing data. Do not rely on this data for any purpose. In fact, pretend we made it up. *WARNING:* This endpoint and corresponding data models are under *active development* and may change at any time, including in breaking ways.
     * @param {module:api/MatchApi~getMatchTimeseriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    getMatchTimeseries(callback) {
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
      let returnType = [Object];
      return this.apiClient.callApi(
        '/match/{match_key}/timeseries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeamEventMatches operation.
     * @callback module:api/MatchApi~getTeamEventMatchesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Match>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of matches for the given team and event.
     * @param {module:api/MatchApi~getTeamEventMatchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Match>}
     */
    getTeamEventMatches(callback) {
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
      let returnType = [Match];
      return this.apiClient.callApi(
        '/team/{team_key}/event/{event_key}/matches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeamEventMatchesKeys operation.
     * @callback module:api/MatchApi~getTeamEventMatchesKeysCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of match keys for matches for the given team and event.
     * @param {module:api/MatchApi~getTeamEventMatchesKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    getTeamEventMatchesKeys(callback) {
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
        '/team/{team_key}/event/{event_key}/matches/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeamEventMatchesSimple operation.
     * @callback module:api/MatchApi~getTeamEventMatchesSimpleCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Match>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a short-form list of matches for the given team and event.
     * @param {module:api/MatchApi~getTeamEventMatchesSimpleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Match>}
     */
    getTeamEventMatchesSimple(callback) {
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
      let returnType = [Match];
      return this.apiClient.callApi(
        '/team/{team_key}/event/{event_key}/matches/simple', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeamMatchesByYear operation.
     * @callback module:api/MatchApi~getTeamMatchesByYearCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Match>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of matches for the given team and year.
     * @param {module:api/MatchApi~getTeamMatchesByYearCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Match>}
     */
    getTeamMatchesByYear(callback) {
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
      let returnType = [Match];
      return this.apiClient.callApi(
        '/team/{team_key}/matches/{year}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeamMatchesByYearKeys operation.
     * @callback module:api/MatchApi~getTeamMatchesByYearKeysCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of match keys for matches for the given team and year.
     * @param {module:api/MatchApi~getTeamMatchesByYearKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    getTeamMatchesByYearKeys(callback) {
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
        '/team/{team_key}/matches/{year}/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTeamMatchesByYearSimple operation.
     * @callback module:api/MatchApi~getTeamMatchesByYearSimpleCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MatchSimple>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a short-form list of matches for the given team and year.
     * @param {module:api/MatchApi~getTeamMatchesByYearSimpleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MatchSimple>}
     */
    getTeamMatchesByYearSimple(callback) {
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
      let returnType = [MatchSimple];
      return this.apiClient.callApi(
        '/team/{team_key}/matches/{year}/simple', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

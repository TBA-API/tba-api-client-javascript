/**
 * The Blue Alliance API v3
 * # Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
 *
 * OpenAPI spec version: 3.04.1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DistrictList', 'model/DistrictRanking', 'model/Event', 'model/EventDistrictPoints', 'model/EventSimple', 'model/Team', 'model/TeamSimple'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DistrictList'), require('../model/DistrictRanking'), require('../model/Event'), require('../model/EventDistrictPoints'), require('../model/EventSimple'), require('../model/Team'), require('../model/TeamSimple'));
  } else {
    // Browser globals (root is window)
    if (!root.TbaApiV3client) {
      root.TbaApiV3client = {};
    }
    root.TbaApiV3client.DistrictApi = factory(root.TbaApiV3client.ApiClient, root.TbaApiV3client.DistrictList, root.TbaApiV3client.DistrictRanking, root.TbaApiV3client.Event, root.TbaApiV3client.EventDistrictPoints, root.TbaApiV3client.EventSimple, root.TbaApiV3client.Team, root.TbaApiV3client.TeamSimple);
  }
}(this, function(ApiClient, DistrictList, DistrictRanking, Event, EventDistrictPoints, EventSimple, Team, TeamSimple) {
  'use strict';

  /**
   * District service.
   * @module api/DistrictApi
   * @version 3.04.1
   */

  /**
   * Constructs a new DistrictApi. 
   * @alias module:api/DistrictApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getDistrictEvents operation.
     * @callback module:api/DistrictApi~getDistrictEventsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of events in the given district.
     * @param {String} districtKey TBA District Key, eg &#x60;2016fim&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifModifiedSince Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client.
     * @param {module:api/DistrictApi~getDistrictEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */
    this.getDistrictEvents = function(districtKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'districtKey' is set
      if (districtKey === undefined || districtKey === null) {
        throw new Error("Missing the required parameter 'districtKey' when calling getDistrictEvents");
      }


      var pathParams = {
        'district_key': districtKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Event];

      return this.apiClient.callApi(
        '/district/{district_key}/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
     * @param {String} districtKey TBA District Key, eg &#x60;2016fim&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifModifiedSince Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client.
     * @param {module:api/DistrictApi~getDistrictEventsKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    this.getDistrictEventsKeys = function(districtKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'districtKey' is set
      if (districtKey === undefined || districtKey === null) {
        throw new Error("Missing the required parameter 'districtKey' when calling getDistrictEventsKeys");
      }


      var pathParams = {
        'district_key': districtKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/district/{district_key}/events/keys', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
     * @param {String} districtKey TBA District Key, eg &#x60;2016fim&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifModifiedSince Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client.
     * @param {module:api/DistrictApi~getDistrictEventsSimpleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EventSimple>}
     */
    this.getDistrictEventsSimple = function(districtKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'districtKey' is set
      if (districtKey === undefined || districtKey === null) {
        throw new Error("Missing the required parameter 'districtKey' when calling getDistrictEventsSimple");
      }


      var pathParams = {
        'district_key': districtKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [EventSimple];

      return this.apiClient.callApi(
        '/district/{district_key}/events/simple', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
     * @param {String} districtKey TBA District Key, eg &#x60;2016fim&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifModifiedSince Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client.
     * @param {module:api/DistrictApi~getDistrictRankingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DistrictRanking>}
     */
    this.getDistrictRankings = function(districtKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'districtKey' is set
      if (districtKey === undefined || districtKey === null) {
        throw new Error("Missing the required parameter 'districtKey' when calling getDistrictRankings");
      }


      var pathParams = {
        'district_key': districtKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [DistrictRanking];

      return this.apiClient.callApi(
        '/district/{district_key}/rankings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
     * Gets a list of &#x60;Team&#x60; objects that competed in events in the given district.
     * @param {String} districtKey TBA District Key, eg &#x60;2016fim&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifModifiedSince Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client.
     * @param {module:api/DistrictApi~getDistrictTeamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Team>}
     */
    this.getDistrictTeams = function(districtKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'districtKey' is set
      if (districtKey === undefined || districtKey === null) {
        throw new Error("Missing the required parameter 'districtKey' when calling getDistrictTeams");
      }


      var pathParams = {
        'district_key': districtKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Team];

      return this.apiClient.callApi(
        '/district/{district_key}/teams', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
     * Gets a list of &#x60;Team&#x60; objects that competed in events in the given district.
     * @param {String} districtKey TBA District Key, eg &#x60;2016fim&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifModifiedSince Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client.
     * @param {module:api/DistrictApi~getDistrictTeamsKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    this.getDistrictTeamsKeys = function(districtKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'districtKey' is set
      if (districtKey === undefined || districtKey === null) {
        throw new Error("Missing the required parameter 'districtKey' when calling getDistrictTeamsKeys");
      }


      var pathParams = {
        'district_key': districtKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/district/{district_key}/teams/keys', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
     * Gets a short-form list of &#x60;Team&#x60; objects that competed in events in the given district.
     * @param {String} districtKey TBA District Key, eg &#x60;2016fim&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifModifiedSince Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client.
     * @param {module:api/DistrictApi~getDistrictTeamsSimpleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TeamSimple>}
     */
    this.getDistrictTeamsSimple = function(districtKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'districtKey' is set
      if (districtKey === undefined || districtKey === null) {
        throw new Error("Missing the required parameter 'districtKey' when calling getDistrictTeamsSimple");
      }


      var pathParams = {
        'district_key': districtKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [TeamSimple];

      return this.apiClient.callApi(
        '/district/{district_key}/teams/simple', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
     * @param {Number} year Competition Year (or Season). Must be 4 digits.
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifModifiedSince Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client.
     * @param {module:api/DistrictApi~getDistrictsByYearCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DistrictList>}
     */
    this.getDistrictsByYear = function(year, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling getDistrictsByYear");
      }


      var pathParams = {
        'year': year
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [DistrictList];

      return this.apiClient.callApi(
        '/districts/{year}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
     * @param {String} eventKey TBA Event Key, eg &#x60;2016nytr&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifModifiedSince Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client.
     * @param {module:api/DistrictApi~getEventDistrictPointsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EventDistrictPoints}
     */
    this.getEventDistrictPoints = function(eventKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'eventKey' is set
      if (eventKey === undefined || eventKey === null) {
        throw new Error("Missing the required parameter 'eventKey' when calling getEventDistrictPoints");
      }


      var pathParams = {
        'event_key': eventKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EventDistrictPoints;

      return this.apiClient.callApi(
        '/event/{event_key}/district_points', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
     * @param {String} teamKey TBA Team Key, eg &#x60;frc254&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifModifiedSince Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client.
     * @param {module:api/DistrictApi~getTeamDistrictsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DistrictList>}
     */
    this.getTeamDistricts = function(teamKey, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'teamKey' is set
      if (teamKey === undefined || teamKey === null) {
        throw new Error("Missing the required parameter 'teamKey' when calling getTeamDistricts");
      }


      var pathParams = {
        'team_key': teamKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['apiKey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [DistrictList];

      return this.apiClient.callApi(
        '/team/{team_key}/districts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

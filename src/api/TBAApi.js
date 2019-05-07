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
    define(['ApiClient', 'model/APIStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/APIStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.TbaApiV3client) {
      root.TbaApiV3client = {};
    }
    root.TbaApiV3client.TBAApi = factory(root.TbaApiV3client.ApiClient, root.TbaApiV3client.APIStatus);
  }
}(this, function(ApiClient, APIStatus) {
  'use strict';

  /**
   * TBA service.
   * @module api/TBAApi
   * @version $API_VERSION
   */

  /**
   * Constructs a new TBAApi. 
   * @alias module:api/TBAApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getStatus operation.
     * @callback module:api/TBAApi~getStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APIStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns API status, and TBA status information.
     * @param {Object} opts Optional parameters
     * @param {String} opts.ifModifiedSince Value of the &#x60;Last-Modified&#x60; header in the most recently cached response by the client.
     * @param {module:api/TBAApi~getStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIStatus}
     */
    this.getStatus = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = APIStatus;

      return this.apiClient.callApi(
        '/status', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

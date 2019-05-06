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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TbaApiV3client) {
      root.TbaApiV3client = {};
    }
    root.TbaApiV3client.APIStatusAppVersion = factory(root.TbaApiV3client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The APIStatusAppVersion model module.
   * @module model/APIStatusAppVersion
   * @version 3.04.1
   */

  /**
   * Constructs a new <code>APIStatusAppVersion</code>.
   * @alias module:model/APIStatusAppVersion
   * @class
   * @param minAppVersion {Number} Internal use - Minimum application version required to correctly connect and process data.
   * @param latestAppVersion {Number} Internal use - Latest application version available.
   */
  var exports = function(minAppVersion, latestAppVersion) {
    var _this = this;

    _this['min_app_version'] = minAppVersion;
    _this['latest_app_version'] = latestAppVersion;
  };

  /**
   * Constructs a <code>APIStatusAppVersion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIStatusAppVersion} obj Optional instance to populate.
   * @return {module:model/APIStatusAppVersion} The populated <code>APIStatusAppVersion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('min_app_version')) {
        obj['min_app_version'] = ApiClient.convertToType(data['min_app_version'], 'Number');
      }
      if (data.hasOwnProperty('latest_app_version')) {
        obj['latest_app_version'] = ApiClient.convertToType(data['latest_app_version'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Internal use - Minimum application version required to correctly connect and process data.
   * @member {Number} min_app_version
   */
  exports.prototype['min_app_version'] = undefined;
  /**
   * Internal use - Latest application version available.
   * @member {Number} latest_app_version
   */
  exports.prototype['latest_app_version'] = undefined;



  return exports;
}));



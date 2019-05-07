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
    root.TbaApiV3client.TeamEventStatusAllianceBackup = factory(root.TbaApiV3client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TeamEventStatusAllianceBackup model module.
   * @module model/TeamEventStatusAllianceBackup
   * @version $API_VERSION
   */

  /**
   * Constructs a new <code>TeamEventStatusAllianceBackup</code>.
   * Backup status, may be null.
   * @alias module:model/TeamEventStatusAllianceBackup
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>TeamEventStatusAllianceBackup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamEventStatusAllianceBackup} obj Optional instance to populate.
   * @return {module:model/TeamEventStatusAllianceBackup} The populated <code>TeamEventStatusAllianceBackup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('out')) {
        obj['out'] = ApiClient.convertToType(data['out'], 'String');
      }
      if (data.hasOwnProperty('in')) {
        obj['in'] = ApiClient.convertToType(data['in'], 'String');
      }
    }
    return obj;
  }

  /**
   * TBA key for the team replaced by the backup.
   * @member {String} out
   */
  exports.prototype['out'] = undefined;
  /**
   * TBA key for the backup team called in.
   * @member {String} in
   */
  exports.prototype['in'] = undefined;



  return exports;
}));



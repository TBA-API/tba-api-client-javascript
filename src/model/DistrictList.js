/**
 * The Blue Alliance API v3
 * # Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
 *
 * OpenAPI spec version: 3.03.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    root.TbaApiV3client.DistrictList = factory(root.TbaApiV3client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DistrictList model module.
   * @module model/DistrictList
   * @version 3.03.1
   */

  /**
   * Constructs a new <code>DistrictList</code>.
   * @alias module:model/DistrictList
   * @class
   * @param abbreviation {String} The short identifier for the district.
   * @param displayName {String} The long name for the district.
   * @param key {String} Key for this district, e.g. `2016ne`.
   * @param year {Number} Year this district participated.
   */
  var exports = function(abbreviation, displayName, key, year) {
    var _this = this;

    _this['abbreviation'] = abbreviation;
    _this['display_name'] = displayName;
    _this['key'] = key;
    _this['year'] = year;
  };

  /**
   * Constructs a <code>DistrictList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DistrictList} obj Optional instance to populate.
   * @return {module:model/DistrictList} The populated <code>DistrictList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('abbreviation')) {
        obj['abbreviation'] = ApiClient.convertToType(data['abbreviation'], 'String');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('year')) {
        obj['year'] = ApiClient.convertToType(data['year'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The short identifier for the district.
   * @member {String} abbreviation
   */
  exports.prototype['abbreviation'] = undefined;
  /**
   * The long name for the district.
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * Key for this district, e.g. `2016ne`.
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * Year this district participated.
   * @member {Number} year
   */
  exports.prototype['year'] = undefined;



  return exports;
}));


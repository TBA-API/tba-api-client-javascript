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
    root.TbaApiV3client.EventRankingExtraStatsInfo = factory(root.TbaApiV3client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EventRankingExtraStatsInfo model module.
   * @module model/EventRankingExtraStatsInfo
   * @version 3.03.1
   */

  /**
   * Constructs a new <code>EventRankingExtraStatsInfo</code>.
   * @alias module:model/EventRankingExtraStatsInfo
   * @class
   * @param name {String} Name of the field used in the `extra_stats` array.
   * @param precision {Number} Integer expressing the number of digits of precision in the number provided in `sort_orders`.
   */
  var exports = function(name, precision) {
    var _this = this;

    _this['name'] = name;
    _this['precision'] = precision;
  };

  /**
   * Constructs a <code>EventRankingExtraStatsInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventRankingExtraStatsInfo} obj Optional instance to populate.
   * @return {module:model/EventRankingExtraStatsInfo} The populated <code>EventRankingExtraStatsInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('precision')) {
        obj['precision'] = ApiClient.convertToType(data['precision'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Name of the field used in the `extra_stats` array.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Integer expressing the number of digits of precision in the number provided in `sort_orders`.
   * @member {Number} precision
   */
  exports.prototype['precision'] = undefined;



  return exports;
}));



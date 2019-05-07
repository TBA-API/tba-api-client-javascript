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
    define(['ApiClient', 'model/MatchScoreBreakdown2015Alliance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MatchScoreBreakdown2015Alliance'));
  } else {
    // Browser globals (root is window)
    if (!root.TbaApiV3client) {
      root.TbaApiV3client = {};
    }
    root.TbaApiV3client.MatchScoreBreakdown2015 = factory(root.TbaApiV3client.ApiClient, root.TbaApiV3client.MatchScoreBreakdown2015Alliance);
  }
}(this, function(ApiClient, MatchScoreBreakdown2015Alliance) {
  'use strict';



  /**
   * The MatchScoreBreakdown2015 model module.
   * @module model/MatchScoreBreakdown2015
   * @version $API_VERSION
   */

  /**
   * Constructs a new <code>MatchScoreBreakdown2015</code>.
   * See the 2015 FMS API documentation for a description of each value
   * @alias module:model/MatchScoreBreakdown2015
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>MatchScoreBreakdown2015</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MatchScoreBreakdown2015} obj Optional instance to populate.
   * @return {module:model/MatchScoreBreakdown2015} The populated <code>MatchScoreBreakdown2015</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('blue')) {
        obj['blue'] = MatchScoreBreakdown2015Alliance.constructFromObject(data['blue']);
      }
      if (data.hasOwnProperty('red')) {
        obj['red'] = MatchScoreBreakdown2015Alliance.constructFromObject(data['red']);
      }
      if (data.hasOwnProperty('coopertition')) {
        obj['coopertition'] = ApiClient.convertToType(data['coopertition'], 'String');
      }
      if (data.hasOwnProperty('coopertition_points')) {
        obj['coopertition_points'] = ApiClient.convertToType(data['coopertition_points'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MatchScoreBreakdown2015Alliance} blue
   */
  exports.prototype['blue'] = undefined;
  /**
   * @member {module:model/MatchScoreBreakdown2015Alliance} red
   */
  exports.prototype['red'] = undefined;
  /**
   * @member {module:model/MatchScoreBreakdown2015.CoopertitionEnum} coopertition
   */
  exports.prototype['coopertition'] = undefined;
  /**
   * @member {Number} coopertition_points
   */
  exports.prototype['coopertition_points'] = undefined;


  /**
   * Allowed values for the <code>coopertition</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CoopertitionEnum = {
    /**
     * value: "None"
     * @const
     */
    "None": "None",
    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",
    /**
     * value: "Stack"
     * @const
     */
    "Stack": "Stack"  };


  return exports;
}));



/**
 * The Blue Alliance API v3
 * # Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
 *
 * OpenAPI spec version: 3.04.0
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
    define(['ApiClient', 'model/MatchScoreBreakdown2019Alliance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MatchScoreBreakdown2019Alliance'));
  } else {
    // Browser globals (root is window)
    if (!root.TbaApiV3client) {
      root.TbaApiV3client = {};
    }
    root.TbaApiV3client.MatchScoreBreakdown2019 = factory(root.TbaApiV3client.ApiClient, root.TbaApiV3client.MatchScoreBreakdown2019Alliance);
  }
}(this, function(ApiClient, MatchScoreBreakdown2019Alliance) {
  'use strict';




  /**
   * The MatchScoreBreakdown2019 model module.
   * @module model/MatchScoreBreakdown2019
   * @version 3.04.0
   */

  /**
   * Constructs a new <code>MatchScoreBreakdown2019</code>.
   * See the 2019 FMS API documentation for a description of each value. https://frcevents2.docs.apiary.io/#reference/match-results/score-details
   * @alias module:model/MatchScoreBreakdown2019
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>MatchScoreBreakdown2019</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MatchScoreBreakdown2019} obj Optional instance to populate.
   * @return {module:model/MatchScoreBreakdown2019} The populated <code>MatchScoreBreakdown2019</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('blue')) {
        obj['blue'] = MatchScoreBreakdown2019Alliance.constructFromObject(data['blue']);
      }
      if (data.hasOwnProperty('red')) {
        obj['red'] = MatchScoreBreakdown2019Alliance.constructFromObject(data['red']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MatchScoreBreakdown2019Alliance} blue
   */
  exports.prototype['blue'] = undefined;
  /**
   * @member {module:model/MatchScoreBreakdown2019Alliance} red
   */
  exports.prototype['red'] = undefined;



  return exports;
}));


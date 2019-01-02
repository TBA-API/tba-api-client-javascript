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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TbaApiV3client) {
      root.TbaApiV3client = {};
    }
    root.TbaApiV3client.EventDistrictPointsPoints = factory(root.TbaApiV3client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EventDistrictPointsPoints model module.
   * @module model/EventDistrictPointsPoints
   * @version 3.04.0
   */

  /**
   * Constructs a new <code>EventDistrictPointsPoints</code>.
   * @alias module:model/EventDistrictPointsPoints
   * @class
   * @param alliancePoints {Number} Points awarded for alliance selection
   * @param awardPoints {Number} Points awarded for event awards.
   * @param qualPoints {Number} Points awarded for qualification match performance.
   * @param elimPoints {Number} Points awarded for elimination match performance.
   * @param total {Number} Total points awarded at this event.
   */
  var exports = function(alliancePoints, awardPoints, qualPoints, elimPoints, total) {
    var _this = this;

    _this['alliance_points'] = alliancePoints;
    _this['award_points'] = awardPoints;
    _this['qual_points'] = qualPoints;
    _this['elim_points'] = elimPoints;
    _this['total'] = total;
  };

  /**
   * Constructs a <code>EventDistrictPointsPoints</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventDistrictPointsPoints} obj Optional instance to populate.
   * @return {module:model/EventDistrictPointsPoints} The populated <code>EventDistrictPointsPoints</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('alliance_points')) {
        obj['alliance_points'] = ApiClient.convertToType(data['alliance_points'], 'Number');
      }
      if (data.hasOwnProperty('award_points')) {
        obj['award_points'] = ApiClient.convertToType(data['award_points'], 'Number');
      }
      if (data.hasOwnProperty('qual_points')) {
        obj['qual_points'] = ApiClient.convertToType(data['qual_points'], 'Number');
      }
      if (data.hasOwnProperty('elim_points')) {
        obj['elim_points'] = ApiClient.convertToType(data['elim_points'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Points awarded for alliance selection
   * @member {Number} alliance_points
   */
  exports.prototype['alliance_points'] = undefined;
  /**
   * Points awarded for event awards.
   * @member {Number} award_points
   */
  exports.prototype['award_points'] = undefined;
  /**
   * Points awarded for qualification match performance.
   * @member {Number} qual_points
   */
  exports.prototype['qual_points'] = undefined;
  /**
   * Points awarded for elimination match performance.
   * @member {Number} elim_points
   */
  exports.prototype['elim_points'] = undefined;
  /**
   * Total points awarded at this event.
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));



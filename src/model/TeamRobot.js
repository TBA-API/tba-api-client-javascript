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
    root.TbaApiV3client.TeamRobot = factory(root.TbaApiV3client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TeamRobot model module.
   * @module model/TeamRobot
   * @version 3.03.1
   */

  /**
   * Constructs a new <code>TeamRobot</code>.
   * @alias module:model/TeamRobot
   * @class
   * @param year {Number} Year this robot competed in.
   * @param robotName {String} Name of the robot as provided by the team.
   * @param key {String} Internal TBA identifier for this robot.
   * @param teamKey {String} TBA team key for this robot.
   */
  var exports = function(year, robotName, key, teamKey) {
    var _this = this;

    _this['year'] = year;
    _this['robot_name'] = robotName;
    _this['key'] = key;
    _this['team_key'] = teamKey;
  };

  /**
   * Constructs a <code>TeamRobot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamRobot} obj Optional instance to populate.
   * @return {module:model/TeamRobot} The populated <code>TeamRobot</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('year')) {
        obj['year'] = ApiClient.convertToType(data['year'], 'Number');
      }
      if (data.hasOwnProperty('robot_name')) {
        obj['robot_name'] = ApiClient.convertToType(data['robot_name'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('team_key')) {
        obj['team_key'] = ApiClient.convertToType(data['team_key'], 'String');
      }
    }
    return obj;
  }

  /**
   * Year this robot competed in.
   * @member {Number} year
   */
  exports.prototype['year'] = undefined;
  /**
   * Name of the robot as provided by the team.
   * @member {String} robot_name
   */
  exports.prototype['robot_name'] = undefined;
  /**
   * Internal TBA identifier for this robot.
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * TBA team key for this robot.
   * @member {String} team_key
   */
  exports.prototype['team_key'] = undefined;



  return exports;
}));


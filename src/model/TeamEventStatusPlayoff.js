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
    define(['ApiClient', 'model/WLTRecord'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WLTRecord'));
  } else {
    // Browser globals (root is window)
    if (!root.TbaApiV3client) {
      root.TbaApiV3client = {};
    }
    root.TbaApiV3client.TeamEventStatusPlayoff = factory(root.TbaApiV3client.ApiClient, root.TbaApiV3client.WLTRecord);
  }
}(this, function(ApiClient, WLTRecord) {
  'use strict';




  /**
   * The TeamEventStatusPlayoff model module.
   * @module model/TeamEventStatusPlayoff
   * @version 3.03.1
   */

  /**
   * Constructs a new <code>TeamEventStatusPlayoff</code>.
   * Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun.
   * @alias module:model/TeamEventStatusPlayoff
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>TeamEventStatusPlayoff</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamEventStatusPlayoff} obj Optional instance to populate.
   * @return {module:model/TeamEventStatusPlayoff} The populated <code>TeamEventStatusPlayoff</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'String');
      }
      if (data.hasOwnProperty('current_level_record')) {
        obj['current_level_record'] = WLTRecord.constructFromObject(data['current_level_record']);
      }
      if (data.hasOwnProperty('record')) {
        obj['record'] = WLTRecord.constructFromObject(data['record']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('playoff_average')) {
        obj['playoff_average'] = ApiClient.convertToType(data['playoff_average'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The highest playoff level the team reached.
   * @member {module:model/TeamEventStatusPlayoff.LevelEnum} level
   */
  exports.prototype['level'] = undefined;
  /**
   * @member {module:model/WLTRecord} current_level_record
   */
  exports.prototype['current_level_record'] = undefined;
  /**
   * @member {module:model/WLTRecord} record
   */
  exports.prototype['record'] = undefined;
  /**
   * Current competition status for the playoffs.
   * @member {module:model/TeamEventStatusPlayoff.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The average match score during playoffs. Year specific. May be null if not relevant for a given year.
   * @member {Number} playoff_average
   */
  exports.prototype['playoff_average'] = undefined;


  /**
   * Allowed values for the <code>level</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LevelEnum = {
    /**
     * value: "qm"
     * @const
     */
    "qm": "qm",
    /**
     * value: "ef"
     * @const
     */
    "ef": "ef",
    /**
     * value: "qf"
     * @const
     */
    "qf": "qf",
    /**
     * value: "sf"
     * @const
     */
    "sf": "sf",
    /**
     * value: "f"
     * @const
     */
    "f": "f"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "won"
     * @const
     */
    "won": "won",
    /**
     * value: "eliminated"
     * @const
     */
    "eliminated": "eliminated",
    /**
     * value: "playing"
     * @const
     */
    "playing": "playing"  };


  return exports;
}));


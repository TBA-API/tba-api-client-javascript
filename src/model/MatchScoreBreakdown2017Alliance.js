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
    root.TbaApiV3client.MatchScoreBreakdown2017Alliance = factory(root.TbaApiV3client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MatchScoreBreakdown2017Alliance model module.
   * @module model/MatchScoreBreakdown2017Alliance
   * @version 3.03.1
   */

  /**
   * Constructs a new <code>MatchScoreBreakdown2017Alliance</code>.
   * @alias module:model/MatchScoreBreakdown2017Alliance
   * @class
   */
  var exports = function() {
    var _this = this;


































  };

  /**
   * Constructs a <code>MatchScoreBreakdown2017Alliance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MatchScoreBreakdown2017Alliance} obj Optional instance to populate.
   * @return {module:model/MatchScoreBreakdown2017Alliance} The populated <code>MatchScoreBreakdown2017Alliance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('autoPoints')) {
        obj['autoPoints'] = ApiClient.convertToType(data['autoPoints'], 'Number');
      }
      if (data.hasOwnProperty('teleopPoints')) {
        obj['teleopPoints'] = ApiClient.convertToType(data['teleopPoints'], 'Number');
      }
      if (data.hasOwnProperty('foulPoints')) {
        obj['foulPoints'] = ApiClient.convertToType(data['foulPoints'], 'Number');
      }
      if (data.hasOwnProperty('adjustPoints')) {
        obj['adjustPoints'] = ApiClient.convertToType(data['adjustPoints'], 'Number');
      }
      if (data.hasOwnProperty('totalPoints')) {
        obj['totalPoints'] = ApiClient.convertToType(data['totalPoints'], 'Number');
      }
      if (data.hasOwnProperty('robot1Auto')) {
        obj['robot1Auto'] = ApiClient.convertToType(data['robot1Auto'], 'String');
      }
      if (data.hasOwnProperty('robot2Auto')) {
        obj['robot2Auto'] = ApiClient.convertToType(data['robot2Auto'], 'String');
      }
      if (data.hasOwnProperty('robot3Auto')) {
        obj['robot3Auto'] = ApiClient.convertToType(data['robot3Auto'], 'String');
      }
      if (data.hasOwnProperty('rotor1Auto')) {
        obj['rotor1Auto'] = ApiClient.convertToType(data['rotor1Auto'], 'Boolean');
      }
      if (data.hasOwnProperty('rotor2Auto')) {
        obj['rotor2Auto'] = ApiClient.convertToType(data['rotor2Auto'], 'Boolean');
      }
      if (data.hasOwnProperty('autoFuelLow')) {
        obj['autoFuelLow'] = ApiClient.convertToType(data['autoFuelLow'], 'Number');
      }
      if (data.hasOwnProperty('autoFuelHigh')) {
        obj['autoFuelHigh'] = ApiClient.convertToType(data['autoFuelHigh'], 'Number');
      }
      if (data.hasOwnProperty('autoMobilityPoints')) {
        obj['autoMobilityPoints'] = ApiClient.convertToType(data['autoMobilityPoints'], 'Number');
      }
      if (data.hasOwnProperty('autoRotorPoints')) {
        obj['autoRotorPoints'] = ApiClient.convertToType(data['autoRotorPoints'], 'Number');
      }
      if (data.hasOwnProperty('autoFuelPoints')) {
        obj['autoFuelPoints'] = ApiClient.convertToType(data['autoFuelPoints'], 'Number');
      }
      if (data.hasOwnProperty('teleopFuelPoints')) {
        obj['teleopFuelPoints'] = ApiClient.convertToType(data['teleopFuelPoints'], 'Number');
      }
      if (data.hasOwnProperty('teleopFuelLow')) {
        obj['teleopFuelLow'] = ApiClient.convertToType(data['teleopFuelLow'], 'Number');
      }
      if (data.hasOwnProperty('teleopFuelHigh')) {
        obj['teleopFuelHigh'] = ApiClient.convertToType(data['teleopFuelHigh'], 'Number');
      }
      if (data.hasOwnProperty('teleopRotorPoints')) {
        obj['teleopRotorPoints'] = ApiClient.convertToType(data['teleopRotorPoints'], 'Number');
      }
      if (data.hasOwnProperty('kPaRankingPointAchieved')) {
        obj['kPaRankingPointAchieved'] = ApiClient.convertToType(data['kPaRankingPointAchieved'], 'Boolean');
      }
      if (data.hasOwnProperty('teleopTakeoffPoints')) {
        obj['teleopTakeoffPoints'] = ApiClient.convertToType(data['teleopTakeoffPoints'], 'Number');
      }
      if (data.hasOwnProperty('kPaBonusPoints')) {
        obj['kPaBonusPoints'] = ApiClient.convertToType(data['kPaBonusPoints'], 'Number');
      }
      if (data.hasOwnProperty('rotorBonusPoints')) {
        obj['rotorBonusPoints'] = ApiClient.convertToType(data['rotorBonusPoints'], 'Number');
      }
      if (data.hasOwnProperty('rotor1Engaged')) {
        obj['rotor1Engaged'] = ApiClient.convertToType(data['rotor1Engaged'], 'Boolean');
      }
      if (data.hasOwnProperty('rotor2Engaged')) {
        obj['rotor2Engaged'] = ApiClient.convertToType(data['rotor2Engaged'], 'Boolean');
      }
      if (data.hasOwnProperty('rotor3Engaged')) {
        obj['rotor3Engaged'] = ApiClient.convertToType(data['rotor3Engaged'], 'Boolean');
      }
      if (data.hasOwnProperty('rotor4Engaged')) {
        obj['rotor4Engaged'] = ApiClient.convertToType(data['rotor4Engaged'], 'Boolean');
      }
      if (data.hasOwnProperty('rotorRankingPointAchieved')) {
        obj['rotorRankingPointAchieved'] = ApiClient.convertToType(data['rotorRankingPointAchieved'], 'Boolean');
      }
      if (data.hasOwnProperty('techFoulCount')) {
        obj['techFoulCount'] = ApiClient.convertToType(data['techFoulCount'], 'Number');
      }
      if (data.hasOwnProperty('foulCount')) {
        obj['foulCount'] = ApiClient.convertToType(data['foulCount'], 'Number');
      }
      if (data.hasOwnProperty('touchpadNear')) {
        obj['touchpadNear'] = ApiClient.convertToType(data['touchpadNear'], 'String');
      }
      if (data.hasOwnProperty('touchpadMiddle')) {
        obj['touchpadMiddle'] = ApiClient.convertToType(data['touchpadMiddle'], 'String');
      }
      if (data.hasOwnProperty('touchpadFar')) {
        obj['touchpadFar'] = ApiClient.convertToType(data['touchpadFar'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} autoPoints
   */
  exports.prototype['autoPoints'] = undefined;
  /**
   * @member {Number} teleopPoints
   */
  exports.prototype['teleopPoints'] = undefined;
  /**
   * @member {Number} foulPoints
   */
  exports.prototype['foulPoints'] = undefined;
  /**
   * @member {Number} adjustPoints
   */
  exports.prototype['adjustPoints'] = undefined;
  /**
   * @member {Number} totalPoints
   */
  exports.prototype['totalPoints'] = undefined;
  /**
   * @member {module:model/MatchScoreBreakdown2017Alliance.Robot1AutoEnum} robot1Auto
   */
  exports.prototype['robot1Auto'] = undefined;
  /**
   * @member {module:model/MatchScoreBreakdown2017Alliance.Robot2AutoEnum} robot2Auto
   */
  exports.prototype['robot2Auto'] = undefined;
  /**
   * @member {module:model/MatchScoreBreakdown2017Alliance.Robot3AutoEnum} robot3Auto
   */
  exports.prototype['robot3Auto'] = undefined;
  /**
   * @member {Boolean} rotor1Auto
   */
  exports.prototype['rotor1Auto'] = undefined;
  /**
   * @member {Boolean} rotor2Auto
   */
  exports.prototype['rotor2Auto'] = undefined;
  /**
   * @member {Number} autoFuelLow
   */
  exports.prototype['autoFuelLow'] = undefined;
  /**
   * @member {Number} autoFuelHigh
   */
  exports.prototype['autoFuelHigh'] = undefined;
  /**
   * @member {Number} autoMobilityPoints
   */
  exports.prototype['autoMobilityPoints'] = undefined;
  /**
   * @member {Number} autoRotorPoints
   */
  exports.prototype['autoRotorPoints'] = undefined;
  /**
   * @member {Number} autoFuelPoints
   */
  exports.prototype['autoFuelPoints'] = undefined;
  /**
   * @member {Number} teleopFuelPoints
   */
  exports.prototype['teleopFuelPoints'] = undefined;
  /**
   * @member {Number} teleopFuelLow
   */
  exports.prototype['teleopFuelLow'] = undefined;
  /**
   * @member {Number} teleopFuelHigh
   */
  exports.prototype['teleopFuelHigh'] = undefined;
  /**
   * @member {Number} teleopRotorPoints
   */
  exports.prototype['teleopRotorPoints'] = undefined;
  /**
   * @member {Boolean} kPaRankingPointAchieved
   */
  exports.prototype['kPaRankingPointAchieved'] = undefined;
  /**
   * @member {Number} teleopTakeoffPoints
   */
  exports.prototype['teleopTakeoffPoints'] = undefined;
  /**
   * @member {Number} kPaBonusPoints
   */
  exports.prototype['kPaBonusPoints'] = undefined;
  /**
   * @member {Number} rotorBonusPoints
   */
  exports.prototype['rotorBonusPoints'] = undefined;
  /**
   * @member {Boolean} rotor1Engaged
   */
  exports.prototype['rotor1Engaged'] = undefined;
  /**
   * @member {Boolean} rotor2Engaged
   */
  exports.prototype['rotor2Engaged'] = undefined;
  /**
   * @member {Boolean} rotor3Engaged
   */
  exports.prototype['rotor3Engaged'] = undefined;
  /**
   * @member {Boolean} rotor4Engaged
   */
  exports.prototype['rotor4Engaged'] = undefined;
  /**
   * @member {Boolean} rotorRankingPointAchieved
   */
  exports.prototype['rotorRankingPointAchieved'] = undefined;
  /**
   * @member {Number} techFoulCount
   */
  exports.prototype['techFoulCount'] = undefined;
  /**
   * @member {Number} foulCount
   */
  exports.prototype['foulCount'] = undefined;
  /**
   * @member {String} touchpadNear
   */
  exports.prototype['touchpadNear'] = undefined;
  /**
   * @member {String} touchpadMiddle
   */
  exports.prototype['touchpadMiddle'] = undefined;
  /**
   * @member {String} touchpadFar
   */
  exports.prototype['touchpadFar'] = undefined;


  /**
   * Allowed values for the <code>robot1Auto</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Robot1AutoEnum = {
    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",
    /**
     * value: "Mobility"
     * @const
     */
    "Mobility": "Mobility",
    /**
     * value: "None"
     * @const
     */
    "None": "None"  };

  /**
   * Allowed values for the <code>robot2Auto</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Robot2AutoEnum = {
    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",
    /**
     * value: "Mobility"
     * @const
     */
    "Mobility": "Mobility",
    /**
     * value: "None"
     * @const
     */
    "None": "None"  };

  /**
   * Allowed values for the <code>robot3Auto</code> property.
   * @enum {String}
   * @readonly
   */
  exports.Robot3AutoEnum = {
    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",
    /**
     * value: "Mobility"
     * @const
     */
    "Mobility": "Mobility",
    /**
     * value: "None"
     * @const
     */
    "None": "None"  };


  return exports;
}));


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
    root.TbaApiV3client.MatchScoreBreakdown2019Alliance = factory(root.TbaApiV3client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MatchScoreBreakdown2019Alliance model module.
   * @module model/MatchScoreBreakdown2019Alliance
   * @version 3.04.0
   */

  /**
   * Constructs a new <code>MatchScoreBreakdown2019Alliance</code>.
   * @alias module:model/MatchScoreBreakdown2019Alliance
   * @class
   */
  var exports = function() {
    var _this = this;




















































  };

  /**
   * Constructs a <code>MatchScoreBreakdown2019Alliance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MatchScoreBreakdown2019Alliance} obj Optional instance to populate.
   * @return {module:model/MatchScoreBreakdown2019Alliance} The populated <code>MatchScoreBreakdown2019Alliance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('adjustPoints')) {
        obj['adjustPoints'] = ApiClient.convertToType(data['adjustPoints'], 'Number');
      }
      if (data.hasOwnProperty('autoPoints')) {
        obj['autoPoints'] = ApiClient.convertToType(data['autoPoints'], 'Number');
      }
      if (data.hasOwnProperty('bay1')) {
        obj['bay1'] = ApiClient.convertToType(data['bay1'], 'String');
      }
      if (data.hasOwnProperty('bay2')) {
        obj['bay2'] = ApiClient.convertToType(data['bay2'], 'String');
      }
      if (data.hasOwnProperty('bay3')) {
        obj['bay3'] = ApiClient.convertToType(data['bay3'], 'String');
      }
      if (data.hasOwnProperty('bay4')) {
        obj['bay4'] = ApiClient.convertToType(data['bay4'], 'String');
      }
      if (data.hasOwnProperty('bay5')) {
        obj['bay5'] = ApiClient.convertToType(data['bay5'], 'String');
      }
      if (data.hasOwnProperty('bay6')) {
        obj['bay6'] = ApiClient.convertToType(data['bay6'], 'String');
      }
      if (data.hasOwnProperty('bay7')) {
        obj['bay7'] = ApiClient.convertToType(data['bay7'], 'String');
      }
      if (data.hasOwnProperty('bay8')) {
        obj['bay8'] = ApiClient.convertToType(data['bay8'], 'String');
      }
      if (data.hasOwnProperty('cargoPoints')) {
        obj['cargoPoints'] = ApiClient.convertToType(data['cargoPoints'], 'Number');
      }
      if (data.hasOwnProperty('completeRocketRankingPoint')) {
        obj['completeRocketRankingPoint'] = ApiClient.convertToType(data['completeRocketRankingPoint'], 'Boolean');
      }
      if (data.hasOwnProperty('completedRocketFar')) {
        obj['completedRocketFar'] = ApiClient.convertToType(data['completedRocketFar'], 'Boolean');
      }
      if (data.hasOwnProperty('completedRocketNear')) {
        obj['completedRocketNear'] = ApiClient.convertToType(data['completedRocketNear'], 'Boolean');
      }
      if (data.hasOwnProperty('endgameRobot1')) {
        obj['endgameRobot1'] = ApiClient.convertToType(data['endgameRobot1'], 'String');
      }
      if (data.hasOwnProperty('endgameRobot2')) {
        obj['endgameRobot2'] = ApiClient.convertToType(data['endgameRobot2'], 'String');
      }
      if (data.hasOwnProperty('endgameRobot3')) {
        obj['endgameRobot3'] = ApiClient.convertToType(data['endgameRobot3'], 'String');
      }
      if (data.hasOwnProperty('foulCount')) {
        obj['foulCount'] = ApiClient.convertToType(data['foulCount'], 'Number');
      }
      if (data.hasOwnProperty('foulPoints')) {
        obj['foulPoints'] = ApiClient.convertToType(data['foulPoints'], 'Number');
      }
      if (data.hasOwnProperty('habClimbPoints')) {
        obj['habClimbPoints'] = ApiClient.convertToType(data['habClimbPoints'], 'Number');
      }
      if (data.hasOwnProperty('habDockingRankingPoint')) {
        obj['habDockingRankingPoint'] = ApiClient.convertToType(data['habDockingRankingPoint'], 'Boolean');
      }
      if (data.hasOwnProperty('habLineRobot1')) {
        obj['habLineRobot1'] = ApiClient.convertToType(data['habLineRobot1'], 'String');
      }
      if (data.hasOwnProperty('habLineRobot2')) {
        obj['habLineRobot2'] = ApiClient.convertToType(data['habLineRobot2'], 'String');
      }
      if (data.hasOwnProperty('habLineRobot3')) {
        obj['habLineRobot3'] = ApiClient.convertToType(data['habLineRobot3'], 'String');
      }
      if (data.hasOwnProperty('hatchPanelPoints')) {
        obj['hatchPanelPoints'] = ApiClient.convertToType(data['hatchPanelPoints'], 'Number');
      }
      if (data.hasOwnProperty('lowLeftRocketFar')) {
        obj['lowLeftRocketFar'] = ApiClient.convertToType(data['lowLeftRocketFar'], 'String');
      }
      if (data.hasOwnProperty('lowLeftRocketNear')) {
        obj['lowLeftRocketNear'] = ApiClient.convertToType(data['lowLeftRocketNear'], 'String');
      }
      if (data.hasOwnProperty('lowRightRocketFar')) {
        obj['lowRightRocketFar'] = ApiClient.convertToType(data['lowRightRocketFar'], 'String');
      }
      if (data.hasOwnProperty('lowRightRocketNear')) {
        obj['lowRightRocketNear'] = ApiClient.convertToType(data['lowRightRocketNear'], 'String');
      }
      if (data.hasOwnProperty('midLeftRocketFar')) {
        obj['midLeftRocketFar'] = ApiClient.convertToType(data['midLeftRocketFar'], 'String');
      }
      if (data.hasOwnProperty('midLeftRocketNear')) {
        obj['midLeftRocketNear'] = ApiClient.convertToType(data['midLeftRocketNear'], 'String');
      }
      if (data.hasOwnProperty('midRightRocketFar')) {
        obj['midRightRocketFar'] = ApiClient.convertToType(data['midRightRocketFar'], 'String');
      }
      if (data.hasOwnProperty('midRightRocketNear')) {
        obj['midRightRocketNear'] = ApiClient.convertToType(data['midRightRocketNear'], 'String');
      }
      if (data.hasOwnProperty('preMatchBay1')) {
        obj['preMatchBay1'] = ApiClient.convertToType(data['preMatchBay1'], 'String');
      }
      if (data.hasOwnProperty('preMatchBay2')) {
        obj['preMatchBay2'] = ApiClient.convertToType(data['preMatchBay2'], 'String');
      }
      if (data.hasOwnProperty('preMatchBay3')) {
        obj['preMatchBay3'] = ApiClient.convertToType(data['preMatchBay3'], 'String');
      }
      if (data.hasOwnProperty('preMatchBay6')) {
        obj['preMatchBay6'] = ApiClient.convertToType(data['preMatchBay6'], 'String');
      }
      if (data.hasOwnProperty('preMatchBay7')) {
        obj['preMatchBay7'] = ApiClient.convertToType(data['preMatchBay7'], 'String');
      }
      if (data.hasOwnProperty('preMatchBay8')) {
        obj['preMatchBay8'] = ApiClient.convertToType(data['preMatchBay8'], 'String');
      }
      if (data.hasOwnProperty('preMatchLevelRobot1')) {
        obj['preMatchLevelRobot1'] = ApiClient.convertToType(data['preMatchLevelRobot1'], 'String');
      }
      if (data.hasOwnProperty('preMatchLevelRobot2')) {
        obj['preMatchLevelRobot2'] = ApiClient.convertToType(data['preMatchLevelRobot2'], 'String');
      }
      if (data.hasOwnProperty('preMatchLevelRobot3')) {
        obj['preMatchLevelRobot3'] = ApiClient.convertToType(data['preMatchLevelRobot3'], 'String');
      }
      if (data.hasOwnProperty('rp')) {
        obj['rp'] = ApiClient.convertToType(data['rp'], 'Number');
      }
      if (data.hasOwnProperty('sandStormBonusPoints')) {
        obj['sandStormBonusPoints'] = ApiClient.convertToType(data['sandStormBonusPoints'], 'Number');
      }
      if (data.hasOwnProperty('techFoulCount')) {
        obj['techFoulCount'] = ApiClient.convertToType(data['techFoulCount'], 'Number');
      }
      if (data.hasOwnProperty('teleopPoints')) {
        obj['teleopPoints'] = ApiClient.convertToType(data['teleopPoints'], 'Number');
      }
      if (data.hasOwnProperty('topLeftRocketFar')) {
        obj['topLeftRocketFar'] = ApiClient.convertToType(data['topLeftRocketFar'], 'String');
      }
      if (data.hasOwnProperty('topLeftRocketNear')) {
        obj['topLeftRocketNear'] = ApiClient.convertToType(data['topLeftRocketNear'], 'String');
      }
      if (data.hasOwnProperty('topRightRocketFar')) {
        obj['topRightRocketFar'] = ApiClient.convertToType(data['topRightRocketFar'], 'String');
      }
      if (data.hasOwnProperty('topRightRocketNear')) {
        obj['topRightRocketNear'] = ApiClient.convertToType(data['topRightRocketNear'], 'String');
      }
      if (data.hasOwnProperty('totalPoints')) {
        obj['totalPoints'] = ApiClient.convertToType(data['totalPoints'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} adjustPoints
   */
  exports.prototype['adjustPoints'] = undefined;
  /**
   * @member {Number} autoPoints
   */
  exports.prototype['autoPoints'] = undefined;
  /**
   * @member {String} bay1
   */
  exports.prototype['bay1'] = undefined;
  /**
   * @member {String} bay2
   */
  exports.prototype['bay2'] = undefined;
  /**
   * @member {String} bay3
   */
  exports.prototype['bay3'] = undefined;
  /**
   * @member {String} bay4
   */
  exports.prototype['bay4'] = undefined;
  /**
   * @member {String} bay5
   */
  exports.prototype['bay5'] = undefined;
  /**
   * @member {String} bay6
   */
  exports.prototype['bay6'] = undefined;
  /**
   * @member {String} bay7
   */
  exports.prototype['bay7'] = undefined;
  /**
   * @member {String} bay8
   */
  exports.prototype['bay8'] = undefined;
  /**
   * @member {Number} cargoPoints
   */
  exports.prototype['cargoPoints'] = undefined;
  /**
   * @member {Boolean} completeRocketRankingPoint
   */
  exports.prototype['completeRocketRankingPoint'] = undefined;
  /**
   * @member {Boolean} completedRocketFar
   */
  exports.prototype['completedRocketFar'] = undefined;
  /**
   * @member {Boolean} completedRocketNear
   */
  exports.prototype['completedRocketNear'] = undefined;
  /**
   * @member {String} endgameRobot1
   */
  exports.prototype['endgameRobot1'] = undefined;
  /**
   * @member {String} endgameRobot2
   */
  exports.prototype['endgameRobot2'] = undefined;
  /**
   * @member {String} endgameRobot3
   */
  exports.prototype['endgameRobot3'] = undefined;
  /**
   * @member {Number} foulCount
   */
  exports.prototype['foulCount'] = undefined;
  /**
   * @member {Number} foulPoints
   */
  exports.prototype['foulPoints'] = undefined;
  /**
   * @member {Number} habClimbPoints
   */
  exports.prototype['habClimbPoints'] = undefined;
  /**
   * @member {Boolean} habDockingRankingPoint
   */
  exports.prototype['habDockingRankingPoint'] = undefined;
  /**
   * @member {String} habLineRobot1
   */
  exports.prototype['habLineRobot1'] = undefined;
  /**
   * @member {String} habLineRobot2
   */
  exports.prototype['habLineRobot2'] = undefined;
  /**
   * @member {String} habLineRobot3
   */
  exports.prototype['habLineRobot3'] = undefined;
  /**
   * @member {Number} hatchPanelPoints
   */
  exports.prototype['hatchPanelPoints'] = undefined;
  /**
   * @member {String} lowLeftRocketFar
   */
  exports.prototype['lowLeftRocketFar'] = undefined;
  /**
   * @member {String} lowLeftRocketNear
   */
  exports.prototype['lowLeftRocketNear'] = undefined;
  /**
   * @member {String} lowRightRocketFar
   */
  exports.prototype['lowRightRocketFar'] = undefined;
  /**
   * @member {String} lowRightRocketNear
   */
  exports.prototype['lowRightRocketNear'] = undefined;
  /**
   * @member {String} midLeftRocketFar
   */
  exports.prototype['midLeftRocketFar'] = undefined;
  /**
   * @member {String} midLeftRocketNear
   */
  exports.prototype['midLeftRocketNear'] = undefined;
  /**
   * @member {String} midRightRocketFar
   */
  exports.prototype['midRightRocketFar'] = undefined;
  /**
   * @member {String} midRightRocketNear
   */
  exports.prototype['midRightRocketNear'] = undefined;
  /**
   * @member {String} preMatchBay1
   */
  exports.prototype['preMatchBay1'] = undefined;
  /**
   * @member {String} preMatchBay2
   */
  exports.prototype['preMatchBay2'] = undefined;
  /**
   * @member {String} preMatchBay3
   */
  exports.prototype['preMatchBay3'] = undefined;
  /**
   * @member {String} preMatchBay6
   */
  exports.prototype['preMatchBay6'] = undefined;
  /**
   * @member {String} preMatchBay7
   */
  exports.prototype['preMatchBay7'] = undefined;
  /**
   * @member {String} preMatchBay8
   */
  exports.prototype['preMatchBay8'] = undefined;
  /**
   * @member {String} preMatchLevelRobot1
   */
  exports.prototype['preMatchLevelRobot1'] = undefined;
  /**
   * @member {String} preMatchLevelRobot2
   */
  exports.prototype['preMatchLevelRobot2'] = undefined;
  /**
   * @member {String} preMatchLevelRobot3
   */
  exports.prototype['preMatchLevelRobot3'] = undefined;
  /**
   * @member {Number} rp
   */
  exports.prototype['rp'] = undefined;
  /**
   * @member {Number} sandStormBonusPoints
   */
  exports.prototype['sandStormBonusPoints'] = undefined;
  /**
   * @member {Number} techFoulCount
   */
  exports.prototype['techFoulCount'] = undefined;
  /**
   * @member {Number} teleopPoints
   */
  exports.prototype['teleopPoints'] = undefined;
  /**
   * @member {String} topLeftRocketFar
   */
  exports.prototype['topLeftRocketFar'] = undefined;
  /**
   * @member {String} topLeftRocketNear
   */
  exports.prototype['topLeftRocketNear'] = undefined;
  /**
   * @member {String} topRightRocketFar
   */
  exports.prototype['topRightRocketFar'] = undefined;
  /**
   * @member {String} topRightRocketNear
   */
  exports.prototype['topRightRocketNear'] = undefined;
  /**
   * @member {Number} totalPoints
   */
  exports.prototype['totalPoints'] = undefined;



  return exports;
}));


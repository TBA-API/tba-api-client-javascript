/**
 * The Blue Alliance API v3
 * # Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
 *
 * The version of the OpenAPI document: 3.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MatchScoreBreakdown2019Alliance model module.
 * @module model/MatchScoreBreakdown2019Alliance
 * @version 3.5
 */
class MatchScoreBreakdown2019Alliance {
    /**
     * Constructs a new <code>MatchScoreBreakdown2019Alliance</code>.
     * @alias module:model/MatchScoreBreakdown2019Alliance
     */
    constructor() { 
        
        MatchScoreBreakdown2019Alliance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MatchScoreBreakdown2019Alliance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MatchScoreBreakdown2019Alliance} obj Optional instance to populate.
     * @return {module:model/MatchScoreBreakdown2019Alliance} The populated <code>MatchScoreBreakdown2019Alliance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MatchScoreBreakdown2019Alliance();

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


}

/**
 * @member {Number} adjustPoints
 */
MatchScoreBreakdown2019Alliance.prototype['adjustPoints'] = undefined;

/**
 * @member {Number} autoPoints
 */
MatchScoreBreakdown2019Alliance.prototype['autoPoints'] = undefined;

/**
 * @member {String} bay1
 */
MatchScoreBreakdown2019Alliance.prototype['bay1'] = undefined;

/**
 * @member {String} bay2
 */
MatchScoreBreakdown2019Alliance.prototype['bay2'] = undefined;

/**
 * @member {String} bay3
 */
MatchScoreBreakdown2019Alliance.prototype['bay3'] = undefined;

/**
 * @member {String} bay4
 */
MatchScoreBreakdown2019Alliance.prototype['bay4'] = undefined;

/**
 * @member {String} bay5
 */
MatchScoreBreakdown2019Alliance.prototype['bay5'] = undefined;

/**
 * @member {String} bay6
 */
MatchScoreBreakdown2019Alliance.prototype['bay6'] = undefined;

/**
 * @member {String} bay7
 */
MatchScoreBreakdown2019Alliance.prototype['bay7'] = undefined;

/**
 * @member {String} bay8
 */
MatchScoreBreakdown2019Alliance.prototype['bay8'] = undefined;

/**
 * @member {Number} cargoPoints
 */
MatchScoreBreakdown2019Alliance.prototype['cargoPoints'] = undefined;

/**
 * @member {Boolean} completeRocketRankingPoint
 */
MatchScoreBreakdown2019Alliance.prototype['completeRocketRankingPoint'] = undefined;

/**
 * @member {Boolean} completedRocketFar
 */
MatchScoreBreakdown2019Alliance.prototype['completedRocketFar'] = undefined;

/**
 * @member {Boolean} completedRocketNear
 */
MatchScoreBreakdown2019Alliance.prototype['completedRocketNear'] = undefined;

/**
 * @member {String} endgameRobot1
 */
MatchScoreBreakdown2019Alliance.prototype['endgameRobot1'] = undefined;

/**
 * @member {String} endgameRobot2
 */
MatchScoreBreakdown2019Alliance.prototype['endgameRobot2'] = undefined;

/**
 * @member {String} endgameRobot3
 */
MatchScoreBreakdown2019Alliance.prototype['endgameRobot3'] = undefined;

/**
 * @member {Number} foulCount
 */
MatchScoreBreakdown2019Alliance.prototype['foulCount'] = undefined;

/**
 * @member {Number} foulPoints
 */
MatchScoreBreakdown2019Alliance.prototype['foulPoints'] = undefined;

/**
 * @member {Number} habClimbPoints
 */
MatchScoreBreakdown2019Alliance.prototype['habClimbPoints'] = undefined;

/**
 * @member {Boolean} habDockingRankingPoint
 */
MatchScoreBreakdown2019Alliance.prototype['habDockingRankingPoint'] = undefined;

/**
 * @member {String} habLineRobot1
 */
MatchScoreBreakdown2019Alliance.prototype['habLineRobot1'] = undefined;

/**
 * @member {String} habLineRobot2
 */
MatchScoreBreakdown2019Alliance.prototype['habLineRobot2'] = undefined;

/**
 * @member {String} habLineRobot3
 */
MatchScoreBreakdown2019Alliance.prototype['habLineRobot3'] = undefined;

/**
 * @member {Number} hatchPanelPoints
 */
MatchScoreBreakdown2019Alliance.prototype['hatchPanelPoints'] = undefined;

/**
 * @member {String} lowLeftRocketFar
 */
MatchScoreBreakdown2019Alliance.prototype['lowLeftRocketFar'] = undefined;

/**
 * @member {String} lowLeftRocketNear
 */
MatchScoreBreakdown2019Alliance.prototype['lowLeftRocketNear'] = undefined;

/**
 * @member {String} lowRightRocketFar
 */
MatchScoreBreakdown2019Alliance.prototype['lowRightRocketFar'] = undefined;

/**
 * @member {String} lowRightRocketNear
 */
MatchScoreBreakdown2019Alliance.prototype['lowRightRocketNear'] = undefined;

/**
 * @member {String} midLeftRocketFar
 */
MatchScoreBreakdown2019Alliance.prototype['midLeftRocketFar'] = undefined;

/**
 * @member {String} midLeftRocketNear
 */
MatchScoreBreakdown2019Alliance.prototype['midLeftRocketNear'] = undefined;

/**
 * @member {String} midRightRocketFar
 */
MatchScoreBreakdown2019Alliance.prototype['midRightRocketFar'] = undefined;

/**
 * @member {String} midRightRocketNear
 */
MatchScoreBreakdown2019Alliance.prototype['midRightRocketNear'] = undefined;

/**
 * @member {String} preMatchBay1
 */
MatchScoreBreakdown2019Alliance.prototype['preMatchBay1'] = undefined;

/**
 * @member {String} preMatchBay2
 */
MatchScoreBreakdown2019Alliance.prototype['preMatchBay2'] = undefined;

/**
 * @member {String} preMatchBay3
 */
MatchScoreBreakdown2019Alliance.prototype['preMatchBay3'] = undefined;

/**
 * @member {String} preMatchBay6
 */
MatchScoreBreakdown2019Alliance.prototype['preMatchBay6'] = undefined;

/**
 * @member {String} preMatchBay7
 */
MatchScoreBreakdown2019Alliance.prototype['preMatchBay7'] = undefined;

/**
 * @member {String} preMatchBay8
 */
MatchScoreBreakdown2019Alliance.prototype['preMatchBay8'] = undefined;

/**
 * @member {String} preMatchLevelRobot1
 */
MatchScoreBreakdown2019Alliance.prototype['preMatchLevelRobot1'] = undefined;

/**
 * @member {String} preMatchLevelRobot2
 */
MatchScoreBreakdown2019Alliance.prototype['preMatchLevelRobot2'] = undefined;

/**
 * @member {String} preMatchLevelRobot3
 */
MatchScoreBreakdown2019Alliance.prototype['preMatchLevelRobot3'] = undefined;

/**
 * @member {Number} rp
 */
MatchScoreBreakdown2019Alliance.prototype['rp'] = undefined;

/**
 * @member {Number} sandStormBonusPoints
 */
MatchScoreBreakdown2019Alliance.prototype['sandStormBonusPoints'] = undefined;

/**
 * @member {Number} techFoulCount
 */
MatchScoreBreakdown2019Alliance.prototype['techFoulCount'] = undefined;

/**
 * @member {Number} teleopPoints
 */
MatchScoreBreakdown2019Alliance.prototype['teleopPoints'] = undefined;

/**
 * @member {String} topLeftRocketFar
 */
MatchScoreBreakdown2019Alliance.prototype['topLeftRocketFar'] = undefined;

/**
 * @member {String} topLeftRocketNear
 */
MatchScoreBreakdown2019Alliance.prototype['topLeftRocketNear'] = undefined;

/**
 * @member {String} topRightRocketFar
 */
MatchScoreBreakdown2019Alliance.prototype['topRightRocketFar'] = undefined;

/**
 * @member {String} topRightRocketNear
 */
MatchScoreBreakdown2019Alliance.prototype['topRightRocketNear'] = undefined;

/**
 * @member {Number} totalPoints
 */
MatchScoreBreakdown2019Alliance.prototype['totalPoints'] = undefined;






export default MatchScoreBreakdown2019Alliance;


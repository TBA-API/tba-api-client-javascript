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
 * The MatchScoreBreakdown2018Alliance model module.
 * @module model/MatchScoreBreakdown2018Alliance
 * @version 3.5
 */
class MatchScoreBreakdown2018Alliance {
    /**
     * Constructs a new <code>MatchScoreBreakdown2018Alliance</code>.
     * @alias module:model/MatchScoreBreakdown2018Alliance
     */
    constructor() { 
        
        MatchScoreBreakdown2018Alliance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MatchScoreBreakdown2018Alliance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MatchScoreBreakdown2018Alliance} obj Optional instance to populate.
     * @return {module:model/MatchScoreBreakdown2018Alliance} The populated <code>MatchScoreBreakdown2018Alliance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MatchScoreBreakdown2018Alliance();

            if (data.hasOwnProperty('adjustPoints')) {
                obj['adjustPoints'] = ApiClient.convertToType(data['adjustPoints'], 'Number');
            }
            if (data.hasOwnProperty('autoOwnershipPoints')) {
                obj['autoOwnershipPoints'] = ApiClient.convertToType(data['autoOwnershipPoints'], 'Number');
            }
            if (data.hasOwnProperty('autoPoints')) {
                obj['autoPoints'] = ApiClient.convertToType(data['autoPoints'], 'Number');
            }
            if (data.hasOwnProperty('autoQuestRankingPoint')) {
                obj['autoQuestRankingPoint'] = ApiClient.convertToType(data['autoQuestRankingPoint'], 'Boolean');
            }
            if (data.hasOwnProperty('autoRobot1')) {
                obj['autoRobot1'] = ApiClient.convertToType(data['autoRobot1'], 'String');
            }
            if (data.hasOwnProperty('autoRobot2')) {
                obj['autoRobot2'] = ApiClient.convertToType(data['autoRobot2'], 'String');
            }
            if (data.hasOwnProperty('autoRobot3')) {
                obj['autoRobot3'] = ApiClient.convertToType(data['autoRobot3'], 'String');
            }
            if (data.hasOwnProperty('autoRunPoints')) {
                obj['autoRunPoints'] = ApiClient.convertToType(data['autoRunPoints'], 'Number');
            }
            if (data.hasOwnProperty('autoScaleOwnershipSec')) {
                obj['autoScaleOwnershipSec'] = ApiClient.convertToType(data['autoScaleOwnershipSec'], 'Number');
            }
            if (data.hasOwnProperty('autoSwitchAtZero')) {
                obj['autoSwitchAtZero'] = ApiClient.convertToType(data['autoSwitchAtZero'], 'Boolean');
            }
            if (data.hasOwnProperty('autoSwitchOwnershipSec')) {
                obj['autoSwitchOwnershipSec'] = ApiClient.convertToType(data['autoSwitchOwnershipSec'], 'Number');
            }
            if (data.hasOwnProperty('endgamePoints')) {
                obj['endgamePoints'] = ApiClient.convertToType(data['endgamePoints'], 'Number');
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
            if (data.hasOwnProperty('faceTheBossRankingPoint')) {
                obj['faceTheBossRankingPoint'] = ApiClient.convertToType(data['faceTheBossRankingPoint'], 'Boolean');
            }
            if (data.hasOwnProperty('foulCount')) {
                obj['foulCount'] = ApiClient.convertToType(data['foulCount'], 'Number');
            }
            if (data.hasOwnProperty('foulPoints')) {
                obj['foulPoints'] = ApiClient.convertToType(data['foulPoints'], 'Number');
            }
            if (data.hasOwnProperty('rp')) {
                obj['rp'] = ApiClient.convertToType(data['rp'], 'Number');
            }
            if (data.hasOwnProperty('techFoulCount')) {
                obj['techFoulCount'] = ApiClient.convertToType(data['techFoulCount'], 'Number');
            }
            if (data.hasOwnProperty('teleopOwnershipPoints')) {
                obj['teleopOwnershipPoints'] = ApiClient.convertToType(data['teleopOwnershipPoints'], 'Number');
            }
            if (data.hasOwnProperty('teleopPoints')) {
                obj['teleopPoints'] = ApiClient.convertToType(data['teleopPoints'], 'Number');
            }
            if (data.hasOwnProperty('teleopScaleBoostSec')) {
                obj['teleopScaleBoostSec'] = ApiClient.convertToType(data['teleopScaleBoostSec'], 'Number');
            }
            if (data.hasOwnProperty('teleopScaleForceSec')) {
                obj['teleopScaleForceSec'] = ApiClient.convertToType(data['teleopScaleForceSec'], 'Number');
            }
            if (data.hasOwnProperty('teleopScaleOwnershipSec')) {
                obj['teleopScaleOwnershipSec'] = ApiClient.convertToType(data['teleopScaleOwnershipSec'], 'Number');
            }
            if (data.hasOwnProperty('teleopSwitchBoostSec')) {
                obj['teleopSwitchBoostSec'] = ApiClient.convertToType(data['teleopSwitchBoostSec'], 'Number');
            }
            if (data.hasOwnProperty('teleopSwitchForceSec')) {
                obj['teleopSwitchForceSec'] = ApiClient.convertToType(data['teleopSwitchForceSec'], 'Number');
            }
            if (data.hasOwnProperty('teleopSwitchOwnershipSec')) {
                obj['teleopSwitchOwnershipSec'] = ApiClient.convertToType(data['teleopSwitchOwnershipSec'], 'Number');
            }
            if (data.hasOwnProperty('totalPoints')) {
                obj['totalPoints'] = ApiClient.convertToType(data['totalPoints'], 'Number');
            }
            if (data.hasOwnProperty('vaultBoostPlayed')) {
                obj['vaultBoostPlayed'] = ApiClient.convertToType(data['vaultBoostPlayed'], 'Number');
            }
            if (data.hasOwnProperty('vaultBoostTotal')) {
                obj['vaultBoostTotal'] = ApiClient.convertToType(data['vaultBoostTotal'], 'Number');
            }
            if (data.hasOwnProperty('vaultForcePlayed')) {
                obj['vaultForcePlayed'] = ApiClient.convertToType(data['vaultForcePlayed'], 'Number');
            }
            if (data.hasOwnProperty('vaultForceTotal')) {
                obj['vaultForceTotal'] = ApiClient.convertToType(data['vaultForceTotal'], 'Number');
            }
            if (data.hasOwnProperty('vaultLevitatePlayed')) {
                obj['vaultLevitatePlayed'] = ApiClient.convertToType(data['vaultLevitatePlayed'], 'Number');
            }
            if (data.hasOwnProperty('vaultLevitateTotal')) {
                obj['vaultLevitateTotal'] = ApiClient.convertToType(data['vaultLevitateTotal'], 'Number');
            }
            if (data.hasOwnProperty('vaultPoints')) {
                obj['vaultPoints'] = ApiClient.convertToType(data['vaultPoints'], 'Number');
            }
            if (data.hasOwnProperty('tba_gameData')) {
                obj['tba_gameData'] = ApiClient.convertToType(data['tba_gameData'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} adjustPoints
 */
MatchScoreBreakdown2018Alliance.prototype['adjustPoints'] = undefined;

/**
 * @member {Number} autoOwnershipPoints
 */
MatchScoreBreakdown2018Alliance.prototype['autoOwnershipPoints'] = undefined;

/**
 * @member {Number} autoPoints
 */
MatchScoreBreakdown2018Alliance.prototype['autoPoints'] = undefined;

/**
 * @member {Boolean} autoQuestRankingPoint
 */
MatchScoreBreakdown2018Alliance.prototype['autoQuestRankingPoint'] = undefined;

/**
 * @member {String} autoRobot1
 */
MatchScoreBreakdown2018Alliance.prototype['autoRobot1'] = undefined;

/**
 * @member {String} autoRobot2
 */
MatchScoreBreakdown2018Alliance.prototype['autoRobot2'] = undefined;

/**
 * @member {String} autoRobot3
 */
MatchScoreBreakdown2018Alliance.prototype['autoRobot3'] = undefined;

/**
 * @member {Number} autoRunPoints
 */
MatchScoreBreakdown2018Alliance.prototype['autoRunPoints'] = undefined;

/**
 * @member {Number} autoScaleOwnershipSec
 */
MatchScoreBreakdown2018Alliance.prototype['autoScaleOwnershipSec'] = undefined;

/**
 * @member {Boolean} autoSwitchAtZero
 */
MatchScoreBreakdown2018Alliance.prototype['autoSwitchAtZero'] = undefined;

/**
 * @member {Number} autoSwitchOwnershipSec
 */
MatchScoreBreakdown2018Alliance.prototype['autoSwitchOwnershipSec'] = undefined;

/**
 * @member {Number} endgamePoints
 */
MatchScoreBreakdown2018Alliance.prototype['endgamePoints'] = undefined;

/**
 * @member {String} endgameRobot1
 */
MatchScoreBreakdown2018Alliance.prototype['endgameRobot1'] = undefined;

/**
 * @member {String} endgameRobot2
 */
MatchScoreBreakdown2018Alliance.prototype['endgameRobot2'] = undefined;

/**
 * @member {String} endgameRobot3
 */
MatchScoreBreakdown2018Alliance.prototype['endgameRobot3'] = undefined;

/**
 * @member {Boolean} faceTheBossRankingPoint
 */
MatchScoreBreakdown2018Alliance.prototype['faceTheBossRankingPoint'] = undefined;

/**
 * @member {Number} foulCount
 */
MatchScoreBreakdown2018Alliance.prototype['foulCount'] = undefined;

/**
 * @member {Number} foulPoints
 */
MatchScoreBreakdown2018Alliance.prototype['foulPoints'] = undefined;

/**
 * @member {Number} rp
 */
MatchScoreBreakdown2018Alliance.prototype['rp'] = undefined;

/**
 * @member {Number} techFoulCount
 */
MatchScoreBreakdown2018Alliance.prototype['techFoulCount'] = undefined;

/**
 * @member {Number} teleopOwnershipPoints
 */
MatchScoreBreakdown2018Alliance.prototype['teleopOwnershipPoints'] = undefined;

/**
 * @member {Number} teleopPoints
 */
MatchScoreBreakdown2018Alliance.prototype['teleopPoints'] = undefined;

/**
 * @member {Number} teleopScaleBoostSec
 */
MatchScoreBreakdown2018Alliance.prototype['teleopScaleBoostSec'] = undefined;

/**
 * @member {Number} teleopScaleForceSec
 */
MatchScoreBreakdown2018Alliance.prototype['teleopScaleForceSec'] = undefined;

/**
 * @member {Number} teleopScaleOwnershipSec
 */
MatchScoreBreakdown2018Alliance.prototype['teleopScaleOwnershipSec'] = undefined;

/**
 * @member {Number} teleopSwitchBoostSec
 */
MatchScoreBreakdown2018Alliance.prototype['teleopSwitchBoostSec'] = undefined;

/**
 * @member {Number} teleopSwitchForceSec
 */
MatchScoreBreakdown2018Alliance.prototype['teleopSwitchForceSec'] = undefined;

/**
 * @member {Number} teleopSwitchOwnershipSec
 */
MatchScoreBreakdown2018Alliance.prototype['teleopSwitchOwnershipSec'] = undefined;

/**
 * @member {Number} totalPoints
 */
MatchScoreBreakdown2018Alliance.prototype['totalPoints'] = undefined;

/**
 * @member {Number} vaultBoostPlayed
 */
MatchScoreBreakdown2018Alliance.prototype['vaultBoostPlayed'] = undefined;

/**
 * @member {Number} vaultBoostTotal
 */
MatchScoreBreakdown2018Alliance.prototype['vaultBoostTotal'] = undefined;

/**
 * @member {Number} vaultForcePlayed
 */
MatchScoreBreakdown2018Alliance.prototype['vaultForcePlayed'] = undefined;

/**
 * @member {Number} vaultForceTotal
 */
MatchScoreBreakdown2018Alliance.prototype['vaultForceTotal'] = undefined;

/**
 * @member {Number} vaultLevitatePlayed
 */
MatchScoreBreakdown2018Alliance.prototype['vaultLevitatePlayed'] = undefined;

/**
 * @member {Number} vaultLevitateTotal
 */
MatchScoreBreakdown2018Alliance.prototype['vaultLevitateTotal'] = undefined;

/**
 * @member {Number} vaultPoints
 */
MatchScoreBreakdown2018Alliance.prototype['vaultPoints'] = undefined;

/**
 * Unofficial TBA-computed value of the FMS provided GameData given to the alliance teams at the start of the match. 3 Character String containing `L` and `R` only. The first character represents the near switch, the 2nd the scale, and the 3rd the far, opposing, switch from the alliance's perspective. An `L` in a position indicates the platform on the left will be lit for the alliance while an `R` will indicate the right platform will be lit for the alliance. See also [WPI Screen Steps](https://wpilib.screenstepslive.com/s/currentCS/m/getting_started/l/826278-2018-game-data-details).
 * @member {String} tba_gameData
 */
MatchScoreBreakdown2018Alliance.prototype['tba_gameData'] = undefined;






export default MatchScoreBreakdown2018Alliance;


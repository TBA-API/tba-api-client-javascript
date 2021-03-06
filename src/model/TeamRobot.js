/**
 * The Blue Alliance API v3
 * # Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TeamRobot model module.
 * @module model/TeamRobot
 * @version 3.8.0
 */
class TeamRobot {
    /**
     * Constructs a new <code>TeamRobot</code>.
     * @alias module:model/TeamRobot
     * @param year {Number} Year this robot competed in.
     * @param robotName {String} Name of the robot as provided by the team.
     * @param key {String} Internal TBA identifier for this robot.
     * @param teamKey {String} TBA team key for this robot.
     */
    constructor(year, robotName, key, teamKey) { 
        
        TeamRobot.initialize(this, year, robotName, key, teamKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, year, robotName, key, teamKey) { 
        obj['year'] = year;
        obj['robot_name'] = robotName;
        obj['key'] = key;
        obj['team_key'] = teamKey;
    }

    /**
     * Constructs a <code>TeamRobot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamRobot} obj Optional instance to populate.
     * @return {module:model/TeamRobot} The populated <code>TeamRobot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamRobot();

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


}

/**
 * Year this robot competed in.
 * @member {Number} year
 */
TeamRobot.prototype['year'] = undefined;

/**
 * Name of the robot as provided by the team.
 * @member {String} robot_name
 */
TeamRobot.prototype['robot_name'] = undefined;

/**
 * Internal TBA identifier for this robot.
 * @member {String} key
 */
TeamRobot.prototype['key'] = undefined;

/**
 * TBA team key for this robot.
 * @member {String} team_key
 */
TeamRobot.prototype['team_key'] = undefined;






export default TeamRobot;


/**
 * The Blue Alliance API v3
 * # Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
 *
 * The version of the OpenAPI document: 3.04.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WLTRecord from './WLTRecord';

/**
 * The TeamEventStatusPlayoff model module.
 * @module model/TeamEventStatusPlayoff
 * @version 3.04.1
 */
class TeamEventStatusPlayoff {
    /**
     * Constructs a new <code>TeamEventStatusPlayoff</code>.
     * Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun.
     * @alias module:model/TeamEventStatusPlayoff
     */
    constructor() { 
        
        TeamEventStatusPlayoff.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamEventStatusPlayoff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamEventStatusPlayoff} obj Optional instance to populate.
     * @return {module:model/TeamEventStatusPlayoff} The populated <code>TeamEventStatusPlayoff</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamEventStatusPlayoff();

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


}

/**
 * The highest playoff level the team reached.
 * @member {module:model/TeamEventStatusPlayoff.LevelEnum} level
 */
TeamEventStatusPlayoff.prototype['level'] = undefined;

/**
 * @member {module:model/WLTRecord} current_level_record
 */
TeamEventStatusPlayoff.prototype['current_level_record'] = undefined;

/**
 * @member {module:model/WLTRecord} record
 */
TeamEventStatusPlayoff.prototype['record'] = undefined;

/**
 * Current competition status for the playoffs.
 * @member {module:model/TeamEventStatusPlayoff.StatusEnum} status
 */
TeamEventStatusPlayoff.prototype['status'] = undefined;

/**
 * The average match score during playoffs. Year specific. May be null if not relevant for a given year.
 * @member {Number} playoff_average
 */
TeamEventStatusPlayoff.prototype['playoff_average'] = undefined;





/**
 * Allowed values for the <code>level</code> property.
 * @enum {String}
 * @readonly
 */
TeamEventStatusPlayoff['LevelEnum'] = {

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
    "f": "f"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
TeamEventStatusPlayoff['StatusEnum'] = {

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
    "playing": "playing"
};



export default TeamEventStatusPlayoff;


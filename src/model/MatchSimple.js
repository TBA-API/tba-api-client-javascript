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
import MatchSimpleAlliances from './MatchSimpleAlliances';

/**
 * The MatchSimple model module.
 * @module model/MatchSimple
 * @version 3.8.0
 */
class MatchSimple {
    /**
     * Constructs a new <code>MatchSimple</code>.
     * @alias module:model/MatchSimple
     * @param key {String} TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may append the competition level if more than one match in required per set.
     * @param compLevel {module:model/MatchSimple.CompLevelEnum} The competition level the match was played at.
     * @param setNumber {Number} The set number in a series of matches where more than one match is required in the match series.
     * @param matchNumber {Number} The match number of the match in the competition level.
     * @param eventKey {String} Event key of the event the match was played at.
     */
    constructor(key, compLevel, setNumber, matchNumber, eventKey) { 
        
        MatchSimple.initialize(this, key, compLevel, setNumber, matchNumber, eventKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, compLevel, setNumber, matchNumber, eventKey) { 
        obj['key'] = key;
        obj['comp_level'] = compLevel;
        obj['set_number'] = setNumber;
        obj['match_number'] = matchNumber;
        obj['event_key'] = eventKey;
    }

    /**
     * Constructs a <code>MatchSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MatchSimple} obj Optional instance to populate.
     * @return {module:model/MatchSimple} The populated <code>MatchSimple</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MatchSimple();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('comp_level')) {
                obj['comp_level'] = ApiClient.convertToType(data['comp_level'], 'String');
            }
            if (data.hasOwnProperty('set_number')) {
                obj['set_number'] = ApiClient.convertToType(data['set_number'], 'Number');
            }
            if (data.hasOwnProperty('match_number')) {
                obj['match_number'] = ApiClient.convertToType(data['match_number'], 'Number');
            }
            if (data.hasOwnProperty('alliances')) {
                obj['alliances'] = MatchSimpleAlliances.constructFromObject(data['alliances']);
            }
            if (data.hasOwnProperty('winning_alliance')) {
                obj['winning_alliance'] = ApiClient.convertToType(data['winning_alliance'], 'String');
            }
            if (data.hasOwnProperty('event_key')) {
                obj['event_key'] = ApiClient.convertToType(data['event_key'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Number');
            }
            if (data.hasOwnProperty('predicted_time')) {
                obj['predicted_time'] = ApiClient.convertToType(data['predicted_time'], 'Number');
            }
            if (data.hasOwnProperty('actual_time')) {
                obj['actual_time'] = ApiClient.convertToType(data['actual_time'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may append the competition level if more than one match in required per set.
 * @member {String} key
 */
MatchSimple.prototype['key'] = undefined;

/**
 * The competition level the match was played at.
 * @member {module:model/MatchSimple.CompLevelEnum} comp_level
 */
MatchSimple.prototype['comp_level'] = undefined;

/**
 * The set number in a series of matches where more than one match is required in the match series.
 * @member {Number} set_number
 */
MatchSimple.prototype['set_number'] = undefined;

/**
 * The match number of the match in the competition level.
 * @member {Number} match_number
 */
MatchSimple.prototype['match_number'] = undefined;

/**
 * @member {module:model/MatchSimpleAlliances} alliances
 */
MatchSimple.prototype['alliances'] = undefined;

/**
 * The color (red/blue) of the winning alliance. Will contain an empty string in the event of no winner, or a tie.
 * @member {module:model/MatchSimple.WinningAllianceEnum} winning_alliance
 */
MatchSimple.prototype['winning_alliance'] = undefined;

/**
 * Event key of the event the match was played at.
 * @member {String} event_key
 */
MatchSimple.prototype['event_key'] = undefined;

/**
 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the scheduled match time, as taken from the published schedule.
 * @member {Number} time
 */
MatchSimple.prototype['time'] = undefined;

/**
 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the TBA predicted match start time.
 * @member {Number} predicted_time
 */
MatchSimple.prototype['predicted_time'] = undefined;

/**
 * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of actual match start time.
 * @member {Number} actual_time
 */
MatchSimple.prototype['actual_time'] = undefined;





/**
 * Allowed values for the <code>comp_level</code> property.
 * @enum {String}
 * @readonly
 */
MatchSimple['CompLevelEnum'] = {

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
 * Allowed values for the <code>winning_alliance</code> property.
 * @enum {String}
 * @readonly
 */
MatchSimple['WinningAllianceEnum'] = {

    /**
     * value: "red"
     * @const
     */
    "red": "red",

    /**
     * value: "blue"
     * @const
     */
    "blue": "blue",

    /**
     * value: ""
     * @const
     */
    "empty": ""
};



export default MatchSimple;


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
 * The TeamSimple model module.
 * @module model/TeamSimple
 * @version 3.5
 */
class TeamSimple {
    /**
     * Constructs a new <code>TeamSimple</code>.
     * @alias module:model/TeamSimple
     * @param key {String} TBA team key with the format `frcXXXX` with `XXXX` representing the team number.
     * @param teamNumber {Number} Official team number issued by FIRST.
     * @param name {String} Official long name registered with FIRST.
     */
    constructor(key, teamNumber, name) { 
        
        TeamSimple.initialize(this, key, teamNumber, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, teamNumber, name) { 
        obj['key'] = key;
        obj['team_number'] = teamNumber;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>TeamSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamSimple} obj Optional instance to populate.
     * @return {module:model/TeamSimple} The populated <code>TeamSimple</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamSimple();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('team_number')) {
                obj['team_number'] = ApiClient.convertToType(data['team_number'], 'Number');
            }
            if (data.hasOwnProperty('nickname')) {
                obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state_prov')) {
                obj['state_prov'] = ApiClient.convertToType(data['state_prov'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }


}

/**
 * TBA team key with the format `frcXXXX` with `XXXX` representing the team number.
 * @member {String} key
 */
TeamSimple.prototype['key'] = undefined;

/**
 * Official team number issued by FIRST.
 * @member {Number} team_number
 */
TeamSimple.prototype['team_number'] = undefined;

/**
 * Team nickname provided by FIRST.
 * @member {String} nickname
 */
TeamSimple.prototype['nickname'] = undefined;

/**
 * Official long name registered with FIRST.
 * @member {String} name
 */
TeamSimple.prototype['name'] = undefined;

/**
 * City of team derived from parsing the address registered with FIRST.
 * @member {String} city
 */
TeamSimple.prototype['city'] = undefined;

/**
 * State of team derived from parsing the address registered with FIRST.
 * @member {String} state_prov
 */
TeamSimple.prototype['state_prov'] = undefined;

/**
 * Country of team derived from parsing the address registered with FIRST.
 * @member {String} country
 */
TeamSimple.prototype['country'] = undefined;






export default TeamSimple;


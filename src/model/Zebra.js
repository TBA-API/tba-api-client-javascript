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
import ZebraAlliances from './ZebraAlliances';

/**
 * The Zebra model module.
 * @module model/Zebra
 * @version 3.8.0
 */
class Zebra {
    /**
     * Constructs a new <code>Zebra</code>.
     * @alias module:model/Zebra
     * @param key {String} TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may be appended to the competition level if more than one match in required per set.
     * @param times {Array.<Number>} A list of relative timestamps for each data point. Each timestamp will correspond to the X and Y value at the same index in a team xs and ys arrays. `times`, all teams `xs` and all teams `ys` are guarenteed to be the same length.
     * @param alliances {module:model/ZebraAlliances} 
     */
    constructor(key, times, alliances) { 
        
        Zebra.initialize(this, key, times, alliances);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, times, alliances) { 
        obj['key'] = key;
        obj['times'] = times;
        obj['alliances'] = alliances;
    }

    /**
     * Constructs a <code>Zebra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Zebra} obj Optional instance to populate.
     * @return {module:model/Zebra} The populated <code>Zebra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Zebra();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('times')) {
                obj['times'] = ApiClient.convertToType(data['times'], ['Number']);
            }
            if (data.hasOwnProperty('alliances')) {
                obj['alliances'] = ZebraAlliances.constructFromObject(data['alliances']);
            }
        }
        return obj;
    }


}

/**
 * TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may be appended to the competition level if more than one match in required per set.
 * @member {String} key
 */
Zebra.prototype['key'] = undefined;

/**
 * A list of relative timestamps for each data point. Each timestamp will correspond to the X and Y value at the same index in a team xs and ys arrays. `times`, all teams `xs` and all teams `ys` are guarenteed to be the same length.
 * @member {Array.<Number>} times
 */
Zebra.prototype['times'] = undefined;

/**
 * @member {module:model/ZebraAlliances} alliances
 */
Zebra.prototype['alliances'] = undefined;






export default Zebra;


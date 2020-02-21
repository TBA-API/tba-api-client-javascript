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
 * The EventRankingExtraStatsInfo model module.
 * @module model/EventRankingExtraStatsInfo
 * @version 3.8.0
 */
class EventRankingExtraStatsInfo {
    /**
     * Constructs a new <code>EventRankingExtraStatsInfo</code>.
     * @alias module:model/EventRankingExtraStatsInfo
     * @param precision {Number} Integer expressing the number of digits of precision in the number provided in `sort_orders`.
     * @param name {String} Name of the field used in the `extra_stats` array.
     */
    constructor(precision, name) { 
        
        EventRankingExtraStatsInfo.initialize(this, precision, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, precision, name) { 
        obj['precision'] = precision;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>EventRankingExtraStatsInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventRankingExtraStatsInfo} obj Optional instance to populate.
     * @return {module:model/EventRankingExtraStatsInfo} The populated <code>EventRankingExtraStatsInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventRankingExtraStatsInfo();

            if (data.hasOwnProperty('precision')) {
                obj['precision'] = ApiClient.convertToType(data['precision'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Integer expressing the number of digits of precision in the number provided in `sort_orders`.
 * @member {Number} precision
 */
EventRankingExtraStatsInfo.prototype['precision'] = undefined;

/**
 * Name of the field used in the `extra_stats` array.
 * @member {String} name
 */
EventRankingExtraStatsInfo.prototype['name'] = undefined;






export default EventRankingExtraStatsInfo;


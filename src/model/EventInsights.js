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
 * The EventInsights model module.
 * @module model/EventInsights
 * @version 3.8.0
 */
class EventInsights {
    /**
     * Constructs a new <code>EventInsights</code>.
     * A year-specific event insight object expressed as a JSON string, separated in to &#x60;qual&#x60; and &#x60;playoff&#x60; fields. See also Event_Insights_2016, Event_Insights_2017, etc.
     * @alias module:model/EventInsights
     */
    constructor() { 
        
        EventInsights.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventInsights</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventInsights} obj Optional instance to populate.
     * @return {module:model/EventInsights} The populated <code>EventInsights</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventInsights();

            if (data.hasOwnProperty('qual')) {
                obj['qual'] = ApiClient.convertToType(data['qual'], Object);
            }
            if (data.hasOwnProperty('playoff')) {
                obj['playoff'] = ApiClient.convertToType(data['playoff'], Object);
            }
        }
        return obj;
    }


}

/**
 * Inights for the qualification round of an event
 * @member {Object} qual
 */
EventInsights.prototype['qual'] = undefined;

/**
 * Insights for the playoff round of an event
 * @member {Object} playoff
 */
EventInsights.prototype['playoff'] = undefined;






export default EventInsights;


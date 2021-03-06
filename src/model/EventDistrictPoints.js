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
import EventDistrictPointsPoints from './EventDistrictPointsPoints';
import EventDistrictPointsTiebreakers from './EventDistrictPointsTiebreakers';

/**
 * The EventDistrictPoints model module.
 * @module model/EventDistrictPoints
 * @version 3.8.0
 */
class EventDistrictPoints {
    /**
     * Constructs a new <code>EventDistrictPoints</code>.
     * @alias module:model/EventDistrictPoints
     * @param points {Object.<String, module:model/EventDistrictPointsPoints>} Points gained for each team at the event. Stored as a key-value pair with the team key as the key, and an object describing the points as its value.
     */
    constructor(points) { 
        
        EventDistrictPoints.initialize(this, points);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, points) { 
        obj['points'] = points;
    }

    /**
     * Constructs a <code>EventDistrictPoints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventDistrictPoints} obj Optional instance to populate.
     * @return {module:model/EventDistrictPoints} The populated <code>EventDistrictPoints</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventDistrictPoints();

            if (data.hasOwnProperty('points')) {
                obj['points'] = ApiClient.convertToType(data['points'], {'String': EventDistrictPointsPoints});
            }
            if (data.hasOwnProperty('tiebreakers')) {
                obj['tiebreakers'] = ApiClient.convertToType(data['tiebreakers'], {'String': EventDistrictPointsTiebreakers});
            }
        }
        return obj;
    }


}

/**
 * Points gained for each team at the event. Stored as a key-value pair with the team key as the key, and an object describing the points as its value.
 * @member {Object.<String, module:model/EventDistrictPointsPoints>} points
 */
EventDistrictPoints.prototype['points'] = undefined;

/**
 * Tiebreaker values for each team at the event. Stored as a key-value pair with the team key as the key, and an object describing the tiebreaker elements as its value.
 * @member {Object.<String, module:model/EventDistrictPointsTiebreakers>} tiebreakers
 */
EventDistrictPoints.prototype['tiebreakers'] = undefined;






export default EventDistrictPoints;


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
 * The EventDistrictPointsTiebreakers model module.
 * @module model/EventDistrictPointsTiebreakers
 * @version 3.5
 */
class EventDistrictPointsTiebreakers {
    /**
     * Constructs a new <code>EventDistrictPointsTiebreakers</code>.
     * @alias module:model/EventDistrictPointsTiebreakers
     */
    constructor() { 
        
        EventDistrictPointsTiebreakers.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventDistrictPointsTiebreakers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventDistrictPointsTiebreakers} obj Optional instance to populate.
     * @return {module:model/EventDistrictPointsTiebreakers} The populated <code>EventDistrictPointsTiebreakers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventDistrictPointsTiebreakers();

            if (data.hasOwnProperty('highest_qual_scores')) {
                obj['highest_qual_scores'] = ApiClient.convertToType(data['highest_qual_scores'], ['Number']);
            }
            if (data.hasOwnProperty('qual_wins')) {
                obj['qual_wins'] = ApiClient.convertToType(data['qual_wins'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} highest_qual_scores
 */
EventDistrictPointsTiebreakers.prototype['highest_qual_scores'] = undefined;

/**
 * @member {Number} qual_wins
 */
EventDistrictPointsTiebreakers.prototype['qual_wins'] = undefined;






export default EventDistrictPointsTiebreakers;


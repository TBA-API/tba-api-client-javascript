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
import MatchScoreBreakdown2018Alliance from './MatchScoreBreakdown2018Alliance';

/**
 * The MatchScoreBreakdown2018 model module.
 * @module model/MatchScoreBreakdown2018
 * @version 3.5
 */
class MatchScoreBreakdown2018 {
    /**
     * Constructs a new <code>MatchScoreBreakdown2018</code>.
     * See the 2018 FMS API documentation for a description of each value.
     * @alias module:model/MatchScoreBreakdown2018
     */
    constructor() { 
        
        MatchScoreBreakdown2018.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MatchScoreBreakdown2018</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MatchScoreBreakdown2018} obj Optional instance to populate.
     * @return {module:model/MatchScoreBreakdown2018} The populated <code>MatchScoreBreakdown2018</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MatchScoreBreakdown2018();

            if (data.hasOwnProperty('blue')) {
                obj['blue'] = MatchScoreBreakdown2018Alliance.constructFromObject(data['blue']);
            }
            if (data.hasOwnProperty('red')) {
                obj['red'] = MatchScoreBreakdown2018Alliance.constructFromObject(data['red']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MatchScoreBreakdown2018Alliance} blue
 */
MatchScoreBreakdown2018.prototype['blue'] = undefined;

/**
 * @member {module:model/MatchScoreBreakdown2018Alliance} red
 */
MatchScoreBreakdown2018.prototype['red'] = undefined;






export default MatchScoreBreakdown2018;


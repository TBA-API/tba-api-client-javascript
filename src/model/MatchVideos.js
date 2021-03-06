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
 * The MatchVideos model module.
 * @module model/MatchVideos
 * @version 3.8.0
 */
class MatchVideos {
    /**
     * Constructs a new <code>MatchVideos</code>.
     * @alias module:model/MatchVideos
     */
    constructor() { 
        
        MatchVideos.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MatchVideos</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MatchVideos} obj Optional instance to populate.
     * @return {module:model/MatchVideos} The populated <code>MatchVideos</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MatchVideos();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Can be one of 'youtube' or 'tba'
 * @member {String} type
 */
MatchVideos.prototype['type'] = undefined;

/**
 * Unique key representing this video
 * @member {String} key
 */
MatchVideos.prototype['key'] = undefined;






export default MatchVideos;


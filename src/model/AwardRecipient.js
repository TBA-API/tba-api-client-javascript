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
 * The AwardRecipient model module.
 * @module model/AwardRecipient
 * @version 3.8.0
 */
class AwardRecipient {
    /**
     * Constructs a new <code>AwardRecipient</code>.
     * An &#x60;Award_Recipient&#x60; object represents the team and/or person who received an award at an event.
     * @alias module:model/AwardRecipient
     */
    constructor() { 
        
        AwardRecipient.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AwardRecipient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AwardRecipient} obj Optional instance to populate.
     * @return {module:model/AwardRecipient} The populated <code>AwardRecipient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AwardRecipient();

            if (data.hasOwnProperty('team_key')) {
                obj['team_key'] = ApiClient.convertToType(data['team_key'], 'String');
            }
            if (data.hasOwnProperty('awardee')) {
                obj['awardee'] = ApiClient.convertToType(data['awardee'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The TBA team key for the team that was given the award. May be null.
 * @member {String} team_key
 */
AwardRecipient.prototype['team_key'] = undefined;

/**
 * The name of the individual given the award. May be null.
 * @member {String} awardee
 */
AwardRecipient.prototype['awardee'] = undefined;






export default AwardRecipient;


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
 * The EliminationAllianceBackup model module.
 * @module model/EliminationAllianceBackup
 * @version 3.5
 */
class EliminationAllianceBackup {
    /**
     * Constructs a new <code>EliminationAllianceBackup</code>.
     * Backup team called in, may be null.
     * @alias module:model/EliminationAllianceBackup
     */
    constructor() { 
        
        EliminationAllianceBackup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EliminationAllianceBackup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EliminationAllianceBackup} obj Optional instance to populate.
     * @return {module:model/EliminationAllianceBackup} The populated <code>EliminationAllianceBackup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EliminationAllianceBackup();

            if (data.hasOwnProperty('in')) {
                obj['in'] = ApiClient.convertToType(data['in'], 'String');
            }
            if (data.hasOwnProperty('out')) {
                obj['out'] = ApiClient.convertToType(data['out'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Team key that was called in as the backup.
 * @member {String} in
 */
EliminationAllianceBackup.prototype['in'] = undefined;

/**
 * Team key that was replaced by the backup team.
 * @member {String} out
 */
EliminationAllianceBackup.prototype['out'] = undefined;






export default EliminationAllianceBackup;


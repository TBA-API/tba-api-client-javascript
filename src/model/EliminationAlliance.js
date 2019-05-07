/**
 * The Blue Alliance API v3
 * # Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
 *
 * OpenAPI spec version: 3.04.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EliminationAllianceBackup from './EliminationAllianceBackup';
import EliminationAllianceStatus from './EliminationAllianceStatus';

/**
 * The EliminationAlliance model module.
 * @module model/EliminationAlliance
 * @version 3.04.1
 */
class EliminationAlliance {
    /**
     * Constructs a new <code>EliminationAlliance</code>.
     * @alias module:model/EliminationAlliance
     * @param picks {Array.<String>} List of team keys picked for the alliance. First pick is captain.
     */
    constructor(picks) { 
        
        EliminationAlliance.initialize(this, picks);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, picks) { 
        obj['picks'] = picks;
    }

    /**
     * Constructs a <code>EliminationAlliance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EliminationAlliance} obj Optional instance to populate.
     * @return {module:model/EliminationAlliance} The populated <code>EliminationAlliance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EliminationAlliance();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('backup')) {
                obj['backup'] = EliminationAllianceBackup.constructFromObject(data['backup']);
            }
            if (data.hasOwnProperty('declines')) {
                obj['declines'] = ApiClient.convertToType(data['declines'], ['String']);
            }
            if (data.hasOwnProperty('picks')) {
                obj['picks'] = ApiClient.convertToType(data['picks'], ['String']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = EliminationAllianceStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }


}

/**
 * Alliance name, may be null.
 * @member {String} name
 */
EliminationAlliance.prototype['name'] = undefined;

/**
 * @member {module:model/EliminationAllianceBackup} backup
 */
EliminationAlliance.prototype['backup'] = undefined;

/**
 * List of teams that declined the alliance.
 * @member {Array.<String>} declines
 */
EliminationAlliance.prototype['declines'] = undefined;

/**
 * List of team keys picked for the alliance. First pick is captain.
 * @member {Array.<String>} picks
 */
EliminationAlliance.prototype['picks'] = undefined;

/**
 * @member {module:model/EliminationAllianceStatus} status
 */
EliminationAlliance.prototype['status'] = undefined;






export default EliminationAlliance;


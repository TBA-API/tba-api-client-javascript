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
import DistrictRankingEventPoints from './DistrictRankingEventPoints';

/**
 * The DistrictRanking model module.
 * @module model/DistrictRanking
 * @version 3.8.0
 */
class DistrictRanking {
    /**
     * Constructs a new <code>DistrictRanking</code>.
     * Rank of a team in a district.
     * @alias module:model/DistrictRanking
     * @param teamKey {String} TBA team key for the team.
     * @param rank {Number} Numerical rank of the team, 1 being top rank.
     * @param pointTotal {Number} Total district points for the team.
     */
    constructor(teamKey, rank, pointTotal) { 
        
        DistrictRanking.initialize(this, teamKey, rank, pointTotal);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, teamKey, rank, pointTotal) { 
        obj['team_key'] = teamKey;
        obj['rank'] = rank;
        obj['point_total'] = pointTotal;
    }

    /**
     * Constructs a <code>DistrictRanking</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DistrictRanking} obj Optional instance to populate.
     * @return {module:model/DistrictRanking} The populated <code>DistrictRanking</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DistrictRanking();

            if (data.hasOwnProperty('team_key')) {
                obj['team_key'] = ApiClient.convertToType(data['team_key'], 'String');
            }
            if (data.hasOwnProperty('rank')) {
                obj['rank'] = ApiClient.convertToType(data['rank'], 'Number');
            }
            if (data.hasOwnProperty('rookie_bonus')) {
                obj['rookie_bonus'] = ApiClient.convertToType(data['rookie_bonus'], 'Number');
            }
            if (data.hasOwnProperty('point_total')) {
                obj['point_total'] = ApiClient.convertToType(data['point_total'], 'Number');
            }
            if (data.hasOwnProperty('event_points')) {
                obj['event_points'] = ApiClient.convertToType(data['event_points'], [DistrictRankingEventPoints]);
            }
        }
        return obj;
    }


}

/**
 * TBA team key for the team.
 * @member {String} team_key
 */
DistrictRanking.prototype['team_key'] = undefined;

/**
 * Numerical rank of the team, 1 being top rank.
 * @member {Number} rank
 */
DistrictRanking.prototype['rank'] = undefined;

/**
 * Any points added to a team as a result of the rookie bonus.
 * @member {Number} rookie_bonus
 */
DistrictRanking.prototype['rookie_bonus'] = undefined;

/**
 * Total district points for the team.
 * @member {Number} point_total
 */
DistrictRanking.prototype['point_total'] = undefined;

/**
 * List of events that contributed to the point total for the team.
 * @member {Array.<module:model/DistrictRankingEventPoints>} event_points
 */
DistrictRanking.prototype['event_points'] = undefined;






export default DistrictRanking;


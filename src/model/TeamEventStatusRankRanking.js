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
import WLTRecord from './WLTRecord';

/**
 * The TeamEventStatusRankRanking model module.
 * @module model/TeamEventStatusRankRanking
 * @version 3.04.1
 */
class TeamEventStatusRankRanking {
    /**
     * Constructs a new <code>TeamEventStatusRankRanking</code>.
     * @alias module:model/TeamEventStatusRankRanking
     */
    constructor() { 
        
        TeamEventStatusRankRanking.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TeamEventStatusRankRanking</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TeamEventStatusRankRanking} obj Optional instance to populate.
     * @return {module:model/TeamEventStatusRankRanking} The populated <code>TeamEventStatusRankRanking</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TeamEventStatusRankRanking();

            if (data.hasOwnProperty('matches_played')) {
                obj['matches_played'] = ApiClient.convertToType(data['matches_played'], 'Number');
            }
            if (data.hasOwnProperty('qual_average')) {
                obj['qual_average'] = ApiClient.convertToType(data['qual_average'], 'Number');
            }
            if (data.hasOwnProperty('sort_orders')) {
                obj['sort_orders'] = ApiClient.convertToType(data['sort_orders'], ['Number']);
            }
            if (data.hasOwnProperty('record')) {
                obj['record'] = WLTRecord.constructFromObject(data['record']);
            }
            if (data.hasOwnProperty('rank')) {
                obj['rank'] = ApiClient.convertToType(data['rank'], 'Number');
            }
            if (data.hasOwnProperty('dq')) {
                obj['dq'] = ApiClient.convertToType(data['dq'], 'Number');
            }
            if (data.hasOwnProperty('team_key')) {
                obj['team_key'] = ApiClient.convertToType(data['team_key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Number of matches played.
 * @member {Number} matches_played
 */
TeamEventStatusRankRanking.prototype['matches_played'] = undefined;

/**
 * For some years, average qualification score. Can be null.
 * @member {Number} qual_average
 */
TeamEventStatusRankRanking.prototype['qual_average'] = undefined;

/**
 * Ordered list of values used to determine the rank. See the `sort_order_info` property for the name of each value.
 * @member {Array.<Number>} sort_orders
 */
TeamEventStatusRankRanking.prototype['sort_orders'] = undefined;

/**
 * @member {module:model/WLTRecord} record
 */
TeamEventStatusRankRanking.prototype['record'] = undefined;

/**
 * Relative rank of this team.
 * @member {Number} rank
 */
TeamEventStatusRankRanking.prototype['rank'] = undefined;

/**
 * Number of matches the team was disqualified for.
 * @member {Number} dq
 */
TeamEventStatusRankRanking.prototype['dq'] = undefined;

/**
 * TBA team key for this rank.
 * @member {String} team_key
 */
TeamEventStatusRankRanking.prototype['team_key'] = undefined;






export default TeamEventStatusRankRanking;


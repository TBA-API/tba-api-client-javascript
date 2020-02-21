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
import WLTRecord from './WLTRecord';

/**
 * The EventRankingRankings model module.
 * @module model/EventRankingRankings
 * @version 3.8.0
 */
class EventRankingRankings {
    /**
     * Constructs a new <code>EventRankingRankings</code>.
     * @alias module:model/EventRankingRankings
     * @param matchesPlayed {Number} Number of matches played by this team.
     * @param record {module:model/WLTRecord} 
     * @param rank {Number} The team's rank at the event as provided by FIRST.
     * @param dq {Number} Number of times disqualified.
     * @param teamKey {String} The team with this rank.
     */
    constructor(matchesPlayed, record, rank, dq, teamKey) { 
        
        EventRankingRankings.initialize(this, matchesPlayed, record, rank, dq, teamKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, matchesPlayed, record, rank, dq, teamKey) { 
        obj['matches_played'] = matchesPlayed;
        obj['record'] = record;
        obj['rank'] = rank;
        obj['dq'] = dq;
        obj['team_key'] = teamKey;
    }

    /**
     * Constructs a <code>EventRankingRankings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventRankingRankings} obj Optional instance to populate.
     * @return {module:model/EventRankingRankings} The populated <code>EventRankingRankings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventRankingRankings();

            if (data.hasOwnProperty('matches_played')) {
                obj['matches_played'] = ApiClient.convertToType(data['matches_played'], 'Number');
            }
            if (data.hasOwnProperty('qual_average')) {
                obj['qual_average'] = ApiClient.convertToType(data['qual_average'], 'Number');
            }
            if (data.hasOwnProperty('extra_stats')) {
                obj['extra_stats'] = ApiClient.convertToType(data['extra_stats'], ['Number']);
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
 * Number of matches played by this team.
 * @member {Number} matches_played
 */
EventRankingRankings.prototype['matches_played'] = undefined;

/**
 * The average match score during qualifications. Year specific. May be null if not relevant for a given year.
 * @member {Number} qual_average
 */
EventRankingRankings.prototype['qual_average'] = undefined;

/**
 * Additional special data on the team's performance calculated by TBA.
 * @member {Array.<Number>} extra_stats
 */
EventRankingRankings.prototype['extra_stats'] = undefined;

/**
 * Additional year-specific information, may be null. See parent `sort_order_info` for details.
 * @member {Array.<Number>} sort_orders
 */
EventRankingRankings.prototype['sort_orders'] = undefined;

/**
 * @member {module:model/WLTRecord} record
 */
EventRankingRankings.prototype['record'] = undefined;

/**
 * The team's rank at the event as provided by FIRST.
 * @member {Number} rank
 */
EventRankingRankings.prototype['rank'] = undefined;

/**
 * Number of times disqualified.
 * @member {Number} dq
 */
EventRankingRankings.prototype['dq'] = undefined;

/**
 * The team with this rank.
 * @member {String} team_key
 */
EventRankingRankings.prototype['team_key'] = undefined;






export default EventRankingRankings;


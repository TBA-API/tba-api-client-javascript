/**
 * The Blue Alliance API v3
 * # Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
 *
 * OpenAPI spec version: 3.04.1
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/WLTRecord'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WLTRecord'));
  } else {
    // Browser globals (root is window)
    if (!root.TbaApiV3client) {
      root.TbaApiV3client = {};
    }
    root.TbaApiV3client.EventRankingRankings = factory(root.TbaApiV3client.ApiClient, root.TbaApiV3client.WLTRecord);
  }
}(this, function(ApiClient, WLTRecord) {
  'use strict';



  /**
   * The EventRankingRankings model module.
   * @module model/EventRankingRankings
   * @version $API_VERSION
   */

  /**
   * Constructs a new <code>EventRankingRankings</code>.
   * @alias module:model/EventRankingRankings
   * @class
   * @param matchesPlayed {Number} Number of matches played by this team.
   * @param record {module:model/WLTRecord} 
   * @param rank {Number} The team's rank at the event as provided by FIRST.
   * @param dq {Number} Number of times disqualified.
   * @param teamKey {String} The team with this rank.
   */
  var exports = function(matchesPlayed, record, rank, dq, teamKey) {
    var _this = this;

    _this['matches_played'] = matchesPlayed;
    _this['record'] = record;
    _this['rank'] = rank;
    _this['dq'] = dq;
    _this['team_key'] = teamKey;
  };

  /**
   * Constructs a <code>EventRankingRankings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventRankingRankings} obj Optional instance to populate.
   * @return {module:model/EventRankingRankings} The populated <code>EventRankingRankings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
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

  /**
   * Number of matches played by this team.
   * @member {Number} matches_played
   */
  exports.prototype['matches_played'] = undefined;
  /**
   * The average match score during qualifications. Year specific. May be null if not relevant for a given year.
   * @member {Number} qual_average
   */
  exports.prototype['qual_average'] = undefined;
  /**
   * Additional special data on the team's performance calculated by TBA.
   * @member {Array.<Number>} extra_stats
   */
  exports.prototype['extra_stats'] = undefined;
  /**
   * Additional year-specific information, may be null. See parent `sort_order_info` for details.
   * @member {Array.<Number>} sort_orders
   */
  exports.prototype['sort_orders'] = undefined;
  /**
   * @member {module:model/WLTRecord} record
   */
  exports.prototype['record'] = undefined;
  /**
   * The team's rank at the event as provided by FIRST.
   * @member {Number} rank
   */
  exports.prototype['rank'] = undefined;
  /**
   * Number of times disqualified.
   * @member {Number} dq
   */
  exports.prototype['dq'] = undefined;
  /**
   * The team with this rank.
   * @member {String} team_key
   */
  exports.prototype['team_key'] = undefined;



  return exports;
}));



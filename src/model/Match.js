/**
 * The Blue Alliance API v3
 * # Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
 *
 * OpenAPI spec version: 3.03.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MatchSimpleAlliances', 'model/MatchVideos'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MatchSimpleAlliances'), require('./MatchVideos'));
  } else {
    // Browser globals (root is window)
    if (!root.TbaApiV3client) {
      root.TbaApiV3client = {};
    }
    root.TbaApiV3client.Match = factory(root.TbaApiV3client.ApiClient, root.TbaApiV3client.MatchSimpleAlliances, root.TbaApiV3client.MatchVideos);
  }
}(this, function(ApiClient, MatchSimpleAlliances, MatchVideos) {
  'use strict';




  /**
   * The Match model module.
   * @module model/Match
   * @version 3.03.1
   */

  /**
   * Constructs a new <code>Match</code>.
   * @alias module:model/Match
   * @class
   * @param key {String} TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may be appended to the competition level if more than one match in required per set.
   * @param compLevel {module:model/Match.CompLevelEnum} The competition level the match was played at.
   * @param setNumber {Number} The set number in a series of matches where more than one match is required in the match series.
   * @param matchNumber {Number} The match number of the match in the competition level.
   * @param eventKey {String} Event key of the event the match was played at.
   */
  var exports = function(key, compLevel, setNumber, matchNumber, eventKey) {
    var _this = this;

    _this['key'] = key;
    _this['comp_level'] = compLevel;
    _this['set_number'] = setNumber;
    _this['match_number'] = matchNumber;


    _this['event_key'] = eventKey;






  };

  /**
   * Constructs a <code>Match</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Match} obj Optional instance to populate.
   * @return {module:model/Match} The populated <code>Match</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('comp_level')) {
        obj['comp_level'] = ApiClient.convertToType(data['comp_level'], 'String');
      }
      if (data.hasOwnProperty('set_number')) {
        obj['set_number'] = ApiClient.convertToType(data['set_number'], 'Number');
      }
      if (data.hasOwnProperty('match_number')) {
        obj['match_number'] = ApiClient.convertToType(data['match_number'], 'Number');
      }
      if (data.hasOwnProperty('alliances')) {
        obj['alliances'] = MatchSimpleAlliances.constructFromObject(data['alliances']);
      }
      if (data.hasOwnProperty('winning_alliance')) {
        obj['winning_alliance'] = ApiClient.convertToType(data['winning_alliance'], 'String');
      }
      if (data.hasOwnProperty('event_key')) {
        obj['event_key'] = ApiClient.convertToType(data['event_key'], 'String');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
      if (data.hasOwnProperty('actual_time')) {
        obj['actual_time'] = ApiClient.convertToType(data['actual_time'], 'Number');
      }
      if (data.hasOwnProperty('predicted_time')) {
        obj['predicted_time'] = ApiClient.convertToType(data['predicted_time'], 'Number');
      }
      if (data.hasOwnProperty('post_result_time')) {
        obj['post_result_time'] = ApiClient.convertToType(data['post_result_time'], 'Number');
      }
      if (data.hasOwnProperty('score_breakdown')) {
        obj['score_breakdown'] = ApiClient.convertToType(data['score_breakdown'], Object);
      }
      if (data.hasOwnProperty('videos')) {
        obj['videos'] = ApiClient.convertToType(data['videos'], [MatchVideos]);
      }
    }
    return obj;
  }

  /**
   * TBA match key with the format `yyyy[EVENT_CODE]_[COMP_LEVEL]m[MATCH_NUMBER]`, where `yyyy` is the year, and `EVENT_CODE` is the event code of the event, `COMP_LEVEL` is (qm, ef, qf, sf, f), and `MATCH_NUMBER` is the match number in the competition level. A set number may be appended to the competition level if more than one match in required per set.
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * The competition level the match was played at.
   * @member {module:model/Match.CompLevelEnum} comp_level
   */
  exports.prototype['comp_level'] = undefined;
  /**
   * The set number in a series of matches where more than one match is required in the match series.
   * @member {Number} set_number
   */
  exports.prototype['set_number'] = undefined;
  /**
   * The match number of the match in the competition level.
   * @member {Number} match_number
   */
  exports.prototype['match_number'] = undefined;
  /**
   * @member {module:model/MatchSimpleAlliances} alliances
   */
  exports.prototype['alliances'] = undefined;
  /**
   * The color (red/blue) of the winning alliance. Will contain an empty string in the event of no winner, or a tie.
   * @member {String} winning_alliance
   */
  exports.prototype['winning_alliance'] = undefined;
  /**
   * Event key of the event the match was played at.
   * @member {String} event_key
   */
  exports.prototype['event_key'] = undefined;
  /**
   * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the scheduled match time, as taken from the published schedule.
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;
  /**
   * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of actual match start time.
   * @member {Number} actual_time
   */
  exports.prototype['actual_time'] = undefined;
  /**
   * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the TBA predicted match start time.
   * @member {Number} predicted_time
   */
  exports.prototype['predicted_time'] = undefined;
  /**
   * UNIX timestamp (seconds since 1-Jan-1970 00:00:00) when the match result was posted.
   * @member {Number} post_result_time
   */
  exports.prototype['post_result_time'] = undefined;
  /**
   * Score breakdown for auto, teleop, etc. points. Varies from year to year. May be null.
   * @member {Object} score_breakdown
   */
  exports.prototype['score_breakdown'] = undefined;
  /**
   * Array of video objects associated with this match.
   * @member {Array.<module:model/MatchVideos>} videos
   */
  exports.prototype['videos'] = undefined;


  /**
   * Allowed values for the <code>comp_level</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CompLevelEnum = {
    /**
     * value: "qm"
     * @const
     */
    "qm": "qm",
    /**
     * value: "ef"
     * @const
     */
    "ef": "ef",
    /**
     * value: "qf"
     * @const
     */
    "qf": "qf",
    /**
     * value: "sf"
     * @const
     */
    "sf": "sf",
    /**
     * value: "f"
     * @const
     */
    "f": "f"  };


  return exports;
}));


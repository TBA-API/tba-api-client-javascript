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
    define(['ApiClient', 'model/AwardRecipient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AwardRecipient'));
  } else {
    // Browser globals (root is window)
    if (!root.TbaApiV3client) {
      root.TbaApiV3client = {};
    }
    root.TbaApiV3client.Award = factory(root.TbaApiV3client.ApiClient, root.TbaApiV3client.AwardRecipient);
  }
}(this, function(ApiClient, AwardRecipient) {
  'use strict';



  /**
   * The Award model module.
   * @module model/Award
   * @version 3.04.1
   */

  /**
   * Constructs a new <code>Award</code>.
   * @alias module:model/Award
   * @class
   * @param name {String} The name of the award as provided by FIRST. May vary for the same award type.
   * @param awardType {Number} Type of award given. See https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/award_type.py#L6
   * @param eventKey {String} The event_key of the event the award was won at.
   * @param recipientList {Array.<module:model/AwardRecipient>} A list of recipients of the award at the event. May have either a team_key or an awardee, both, or neither (in the case the award wasn't awarded at the event).
   * @param year {Number} The year this award was won.
   */
  var exports = function(name, awardType, eventKey, recipientList, year) {
    var _this = this;

    _this['name'] = name;
    _this['award_type'] = awardType;
    _this['event_key'] = eventKey;
    _this['recipient_list'] = recipientList;
    _this['year'] = year;
  };

  /**
   * Constructs a <code>Award</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Award} obj Optional instance to populate.
   * @return {module:model/Award} The populated <code>Award</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('award_type')) {
        obj['award_type'] = ApiClient.convertToType(data['award_type'], 'Number');
      }
      if (data.hasOwnProperty('event_key')) {
        obj['event_key'] = ApiClient.convertToType(data['event_key'], 'String');
      }
      if (data.hasOwnProperty('recipient_list')) {
        obj['recipient_list'] = ApiClient.convertToType(data['recipient_list'], [AwardRecipient]);
      }
      if (data.hasOwnProperty('year')) {
        obj['year'] = ApiClient.convertToType(data['year'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The name of the award as provided by FIRST. May vary for the same award type.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Type of award given. See https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/award_type.py#L6
   * @member {Number} award_type
   */
  exports.prototype['award_type'] = undefined;
  /**
   * The event_key of the event the award was won at.
   * @member {String} event_key
   */
  exports.prototype['event_key'] = undefined;
  /**
   * A list of recipients of the award at the event. May have either a team_key or an awardee, both, or neither (in the case the award wasn't awarded at the event).
   * @member {Array.<module:model/AwardRecipient>} recipient_list
   */
  exports.prototype['recipient_list'] = undefined;
  /**
   * The year this award was won.
   * @member {Number} year
   */
  exports.prototype['year'] = undefined;



  return exports;
}));



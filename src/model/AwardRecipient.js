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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TbaApiV3client) {
      root.TbaApiV3client = {};
    }
    root.TbaApiV3client.AwardRecipient = factory(root.TbaApiV3client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AwardRecipient model module.
   * @module model/AwardRecipient
   * @version 3.03.1
   */

  /**
   * Constructs a new <code>AwardRecipient</code>.
   * An &#x60;Award_Recipient&#x60; object represents the team and/or person who received an award at an event.
   * @alias module:model/AwardRecipient
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AwardRecipient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AwardRecipient} obj Optional instance to populate.
   * @return {module:model/AwardRecipient} The populated <code>AwardRecipient</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('team_key')) {
        obj['team_key'] = ApiClient.convertToType(data['team_key'], 'String');
      }
      if (data.hasOwnProperty('awardee')) {
        obj['awardee'] = ApiClient.convertToType(data['awardee'], 'String');
      }
    }
    return obj;
  }

  /**
   * The TBA team key for the team that was given the award. May be null.
   * @member {String} team_key
   */
  exports.prototype['team_key'] = undefined;
  /**
   * The name of the individual given the award. May be null.
   * @member {String} awardee
   */
  exports.prototype['awardee'] = undefined;



  return exports;
}));



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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TbaApiV3client) {
      root.TbaApiV3client = {};
    }
    root.TbaApiV3client.TeamSimple = factory(root.TbaApiV3client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TeamSimple model module.
   * @module model/TeamSimple
   * @version $API_VERSION
   */

  /**
   * Constructs a new <code>TeamSimple</code>.
   * @alias module:model/TeamSimple
   * @class
   * @param key {String} TBA team key with the format `frcXXXX` with `XXXX` representing the team number.
   * @param teamNumber {Number} Official team number issued by FIRST.
   * @param name {String} Official long name registered with FIRST.
   */
  var exports = function(key, teamNumber, name) {
    var _this = this;

    _this['key'] = key;
    _this['team_number'] = teamNumber;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>TeamSimple</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamSimple} obj Optional instance to populate.
   * @return {module:model/TeamSimple} The populated <code>TeamSimple</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('team_number')) {
        obj['team_number'] = ApiClient.convertToType(data['team_number'], 'Number');
      }
      if (data.hasOwnProperty('nickname')) {
        obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('state_prov')) {
        obj['state_prov'] = ApiClient.convertToType(data['state_prov'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * TBA team key with the format `frcXXXX` with `XXXX` representing the team number.
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * Official team number issued by FIRST.
   * @member {Number} team_number
   */
  exports.prototype['team_number'] = undefined;
  /**
   * Team nickname provided by FIRST.
   * @member {String} nickname
   */
  exports.prototype['nickname'] = undefined;
  /**
   * Official long name registered with FIRST.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * City of team derived from parsing the address registered with FIRST.
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * State of team derived from parsing the address registered with FIRST.
   * @member {String} state_prov
   */
  exports.prototype['state_prov'] = undefined;
  /**
   * Country of team derived from parsing the address registered with FIRST.
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));



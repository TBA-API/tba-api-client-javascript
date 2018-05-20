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
    root.TbaApiV3client.Team = factory(root.TbaApiV3client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Team model module.
   * @module model/Team
   * @version 3.03.1
   */

  /**
   * Constructs a new <code>Team</code>.
   * @alias module:model/Team
   * @class
   * @param key {String} TBA team key with the format `frcXXXX` with `XXXX` representing the team number.
   * @param teamNumber {Number} Official team number issued by FIRST.
   * @param name {String} Official long name registered with FIRST.
   * @param rookieYear {Number} First year the team officially competed.
   */
  var exports = function(key, teamNumber, name, rookieYear) {
    var _this = this;

    _this['key'] = key;
    _this['team_number'] = teamNumber;

    _this['name'] = name;











    _this['rookie_year'] = rookieYear;


  };

  /**
   * Constructs a <code>Team</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Team} obj Optional instance to populate.
   * @return {module:model/Team} The populated <code>Team</code> instance.
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
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('postal_code')) {
        obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
      }
      if (data.hasOwnProperty('gmaps_place_id')) {
        obj['gmaps_place_id'] = ApiClient.convertToType(data['gmaps_place_id'], 'String');
      }
      if (data.hasOwnProperty('gmaps_url')) {
        obj['gmaps_url'] = ApiClient.convertToType(data['gmaps_url'], 'String');
      }
      if (data.hasOwnProperty('lat')) {
        obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
      }
      if (data.hasOwnProperty('lng')) {
        obj['lng'] = ApiClient.convertToType(data['lng'], 'Number');
      }
      if (data.hasOwnProperty('location_name')) {
        obj['location_name'] = ApiClient.convertToType(data['location_name'], 'String');
      }
      if (data.hasOwnProperty('website')) {
        obj['website'] = ApiClient.convertToType(data['website'], 'String');
      }
      if (data.hasOwnProperty('rookie_year')) {
        obj['rookie_year'] = ApiClient.convertToType(data['rookie_year'], 'Number');
      }
      if (data.hasOwnProperty('motto')) {
        obj['motto'] = ApiClient.convertToType(data['motto'], 'String');
      }
      if (data.hasOwnProperty('home_championship')) {
        obj['home_championship'] = ApiClient.convertToType(data['home_championship'], Object);
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
  /**
   * Will be NULL, for future development.
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * Postal code from the team address.
   * @member {String} postal_code
   */
  exports.prototype['postal_code'] = undefined;
  /**
   * Will be NULL, for future development.
   * @member {String} gmaps_place_id
   */
  exports.prototype['gmaps_place_id'] = undefined;
  /**
   * Will be NULL, for future development.
   * @member {String} gmaps_url
   */
  exports.prototype['gmaps_url'] = undefined;
  /**
   * Will be NULL, for future development.
   * @member {Number} lat
   */
  exports.prototype['lat'] = undefined;
  /**
   * Will be NULL, for future development.
   * @member {Number} lng
   */
  exports.prototype['lng'] = undefined;
  /**
   * Will be NULL, for future development.
   * @member {String} location_name
   */
  exports.prototype['location_name'] = undefined;
  /**
   * Official website associated with the team.
   * @member {String} website
   */
  exports.prototype['website'] = undefined;
  /**
   * First year the team officially competed.
   * @member {Number} rookie_year
   */
  exports.prototype['rookie_year'] = undefined;
  /**
   * Team's motto as provided by FIRST.
   * @member {String} motto
   */
  exports.prototype['motto'] = undefined;
  /**
   * Location of the team's home championship each year as a key-value pair. The year (as a string) is the key, and the city is the value.
   * @member {Object} home_championship
   */
  exports.prototype['home_championship'] = undefined;



  return exports;
}));


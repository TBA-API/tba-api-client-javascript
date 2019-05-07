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
    root.TbaApiV3client.EventOPRs = factory(root.TbaApiV3client.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The EventOPRs model module.
   * @module model/EventOPRs
   * @version $API_VERSION
   */

  /**
   * Constructs a new <code>EventOPRs</code>.
   * OPR, DPR, and CCWM for teams at the event.
   * @alias module:model/EventOPRs
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>EventOPRs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventOPRs} obj Optional instance to populate.
   * @return {module:model/EventOPRs} The populated <code>EventOPRs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('oprs')) {
        obj['oprs'] = ApiClient.convertToType(data['oprs'], {'String': 'Number'});
      }
      if (data.hasOwnProperty('dprs')) {
        obj['dprs'] = ApiClient.convertToType(data['dprs'], {'String': 'Number'});
      }
      if (data.hasOwnProperty('ccwms')) {
        obj['ccwms'] = ApiClient.convertToType(data['ccwms'], {'String': 'Number'});
      }
    }
    return obj;
  }

  /**
   * A key-value pair with team key (eg `frc254`) as key and OPR as value.
   * @member {Object.<String, Number>} oprs
   */
  exports.prototype['oprs'] = undefined;
  /**
   * A key-value pair with team key (eg `frc254`) as key and DPR as value.
   * @member {Object.<String, Number>} dprs
   */
  exports.prototype['dprs'] = undefined;
  /**
   * A key-value pair with team key (eg `frc254`) as key and CCWM as value.
   * @member {Object.<String, Number>} ccwms
   */
  exports.prototype['ccwms'] = undefined;



  return exports;
}));



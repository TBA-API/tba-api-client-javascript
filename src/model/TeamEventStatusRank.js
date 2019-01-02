/**
 * The Blue Alliance API v3
 * # Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
 *
 * OpenAPI spec version: 3.04.0
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
    define(['ApiClient', 'model/TeamEventStatusRankRanking', 'model/TeamEventStatusRankSortOrderInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TeamEventStatusRankRanking'), require('./TeamEventStatusRankSortOrderInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.TbaApiV3client) {
      root.TbaApiV3client = {};
    }
    root.TbaApiV3client.TeamEventStatusRank = factory(root.TbaApiV3client.ApiClient, root.TbaApiV3client.TeamEventStatusRankRanking, root.TbaApiV3client.TeamEventStatusRankSortOrderInfo);
  }
}(this, function(ApiClient, TeamEventStatusRankRanking, TeamEventStatusRankSortOrderInfo) {
  'use strict';




  /**
   * The TeamEventStatusRank model module.
   * @module model/TeamEventStatusRank
   * @version 3.04.0
   */

  /**
   * Constructs a new <code>TeamEventStatusRank</code>.
   * @alias module:model/TeamEventStatusRank
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>TeamEventStatusRank</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamEventStatusRank} obj Optional instance to populate.
   * @return {module:model/TeamEventStatusRank} The populated <code>TeamEventStatusRank</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('num_teams')) {
        obj['num_teams'] = ApiClient.convertToType(data['num_teams'], 'Number');
      }
      if (data.hasOwnProperty('ranking')) {
        obj['ranking'] = TeamEventStatusRankRanking.constructFromObject(data['ranking']);
      }
      if (data.hasOwnProperty('sort_order_info')) {
        obj['sort_order_info'] = ApiClient.convertToType(data['sort_order_info'], [TeamEventStatusRankSortOrderInfo]);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * Number of teams ranked.
   * @member {Number} num_teams
   */
  exports.prototype['num_teams'] = undefined;
  /**
   * @member {module:model/TeamEventStatusRankRanking} ranking
   */
  exports.prototype['ranking'] = undefined;
  /**
   * Ordered list of names corresponding to the elements of the `sort_orders` array.
   * @member {Array.<module:model/TeamEventStatusRankSortOrderInfo>} sort_order_info
   */
  exports.prototype['sort_order_info'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));



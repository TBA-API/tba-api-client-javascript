/**
 * The Blue Alliance API v3
 * # Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
 *
 * The version of the OpenAPI document: 3.04.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TbaApiV3client);
  }
}(this, function(expect, TbaApiV3client) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TbaApiV3client.TeamEventStatus();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TeamEventStatus', function() {
    it('should create an instance of TeamEventStatus', function() {
      // uncomment below and update the code to test TeamEventStatus
      //var instane = new TbaApiV3client.TeamEventStatus();
      //expect(instance).to.be.a(TbaApiV3client.TeamEventStatus);
    });

    it('should have the property qual (base name: "qual")', function() {
      // uncomment below and update the code to test the property qual
      //var instane = new TbaApiV3client.TeamEventStatus();
      //expect(instance).to.be();
    });

    it('should have the property alliance (base name: "alliance")', function() {
      // uncomment below and update the code to test the property alliance
      //var instane = new TbaApiV3client.TeamEventStatus();
      //expect(instance).to.be();
    });

    it('should have the property playoff (base name: "playoff")', function() {
      // uncomment below and update the code to test the property playoff
      //var instane = new TbaApiV3client.TeamEventStatus();
      //expect(instance).to.be();
    });

    it('should have the property allianceStatusStr (base name: "alliance_status_str")', function() {
      // uncomment below and update the code to test the property allianceStatusStr
      //var instane = new TbaApiV3client.TeamEventStatus();
      //expect(instance).to.be();
    });

    it('should have the property playoffStatusStr (base name: "playoff_status_str")', function() {
      // uncomment below and update the code to test the property playoffStatusStr
      //var instane = new TbaApiV3client.TeamEventStatus();
      //expect(instance).to.be();
    });

    it('should have the property overallStatusStr (base name: "overall_status_str")', function() {
      // uncomment below and update the code to test the property overallStatusStr
      //var instane = new TbaApiV3client.TeamEventStatus();
      //expect(instance).to.be();
    });

    it('should have the property nextMatchKey (base name: "next_match_key")', function() {
      // uncomment below and update the code to test the property nextMatchKey
      //var instane = new TbaApiV3client.TeamEventStatus();
      //expect(instance).to.be();
    });

    it('should have the property lastMatchKey (base name: "last_match_key")', function() {
      // uncomment below and update the code to test the property lastMatchKey
      //var instane = new TbaApiV3client.TeamEventStatus();
      //expect(instance).to.be();
    });

  });

}));

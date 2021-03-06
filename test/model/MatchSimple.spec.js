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
    instance = new TbaApiV3client.MatchSimple();
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

  describe('MatchSimple', function() {
    it('should create an instance of MatchSimple', function() {
      // uncomment below and update the code to test MatchSimple
      //var instane = new TbaApiV3client.MatchSimple();
      //expect(instance).to.be.a(TbaApiV3client.MatchSimple);
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new TbaApiV3client.MatchSimple();
      //expect(instance).to.be();
    });

    it('should have the property compLevel (base name: "comp_level")', function() {
      // uncomment below and update the code to test the property compLevel
      //var instane = new TbaApiV3client.MatchSimple();
      //expect(instance).to.be();
    });

    it('should have the property setNumber (base name: "set_number")', function() {
      // uncomment below and update the code to test the property setNumber
      //var instane = new TbaApiV3client.MatchSimple();
      //expect(instance).to.be();
    });

    it('should have the property matchNumber (base name: "match_number")', function() {
      // uncomment below and update the code to test the property matchNumber
      //var instane = new TbaApiV3client.MatchSimple();
      //expect(instance).to.be();
    });

    it('should have the property alliances (base name: "alliances")', function() {
      // uncomment below and update the code to test the property alliances
      //var instane = new TbaApiV3client.MatchSimple();
      //expect(instance).to.be();
    });

    it('should have the property winningAlliance (base name: "winning_alliance")', function() {
      // uncomment below and update the code to test the property winningAlliance
      //var instane = new TbaApiV3client.MatchSimple();
      //expect(instance).to.be();
    });

    it('should have the property eventKey (base name: "event_key")', function() {
      // uncomment below and update the code to test the property eventKey
      //var instane = new TbaApiV3client.MatchSimple();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new TbaApiV3client.MatchSimple();
      //expect(instance).to.be();
    });

    it('should have the property predictedTime (base name: "predicted_time")', function() {
      // uncomment below and update the code to test the property predictedTime
      //var instane = new TbaApiV3client.MatchSimple();
      //expect(instance).to.be();
    });

    it('should have the property actualTime (base name: "actual_time")', function() {
      // uncomment below and update the code to test the property actualTime
      //var instane = new TbaApiV3client.MatchSimple();
      //expect(instance).to.be();
    });

  });

}));

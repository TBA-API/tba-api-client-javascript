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
    instance = new TbaApiV3client.MatchScoreBreakdown2015();
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

  describe('MatchScoreBreakdown2015', function() {
    it('should create an instance of MatchScoreBreakdown2015', function() {
      // uncomment below and update the code to test MatchScoreBreakdown2015
      //var instane = new TbaApiV3client.MatchScoreBreakdown2015();
      //expect(instance).to.be.a(TbaApiV3client.MatchScoreBreakdown2015);
    });

    it('should have the property blue (base name: "blue")', function() {
      // uncomment below and update the code to test the property blue
      //var instane = new TbaApiV3client.MatchScoreBreakdown2015();
      //expect(instance).to.be();
    });

    it('should have the property red (base name: "red")', function() {
      // uncomment below and update the code to test the property red
      //var instane = new TbaApiV3client.MatchScoreBreakdown2015();
      //expect(instance).to.be();
    });

    it('should have the property coopertition (base name: "coopertition")', function() {
      // uncomment below and update the code to test the property coopertition
      //var instane = new TbaApiV3client.MatchScoreBreakdown2015();
      //expect(instance).to.be();
    });

    it('should have the property coopertitionPoints (base name: "coopertition_points")', function() {
      // uncomment below and update the code to test the property coopertitionPoints
      //var instane = new TbaApiV3client.MatchScoreBreakdown2015();
      //expect(instance).to.be();
    });

  });

}));

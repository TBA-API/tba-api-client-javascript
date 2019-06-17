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
    instance = new TbaApiV3client.EliminationAlliance();
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

  describe('EliminationAlliance', function() {
    it('should create an instance of EliminationAlliance', function() {
      // uncomment below and update the code to test EliminationAlliance
      //var instane = new TbaApiV3client.EliminationAlliance();
      //expect(instance).to.be.a(TbaApiV3client.EliminationAlliance);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TbaApiV3client.EliminationAlliance();
      //expect(instance).to.be();
    });

    it('should have the property backup (base name: "backup")', function() {
      // uncomment below and update the code to test the property backup
      //var instane = new TbaApiV3client.EliminationAlliance();
      //expect(instance).to.be();
    });

    it('should have the property declines (base name: "declines")', function() {
      // uncomment below and update the code to test the property declines
      //var instane = new TbaApiV3client.EliminationAlliance();
      //expect(instance).to.be();
    });

    it('should have the property picks (base name: "picks")', function() {
      // uncomment below and update the code to test the property picks
      //var instane = new TbaApiV3client.EliminationAlliance();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new TbaApiV3client.EliminationAlliance();
      //expect(instance).to.be();
    });

  });

}));

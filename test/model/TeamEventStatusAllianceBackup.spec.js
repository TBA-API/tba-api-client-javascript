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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TbaApiV3client);
  }
}(this, function(expect, TbaApiV3client) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TbaApiV3client.TeamEventStatusAllianceBackup();
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

  describe('TeamEventStatusAllianceBackup', function() {
    it('should create an instance of TeamEventStatusAllianceBackup', function() {
      // uncomment below and update the code to test TeamEventStatusAllianceBackup
      //var instane = new TbaApiV3client.TeamEventStatusAllianceBackup();
      //expect(instance).to.be.a(TbaApiV3client.TeamEventStatusAllianceBackup);
    });

    it('should have the property out (base name: "out")', function() {
      // uncomment below and update the code to test the property out
      //var instane = new TbaApiV3client.TeamEventStatusAllianceBackup();
      //expect(instance).to.be();
    });

    it('should have the property _in (base name: "in")', function() {
      // uncomment below and update the code to test the property _in
      //var instane = new TbaApiV3client.TeamEventStatusAllianceBackup();
      //expect(instance).to.be();
    });

  });

}));

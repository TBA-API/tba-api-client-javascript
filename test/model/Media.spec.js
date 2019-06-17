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
    instance = new TbaApiV3client.Media();
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

  describe('Media', function() {
    it('should create an instance of Media', function() {
      // uncomment below and update the code to test Media
      //var instane = new TbaApiV3client.Media();
      //expect(instance).to.be.a(TbaApiV3client.Media);
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new TbaApiV3client.Media();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new TbaApiV3client.Media();
      //expect(instance).to.be();
    });

    it('should have the property foreignKey (base name: "foreign_key")', function() {
      // uncomment below and update the code to test the property foreignKey
      //var instane = new TbaApiV3client.Media();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instane = new TbaApiV3client.Media();
      //expect(instance).to.be();
    });

    it('should have the property preferred (base name: "preferred")', function() {
      // uncomment below and update the code to test the property preferred
      //var instane = new TbaApiV3client.Media();
      //expect(instance).to.be();
    });

    it('should have the property directUrl (base name: "direct_url")', function() {
      // uncomment below and update the code to test the property directUrl
      //var instane = new TbaApiV3client.Media();
      //expect(instance).to.be();
    });

    it('should have the property viewUrl (base name: "view_url")', function() {
      // uncomment below and update the code to test the property viewUrl
      //var instane = new TbaApiV3client.Media();
      //expect(instance).to.be();
    });

  });

}));

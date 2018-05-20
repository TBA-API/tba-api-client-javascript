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
    instance = new TbaApiV3client.EventInsights2016();
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

  describe('EventInsights2016', function() {
    it('should create an instance of EventInsights2016', function() {
      // uncomment below and update the code to test EventInsights2016
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be.a(TbaApiV3client.EventInsights2016);
    });

    it('should have the property lowBar (base name: "LowBar")', function() {
      // uncomment below and update the code to test the property lowBar
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property aChevalDeFrise (base name: "A_ChevalDeFrise")', function() {
      // uncomment below and update the code to test the property aChevalDeFrise
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property aPortcullis (base name: "A_Portcullis")', function() {
      // uncomment below and update the code to test the property aPortcullis
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property bRamparts (base name: "B_Ramparts")', function() {
      // uncomment below and update the code to test the property bRamparts
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property bMoat (base name: "B_Moat")', function() {
      // uncomment below and update the code to test the property bMoat
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property cSallyPort (base name: "C_SallyPort")', function() {
      // uncomment below and update the code to test the property cSallyPort
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property cDrawbridge (base name: "C_Drawbridge")', function() {
      // uncomment below and update the code to test the property cDrawbridge
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property dRoughTerrain (base name: "D_RoughTerrain")', function() {
      // uncomment below and update the code to test the property dRoughTerrain
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property dRockWall (base name: "D_RockWall")', function() {
      // uncomment below and update the code to test the property dRockWall
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property averageHighGoals (base name: "average_high_goals")', function() {
      // uncomment below and update the code to test the property averageHighGoals
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property averageLowGoals (base name: "average_low_goals")', function() {
      // uncomment below and update the code to test the property averageLowGoals
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property breaches (base name: "breaches")', function() {
      // uncomment below and update the code to test the property breaches
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property scales (base name: "scales")', function() {
      // uncomment below and update the code to test the property scales
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property challenges (base name: "challenges")', function() {
      // uncomment below and update the code to test the property challenges
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property captures (base name: "captures")', function() {
      // uncomment below and update the code to test the property captures
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property averageWinScore (base name: "average_win_score")', function() {
      // uncomment below and update the code to test the property averageWinScore
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property averageWinMargin (base name: "average_win_margin")', function() {
      // uncomment below and update the code to test the property averageWinMargin
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property averageScore (base name: "average_score")', function() {
      // uncomment below and update the code to test the property averageScore
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property averageAutoScore (base name: "average_auto_score")', function() {
      // uncomment below and update the code to test the property averageAutoScore
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property averageCrossingScore (base name: "average_crossing_score")', function() {
      // uncomment below and update the code to test the property averageCrossingScore
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property averageBoulderScore (base name: "average_boulder_score")', function() {
      // uncomment below and update the code to test the property averageBoulderScore
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property averageTowerScore (base name: "average_tower_score")', function() {
      // uncomment below and update the code to test the property averageTowerScore
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property averageFoulScore (base name: "average_foul_score")', function() {
      // uncomment below and update the code to test the property averageFoulScore
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

    it('should have the property highScore (base name: "high_score")', function() {
      // uncomment below and update the code to test the property highScore
      //var instane = new TbaApiV3client.EventInsights2016();
      //expect(instance).to.be();
    });

  });

}));
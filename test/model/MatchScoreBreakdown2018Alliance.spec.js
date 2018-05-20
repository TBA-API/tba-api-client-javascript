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
    instance = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
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

  describe('MatchScoreBreakdown2018Alliance', function() {
    it('should create an instance of MatchScoreBreakdown2018Alliance', function() {
      // uncomment below and update the code to test MatchScoreBreakdown2018Alliance
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be.a(TbaApiV3client.MatchScoreBreakdown2018Alliance);
    });

    it('should have the property adjustPoints (base name: "adjustPoints")', function() {
      // uncomment below and update the code to test the property adjustPoints
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property autoOwnershipPoints (base name: "autoOwnershipPoints")', function() {
      // uncomment below and update the code to test the property autoOwnershipPoints
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property autoPoints (base name: "autoPoints")', function() {
      // uncomment below and update the code to test the property autoPoints
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property autoQuestRankingPoint (base name: "autoQuestRankingPoint")', function() {
      // uncomment below and update the code to test the property autoQuestRankingPoint
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property autoRobot1 (base name: "autoRobot1")', function() {
      // uncomment below and update the code to test the property autoRobot1
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property autoRobot2 (base name: "autoRobot2")', function() {
      // uncomment below and update the code to test the property autoRobot2
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property autoRobot3 (base name: "autoRobot3")', function() {
      // uncomment below and update the code to test the property autoRobot3
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property autoRunPoints (base name: "autoRunPoints")', function() {
      // uncomment below and update the code to test the property autoRunPoints
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property autoScaleOwnershipSec (base name: "autoScaleOwnershipSec")', function() {
      // uncomment below and update the code to test the property autoScaleOwnershipSec
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property autoSwitchAtZero (base name: "autoSwitchAtZero")', function() {
      // uncomment below and update the code to test the property autoSwitchAtZero
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property autoSwitchOwnershipSec (base name: "autoSwitchOwnershipSec")', function() {
      // uncomment below and update the code to test the property autoSwitchOwnershipSec
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property endgamePoints (base name: "endgamePoints")', function() {
      // uncomment below and update the code to test the property endgamePoints
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property endgameRobot1 (base name: "endgameRobot1")', function() {
      // uncomment below and update the code to test the property endgameRobot1
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property endgameRobot2 (base name: "endgameRobot2")', function() {
      // uncomment below and update the code to test the property endgameRobot2
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property endgameRobot3 (base name: "endgameRobot3")', function() {
      // uncomment below and update the code to test the property endgameRobot3
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property faceTheBossRankingPoint (base name: "faceTheBossRankingPoint")', function() {
      // uncomment below and update the code to test the property faceTheBossRankingPoint
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property foulCount (base name: "foulCount")', function() {
      // uncomment below and update the code to test the property foulCount
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property foulPoints (base name: "foulPoints")', function() {
      // uncomment below and update the code to test the property foulPoints
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property rp (base name: "rp")', function() {
      // uncomment below and update the code to test the property rp
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property techFoulCount (base name: "techFoulCount")', function() {
      // uncomment below and update the code to test the property techFoulCount
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property teleopOwnershipPoints (base name: "teleopOwnershipPoints")', function() {
      // uncomment below and update the code to test the property teleopOwnershipPoints
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property teleopPoints (base name: "teleopPoints")', function() {
      // uncomment below and update the code to test the property teleopPoints
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property teleopScaleBoostSec (base name: "teleopScaleBoostSec")', function() {
      // uncomment below and update the code to test the property teleopScaleBoostSec
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property teleopScaleForceSec (base name: "teleopScaleForceSec")', function() {
      // uncomment below and update the code to test the property teleopScaleForceSec
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property teleopScaleOwnershipSec (base name: "teleopScaleOwnershipSec")', function() {
      // uncomment below and update the code to test the property teleopScaleOwnershipSec
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property teleopSwitchBoostSec (base name: "teleopSwitchBoostSec")', function() {
      // uncomment below and update the code to test the property teleopSwitchBoostSec
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property teleopSwitchForceSec (base name: "teleopSwitchForceSec")', function() {
      // uncomment below and update the code to test the property teleopSwitchForceSec
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property teleopSwitchOwnershipSec (base name: "teleopSwitchOwnershipSec")', function() {
      // uncomment below and update the code to test the property teleopSwitchOwnershipSec
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property totalPoints (base name: "totalPoints")', function() {
      // uncomment below and update the code to test the property totalPoints
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property vaultBoostPlayed (base name: "vaultBoostPlayed")', function() {
      // uncomment below and update the code to test the property vaultBoostPlayed
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property vaultBoostTotal (base name: "vaultBoostTotal")', function() {
      // uncomment below and update the code to test the property vaultBoostTotal
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property vaultForcePlayed (base name: "vaultForcePlayed")', function() {
      // uncomment below and update the code to test the property vaultForcePlayed
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property vaultForceTotal (base name: "vaultForceTotal")', function() {
      // uncomment below and update the code to test the property vaultForceTotal
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property vaultLevitatePlayed (base name: "vaultLevitatePlayed")', function() {
      // uncomment below and update the code to test the property vaultLevitatePlayed
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property vaultLevitateTotal (base name: "vaultLevitateTotal")', function() {
      // uncomment below and update the code to test the property vaultLevitateTotal
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property vaultPoints (base name: "vaultPoints")', function() {
      // uncomment below and update the code to test the property vaultPoints
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

    it('should have the property tbaGameData (base name: "tba_gameData")', function() {
      // uncomment below and update the code to test the property tbaGameData
      //var instane = new TbaApiV3client.MatchScoreBreakdown2018Alliance();
      //expect(instance).to.be();
    });

  });

}));

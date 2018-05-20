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
    instance = new TbaApiV3client.EventInsights2018();
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

  describe('EventInsights2018', function() {
    it('should create an instance of EventInsights2018', function() {
      // uncomment below and update the code to test EventInsights2018
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be.a(TbaApiV3client.EventInsights2018);
    });

    it('should have the property autoQuestAchieved (base name: "auto_quest_achieved")', function() {
      // uncomment below and update the code to test the property autoQuestAchieved
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageBoostPlayed (base name: "average_boost_played")', function() {
      // uncomment below and update the code to test the property averageBoostPlayed
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageEndgamePoints (base name: "average_endgame_points")', function() {
      // uncomment below and update the code to test the property averageEndgamePoints
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageForcePlayed (base name: "average_force_played")', function() {
      // uncomment below and update the code to test the property averageForcePlayed
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageFoulScore (base name: "average_foul_score")', function() {
      // uncomment below and update the code to test the property averageFoulScore
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averagePointsAuto (base name: "average_points_auto")', function() {
      // uncomment below and update the code to test the property averagePointsAuto
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averagePointsTeleop (base name: "average_points_teleop")', function() {
      // uncomment below and update the code to test the property averagePointsTeleop
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageRunPointsAuto (base name: "average_run_points_auto")', function() {
      // uncomment below and update the code to test the property averageRunPointsAuto
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageScaleOwnershipPoints (base name: "average_scale_ownership_points")', function() {
      // uncomment below and update the code to test the property averageScaleOwnershipPoints
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageScaleOwnershipPointsAuto (base name: "average_scale_ownership_points_auto")', function() {
      // uncomment below and update the code to test the property averageScaleOwnershipPointsAuto
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageScaleOwnershipPointsTeleop (base name: "average_scale_ownership_points_teleop")', function() {
      // uncomment below and update the code to test the property averageScaleOwnershipPointsTeleop
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageScore (base name: "average_score")', function() {
      // uncomment below and update the code to test the property averageScore
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageSwitchOwnershipPoints (base name: "average_switch_ownership_points")', function() {
      // uncomment below and update the code to test the property averageSwitchOwnershipPoints
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageSwitchOwnershipPointsAuto (base name: "average_switch_ownership_points_auto")', function() {
      // uncomment below and update the code to test the property averageSwitchOwnershipPointsAuto
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageSwitchOwnershipPointsTeleop (base name: "average_switch_ownership_points_teleop")', function() {
      // uncomment below and update the code to test the property averageSwitchOwnershipPointsTeleop
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageVaultPoints (base name: "average_vault_points")', function() {
      // uncomment below and update the code to test the property averageVaultPoints
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageWinMargin (base name: "average_win_margin")', function() {
      // uncomment below and update the code to test the property averageWinMargin
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property averageWinScore (base name: "average_win_score")', function() {
      // uncomment below and update the code to test the property averageWinScore
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property boostPlayedCounts (base name: "boost_played_counts")', function() {
      // uncomment below and update the code to test the property boostPlayedCounts
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property climbCounts (base name: "climb_counts")', function() {
      // uncomment below and update the code to test the property climbCounts
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property faceTheBossAchieved (base name: "face_the_boss_achieved")', function() {
      // uncomment below and update the code to test the property faceTheBossAchieved
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property forcePlayedCounts (base name: "force_played_counts")', function() {
      // uncomment below and update the code to test the property forcePlayedCounts
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property highScore (base name: "high_score")', function() {
      // uncomment below and update the code to test the property highScore
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property levitatePlayedCounts (base name: "levitate_played_counts")', function() {
      // uncomment below and update the code to test the property levitatePlayedCounts
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property runCountsAuto (base name: "run_counts_auto")', function() {
      // uncomment below and update the code to test the property runCountsAuto
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property scaleNeutralPercentage (base name: "scale_neutral_percentage")', function() {
      // uncomment below and update the code to test the property scaleNeutralPercentage
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property scaleNeutralPercentageAuto (base name: "scale_neutral_percentage_auto")', function() {
      // uncomment below and update the code to test the property scaleNeutralPercentageAuto
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property scaleNeutralPercentageTeleop (base name: "scale_neutral_percentage_teleop")', function() {
      // uncomment below and update the code to test the property scaleNeutralPercentageTeleop
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property switchOwnedCountsAuto (base name: "switch_owned_counts_auto")', function() {
      // uncomment below and update the code to test the property switchOwnedCountsAuto
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property unicornMatches (base name: "unicorn_matches")', function() {
      // uncomment below and update the code to test the property unicornMatches
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property winningOppSwitchDenialPercentageTeleop (base name: "winning_opp_switch_denial_percentage_teleop")', function() {
      // uncomment below and update the code to test the property winningOppSwitchDenialPercentageTeleop
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property winningOwnSwitchOwnershipPercentage (base name: "winning_own_switch_ownership_percentage")', function() {
      // uncomment below and update the code to test the property winningOwnSwitchOwnershipPercentage
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property winningOwnSwitchOwnershipPercentageAuto (base name: "winning_own_switch_ownership_percentage_auto")', function() {
      // uncomment below and update the code to test the property winningOwnSwitchOwnershipPercentageAuto
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property winningOwnSwitchOwnershipPercentageTeleop (base name: "winning_own_switch_ownership_percentage_teleop")', function() {
      // uncomment below and update the code to test the property winningOwnSwitchOwnershipPercentageTeleop
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property winningScaleOwnershipPercentage (base name: "winning_scale_ownership_percentage")', function() {
      // uncomment below and update the code to test the property winningScaleOwnershipPercentage
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property winningScaleOwnershipPercentageAuto (base name: "winning_scale_ownership_percentage_auto")', function() {
      // uncomment below and update the code to test the property winningScaleOwnershipPercentageAuto
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

    it('should have the property winningScaleOwnershipPercentageTeleop (base name: "winning_scale_ownership_percentage_teleop")', function() {
      // uncomment below and update the code to test the property winningScaleOwnershipPercentageTeleop
      //var instane = new TbaApiV3client.EventInsights2018();
      //expect(instance).to.be();
    });

  });

}));

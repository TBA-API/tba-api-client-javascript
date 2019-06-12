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

import ApiClient from '../ApiClient';

/**
 * The EventInsights2018 model module.
 * @module model/EventInsights2018
 * @version 3.04.1
 */
class EventInsights2018 {
    /**
     * Constructs a new <code>EventInsights2018</code>.
     * Insights for FIRST Power Up qualification and elimination matches.
     * @alias module:model/EventInsights2018
     * @param autoQuestAchieved {Array.<Number>} An array with three values, number of times auto quest was completed, number of opportunities to complete the auto quest, and percentage.
     * @param averageBoostPlayed {Number} Average number of boost power up scored (out of 3).
     * @param averageEndgamePoints {Number} Average endgame points.
     * @param averageForcePlayed {Number} Average number of force power up scored (out of 3).
     * @param averageFoulScore {Number} Average foul score.
     * @param averagePointsAuto {Number} Average points scored during auto.
     * @param averagePointsTeleop {Number} Average points scored during teleop.
     * @param averageRunPointsAuto {Number} Average mobility points scored during auto.
     * @param averageScaleOwnershipPoints {Number} Average scale ownership points scored.
     * @param averageScaleOwnershipPointsAuto {Number} Average scale ownership points scored during auto.
     * @param averageScaleOwnershipPointsTeleop {Number} Average scale ownership points scored during teleop.
     * @param averageScore {Number} Average score.
     * @param averageSwitchOwnershipPoints {Number} Average switch ownership points scored.
     * @param averageSwitchOwnershipPointsAuto {Number} Average switch ownership points scored during auto.
     * @param averageSwitchOwnershipPointsTeleop {Number} Average switch ownership points scored during teleop.
     * @param averageVaultPoints {Number} Average value points scored.
     * @param averageWinMargin {Number} Average margin of victory.
     * @param averageWinScore {Number} Average winning score.
     * @param boostPlayedCounts {Array.<Number>} An array with three values, number of times a boost power up was played, number of opportunities to play a boost power up, and percentage.
     * @param climbCounts {Array.<Number>} An array with three values, number of times a climb occurred, number of opportunities to climb, and percentage.
     * @param faceTheBossAchieved {Array.<Number>} An array with three values, number of times an alliance faced the boss, number of opportunities to face the boss, and percentage.
     * @param forcePlayedCounts {Array.<Number>} An array with three values, number of times a force power up was played, number of opportunities to play a force power up, and percentage.
     * @param highScore {Array.<String>} An array with three values, high score, match key from the match with the high score, and the name of the match
     * @param levitatePlayedCounts {Array.<Number>} An array with three values, number of times a levitate power up was played, number of opportunities to play a levitate power up, and percentage.
     * @param runCountsAuto {Array.<Number>} An array with three values, number of times a team scored mobility points in auto, number of opportunities to score mobility points in auto, and percentage.
     * @param scaleNeutralPercentage {Number} Average scale neutral percentage.
     * @param scaleNeutralPercentageAuto {Number} Average scale neutral percentage during auto.
     * @param scaleNeutralPercentageTeleop {Number} Average scale neutral percentage during teleop.
     * @param switchOwnedCountsAuto {Array.<Number>} An array with three values, number of times a switch was owned during auto, number of opportunities to own a switch during auto, and percentage.
     * @param unicornMatches {Array.<Number>} An array with three values, number of times a unicorn match (Win + Auto Quest + Face the Boss) occurred, number of opportunities to have a unicorn match, and percentage.
     * @param winningOppSwitchDenialPercentageTeleop {Number} Average opposing switch denail percentage for the winning alliance during teleop.
     * @param winningOwnSwitchOwnershipPercentage {Number} Average own switch ownership percentage for the winning alliance.
     * @param winningOwnSwitchOwnershipPercentageAuto {Number} Average own switch ownership percentage for the winning alliance during auto.
     * @param winningOwnSwitchOwnershipPercentageTeleop {Number} Average own switch ownership percentage for the winning alliance during teleop.
     * @param winningScaleOwnershipPercentage {Number} Average scale ownership percentage for the winning alliance.
     * @param winningScaleOwnershipPercentageAuto {Number} Average scale ownership percentage for the winning alliance during auto.
     * @param winningScaleOwnershipPercentageTeleop {Number} Average scale ownership percentage for the winning alliance during teleop.
     */
    constructor(autoQuestAchieved, averageBoostPlayed, averageEndgamePoints, averageForcePlayed, averageFoulScore, averagePointsAuto, averagePointsTeleop, averageRunPointsAuto, averageScaleOwnershipPoints, averageScaleOwnershipPointsAuto, averageScaleOwnershipPointsTeleop, averageScore, averageSwitchOwnershipPoints, averageSwitchOwnershipPointsAuto, averageSwitchOwnershipPointsTeleop, averageVaultPoints, averageWinMargin, averageWinScore, boostPlayedCounts, climbCounts, faceTheBossAchieved, forcePlayedCounts, highScore, levitatePlayedCounts, runCountsAuto, scaleNeutralPercentage, scaleNeutralPercentageAuto, scaleNeutralPercentageTeleop, switchOwnedCountsAuto, unicornMatches, winningOppSwitchDenialPercentageTeleop, winningOwnSwitchOwnershipPercentage, winningOwnSwitchOwnershipPercentageAuto, winningOwnSwitchOwnershipPercentageTeleop, winningScaleOwnershipPercentage, winningScaleOwnershipPercentageAuto, winningScaleOwnershipPercentageTeleop) { 
        
        EventInsights2018.initialize(this, autoQuestAchieved, averageBoostPlayed, averageEndgamePoints, averageForcePlayed, averageFoulScore, averagePointsAuto, averagePointsTeleop, averageRunPointsAuto, averageScaleOwnershipPoints, averageScaleOwnershipPointsAuto, averageScaleOwnershipPointsTeleop, averageScore, averageSwitchOwnershipPoints, averageSwitchOwnershipPointsAuto, averageSwitchOwnershipPointsTeleop, averageVaultPoints, averageWinMargin, averageWinScore, boostPlayedCounts, climbCounts, faceTheBossAchieved, forcePlayedCounts, highScore, levitatePlayedCounts, runCountsAuto, scaleNeutralPercentage, scaleNeutralPercentageAuto, scaleNeutralPercentageTeleop, switchOwnedCountsAuto, unicornMatches, winningOppSwitchDenialPercentageTeleop, winningOwnSwitchOwnershipPercentage, winningOwnSwitchOwnershipPercentageAuto, winningOwnSwitchOwnershipPercentageTeleop, winningScaleOwnershipPercentage, winningScaleOwnershipPercentageAuto, winningScaleOwnershipPercentageTeleop);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, autoQuestAchieved, averageBoostPlayed, averageEndgamePoints, averageForcePlayed, averageFoulScore, averagePointsAuto, averagePointsTeleop, averageRunPointsAuto, averageScaleOwnershipPoints, averageScaleOwnershipPointsAuto, averageScaleOwnershipPointsTeleop, averageScore, averageSwitchOwnershipPoints, averageSwitchOwnershipPointsAuto, averageSwitchOwnershipPointsTeleop, averageVaultPoints, averageWinMargin, averageWinScore, boostPlayedCounts, climbCounts, faceTheBossAchieved, forcePlayedCounts, highScore, levitatePlayedCounts, runCountsAuto, scaleNeutralPercentage, scaleNeutralPercentageAuto, scaleNeutralPercentageTeleop, switchOwnedCountsAuto, unicornMatches, winningOppSwitchDenialPercentageTeleop, winningOwnSwitchOwnershipPercentage, winningOwnSwitchOwnershipPercentageAuto, winningOwnSwitchOwnershipPercentageTeleop, winningScaleOwnershipPercentage, winningScaleOwnershipPercentageAuto, winningScaleOwnershipPercentageTeleop) { 
        obj['auto_quest_achieved'] = autoQuestAchieved;
        obj['average_boost_played'] = averageBoostPlayed;
        obj['average_endgame_points'] = averageEndgamePoints;
        obj['average_force_played'] = averageForcePlayed;
        obj['average_foul_score'] = averageFoulScore;
        obj['average_points_auto'] = averagePointsAuto;
        obj['average_points_teleop'] = averagePointsTeleop;
        obj['average_run_points_auto'] = averageRunPointsAuto;
        obj['average_scale_ownership_points'] = averageScaleOwnershipPoints;
        obj['average_scale_ownership_points_auto'] = averageScaleOwnershipPointsAuto;
        obj['average_scale_ownership_points_teleop'] = averageScaleOwnershipPointsTeleop;
        obj['average_score'] = averageScore;
        obj['average_switch_ownership_points'] = averageSwitchOwnershipPoints;
        obj['average_switch_ownership_points_auto'] = averageSwitchOwnershipPointsAuto;
        obj['average_switch_ownership_points_teleop'] = averageSwitchOwnershipPointsTeleop;
        obj['average_vault_points'] = averageVaultPoints;
        obj['average_win_margin'] = averageWinMargin;
        obj['average_win_score'] = averageWinScore;
        obj['boost_played_counts'] = boostPlayedCounts;
        obj['climb_counts'] = climbCounts;
        obj['face_the_boss_achieved'] = faceTheBossAchieved;
        obj['force_played_counts'] = forcePlayedCounts;
        obj['high_score'] = highScore;
        obj['levitate_played_counts'] = levitatePlayedCounts;
        obj['run_counts_auto'] = runCountsAuto;
        obj['scale_neutral_percentage'] = scaleNeutralPercentage;
        obj['scale_neutral_percentage_auto'] = scaleNeutralPercentageAuto;
        obj['scale_neutral_percentage_teleop'] = scaleNeutralPercentageTeleop;
        obj['switch_owned_counts_auto'] = switchOwnedCountsAuto;
        obj['unicorn_matches'] = unicornMatches;
        obj['winning_opp_switch_denial_percentage_teleop'] = winningOppSwitchDenialPercentageTeleop;
        obj['winning_own_switch_ownership_percentage'] = winningOwnSwitchOwnershipPercentage;
        obj['winning_own_switch_ownership_percentage_auto'] = winningOwnSwitchOwnershipPercentageAuto;
        obj['winning_own_switch_ownership_percentage_teleop'] = winningOwnSwitchOwnershipPercentageTeleop;
        obj['winning_scale_ownership_percentage'] = winningScaleOwnershipPercentage;
        obj['winning_scale_ownership_percentage_auto'] = winningScaleOwnershipPercentageAuto;
        obj['winning_scale_ownership_percentage_teleop'] = winningScaleOwnershipPercentageTeleop;
    }

    /**
     * Constructs a <code>EventInsights2018</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventInsights2018} obj Optional instance to populate.
     * @return {module:model/EventInsights2018} The populated <code>EventInsights2018</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventInsights2018();

            if (data.hasOwnProperty('auto_quest_achieved')) {
                obj['auto_quest_achieved'] = ApiClient.convertToType(data['auto_quest_achieved'], ['Number']);
            }
            if (data.hasOwnProperty('average_boost_played')) {
                obj['average_boost_played'] = ApiClient.convertToType(data['average_boost_played'], 'Number');
            }
            if (data.hasOwnProperty('average_endgame_points')) {
                obj['average_endgame_points'] = ApiClient.convertToType(data['average_endgame_points'], 'Number');
            }
            if (data.hasOwnProperty('average_force_played')) {
                obj['average_force_played'] = ApiClient.convertToType(data['average_force_played'], 'Number');
            }
            if (data.hasOwnProperty('average_foul_score')) {
                obj['average_foul_score'] = ApiClient.convertToType(data['average_foul_score'], 'Number');
            }
            if (data.hasOwnProperty('average_points_auto')) {
                obj['average_points_auto'] = ApiClient.convertToType(data['average_points_auto'], 'Number');
            }
            if (data.hasOwnProperty('average_points_teleop')) {
                obj['average_points_teleop'] = ApiClient.convertToType(data['average_points_teleop'], 'Number');
            }
            if (data.hasOwnProperty('average_run_points_auto')) {
                obj['average_run_points_auto'] = ApiClient.convertToType(data['average_run_points_auto'], 'Number');
            }
            if (data.hasOwnProperty('average_scale_ownership_points')) {
                obj['average_scale_ownership_points'] = ApiClient.convertToType(data['average_scale_ownership_points'], 'Number');
            }
            if (data.hasOwnProperty('average_scale_ownership_points_auto')) {
                obj['average_scale_ownership_points_auto'] = ApiClient.convertToType(data['average_scale_ownership_points_auto'], 'Number');
            }
            if (data.hasOwnProperty('average_scale_ownership_points_teleop')) {
                obj['average_scale_ownership_points_teleop'] = ApiClient.convertToType(data['average_scale_ownership_points_teleop'], 'Number');
            }
            if (data.hasOwnProperty('average_score')) {
                obj['average_score'] = ApiClient.convertToType(data['average_score'], 'Number');
            }
            if (data.hasOwnProperty('average_switch_ownership_points')) {
                obj['average_switch_ownership_points'] = ApiClient.convertToType(data['average_switch_ownership_points'], 'Number');
            }
            if (data.hasOwnProperty('average_switch_ownership_points_auto')) {
                obj['average_switch_ownership_points_auto'] = ApiClient.convertToType(data['average_switch_ownership_points_auto'], 'Number');
            }
            if (data.hasOwnProperty('average_switch_ownership_points_teleop')) {
                obj['average_switch_ownership_points_teleop'] = ApiClient.convertToType(data['average_switch_ownership_points_teleop'], 'Number');
            }
            if (data.hasOwnProperty('average_vault_points')) {
                obj['average_vault_points'] = ApiClient.convertToType(data['average_vault_points'], 'Number');
            }
            if (data.hasOwnProperty('average_win_margin')) {
                obj['average_win_margin'] = ApiClient.convertToType(data['average_win_margin'], 'Number');
            }
            if (data.hasOwnProperty('average_win_score')) {
                obj['average_win_score'] = ApiClient.convertToType(data['average_win_score'], 'Number');
            }
            if (data.hasOwnProperty('boost_played_counts')) {
                obj['boost_played_counts'] = ApiClient.convertToType(data['boost_played_counts'], ['Number']);
            }
            if (data.hasOwnProperty('climb_counts')) {
                obj['climb_counts'] = ApiClient.convertToType(data['climb_counts'], ['Number']);
            }
            if (data.hasOwnProperty('face_the_boss_achieved')) {
                obj['face_the_boss_achieved'] = ApiClient.convertToType(data['face_the_boss_achieved'], ['Number']);
            }
            if (data.hasOwnProperty('force_played_counts')) {
                obj['force_played_counts'] = ApiClient.convertToType(data['force_played_counts'], ['Number']);
            }
            if (data.hasOwnProperty('high_score')) {
                obj['high_score'] = ApiClient.convertToType(data['high_score'], ['String']);
            }
            if (data.hasOwnProperty('levitate_played_counts')) {
                obj['levitate_played_counts'] = ApiClient.convertToType(data['levitate_played_counts'], ['Number']);
            }
            if (data.hasOwnProperty('run_counts_auto')) {
                obj['run_counts_auto'] = ApiClient.convertToType(data['run_counts_auto'], ['Number']);
            }
            if (data.hasOwnProperty('scale_neutral_percentage')) {
                obj['scale_neutral_percentage'] = ApiClient.convertToType(data['scale_neutral_percentage'], 'Number');
            }
            if (data.hasOwnProperty('scale_neutral_percentage_auto')) {
                obj['scale_neutral_percentage_auto'] = ApiClient.convertToType(data['scale_neutral_percentage_auto'], 'Number');
            }
            if (data.hasOwnProperty('scale_neutral_percentage_teleop')) {
                obj['scale_neutral_percentage_teleop'] = ApiClient.convertToType(data['scale_neutral_percentage_teleop'], 'Number');
            }
            if (data.hasOwnProperty('switch_owned_counts_auto')) {
                obj['switch_owned_counts_auto'] = ApiClient.convertToType(data['switch_owned_counts_auto'], ['Number']);
            }
            if (data.hasOwnProperty('unicorn_matches')) {
                obj['unicorn_matches'] = ApiClient.convertToType(data['unicorn_matches'], ['Number']);
            }
            if (data.hasOwnProperty('winning_opp_switch_denial_percentage_teleop')) {
                obj['winning_opp_switch_denial_percentage_teleop'] = ApiClient.convertToType(data['winning_opp_switch_denial_percentage_teleop'], 'Number');
            }
            if (data.hasOwnProperty('winning_own_switch_ownership_percentage')) {
                obj['winning_own_switch_ownership_percentage'] = ApiClient.convertToType(data['winning_own_switch_ownership_percentage'], 'Number');
            }
            if (data.hasOwnProperty('winning_own_switch_ownership_percentage_auto')) {
                obj['winning_own_switch_ownership_percentage_auto'] = ApiClient.convertToType(data['winning_own_switch_ownership_percentage_auto'], 'Number');
            }
            if (data.hasOwnProperty('winning_own_switch_ownership_percentage_teleop')) {
                obj['winning_own_switch_ownership_percentage_teleop'] = ApiClient.convertToType(data['winning_own_switch_ownership_percentage_teleop'], 'Number');
            }
            if (data.hasOwnProperty('winning_scale_ownership_percentage')) {
                obj['winning_scale_ownership_percentage'] = ApiClient.convertToType(data['winning_scale_ownership_percentage'], 'Number');
            }
            if (data.hasOwnProperty('winning_scale_ownership_percentage_auto')) {
                obj['winning_scale_ownership_percentage_auto'] = ApiClient.convertToType(data['winning_scale_ownership_percentage_auto'], 'Number');
            }
            if (data.hasOwnProperty('winning_scale_ownership_percentage_teleop')) {
                obj['winning_scale_ownership_percentage_teleop'] = ApiClient.convertToType(data['winning_scale_ownership_percentage_teleop'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * An array with three values, number of times auto quest was completed, number of opportunities to complete the auto quest, and percentage.
 * @member {Array.<Number>} auto_quest_achieved
 */
EventInsights2018.prototype['auto_quest_achieved'] = undefined;

/**
 * Average number of boost power up scored (out of 3).
 * @member {Number} average_boost_played
 */
EventInsights2018.prototype['average_boost_played'] = undefined;

/**
 * Average endgame points.
 * @member {Number} average_endgame_points
 */
EventInsights2018.prototype['average_endgame_points'] = undefined;

/**
 * Average number of force power up scored (out of 3).
 * @member {Number} average_force_played
 */
EventInsights2018.prototype['average_force_played'] = undefined;

/**
 * Average foul score.
 * @member {Number} average_foul_score
 */
EventInsights2018.prototype['average_foul_score'] = undefined;

/**
 * Average points scored during auto.
 * @member {Number} average_points_auto
 */
EventInsights2018.prototype['average_points_auto'] = undefined;

/**
 * Average points scored during teleop.
 * @member {Number} average_points_teleop
 */
EventInsights2018.prototype['average_points_teleop'] = undefined;

/**
 * Average mobility points scored during auto.
 * @member {Number} average_run_points_auto
 */
EventInsights2018.prototype['average_run_points_auto'] = undefined;

/**
 * Average scale ownership points scored.
 * @member {Number} average_scale_ownership_points
 */
EventInsights2018.prototype['average_scale_ownership_points'] = undefined;

/**
 * Average scale ownership points scored during auto.
 * @member {Number} average_scale_ownership_points_auto
 */
EventInsights2018.prototype['average_scale_ownership_points_auto'] = undefined;

/**
 * Average scale ownership points scored during teleop.
 * @member {Number} average_scale_ownership_points_teleop
 */
EventInsights2018.prototype['average_scale_ownership_points_teleop'] = undefined;

/**
 * Average score.
 * @member {Number} average_score
 */
EventInsights2018.prototype['average_score'] = undefined;

/**
 * Average switch ownership points scored.
 * @member {Number} average_switch_ownership_points
 */
EventInsights2018.prototype['average_switch_ownership_points'] = undefined;

/**
 * Average switch ownership points scored during auto.
 * @member {Number} average_switch_ownership_points_auto
 */
EventInsights2018.prototype['average_switch_ownership_points_auto'] = undefined;

/**
 * Average switch ownership points scored during teleop.
 * @member {Number} average_switch_ownership_points_teleop
 */
EventInsights2018.prototype['average_switch_ownership_points_teleop'] = undefined;

/**
 * Average value points scored.
 * @member {Number} average_vault_points
 */
EventInsights2018.prototype['average_vault_points'] = undefined;

/**
 * Average margin of victory.
 * @member {Number} average_win_margin
 */
EventInsights2018.prototype['average_win_margin'] = undefined;

/**
 * Average winning score.
 * @member {Number} average_win_score
 */
EventInsights2018.prototype['average_win_score'] = undefined;

/**
 * An array with three values, number of times a boost power up was played, number of opportunities to play a boost power up, and percentage.
 * @member {Array.<Number>} boost_played_counts
 */
EventInsights2018.prototype['boost_played_counts'] = undefined;

/**
 * An array with three values, number of times a climb occurred, number of opportunities to climb, and percentage.
 * @member {Array.<Number>} climb_counts
 */
EventInsights2018.prototype['climb_counts'] = undefined;

/**
 * An array with three values, number of times an alliance faced the boss, number of opportunities to face the boss, and percentage.
 * @member {Array.<Number>} face_the_boss_achieved
 */
EventInsights2018.prototype['face_the_boss_achieved'] = undefined;

/**
 * An array with three values, number of times a force power up was played, number of opportunities to play a force power up, and percentage.
 * @member {Array.<Number>} force_played_counts
 */
EventInsights2018.prototype['force_played_counts'] = undefined;

/**
 * An array with three values, high score, match key from the match with the high score, and the name of the match
 * @member {Array.<String>} high_score
 */
EventInsights2018.prototype['high_score'] = undefined;

/**
 * An array with three values, number of times a levitate power up was played, number of opportunities to play a levitate power up, and percentage.
 * @member {Array.<Number>} levitate_played_counts
 */
EventInsights2018.prototype['levitate_played_counts'] = undefined;

/**
 * An array with three values, number of times a team scored mobility points in auto, number of opportunities to score mobility points in auto, and percentage.
 * @member {Array.<Number>} run_counts_auto
 */
EventInsights2018.prototype['run_counts_auto'] = undefined;

/**
 * Average scale neutral percentage.
 * @member {Number} scale_neutral_percentage
 */
EventInsights2018.prototype['scale_neutral_percentage'] = undefined;

/**
 * Average scale neutral percentage during auto.
 * @member {Number} scale_neutral_percentage_auto
 */
EventInsights2018.prototype['scale_neutral_percentage_auto'] = undefined;

/**
 * Average scale neutral percentage during teleop.
 * @member {Number} scale_neutral_percentage_teleop
 */
EventInsights2018.prototype['scale_neutral_percentage_teleop'] = undefined;

/**
 * An array with three values, number of times a switch was owned during auto, number of opportunities to own a switch during auto, and percentage.
 * @member {Array.<Number>} switch_owned_counts_auto
 */
EventInsights2018.prototype['switch_owned_counts_auto'] = undefined;

/**
 * An array with three values, number of times a unicorn match (Win + Auto Quest + Face the Boss) occurred, number of opportunities to have a unicorn match, and percentage.
 * @member {Array.<Number>} unicorn_matches
 */
EventInsights2018.prototype['unicorn_matches'] = undefined;

/**
 * Average opposing switch denail percentage for the winning alliance during teleop.
 * @member {Number} winning_opp_switch_denial_percentage_teleop
 */
EventInsights2018.prototype['winning_opp_switch_denial_percentage_teleop'] = undefined;

/**
 * Average own switch ownership percentage for the winning alliance.
 * @member {Number} winning_own_switch_ownership_percentage
 */
EventInsights2018.prototype['winning_own_switch_ownership_percentage'] = undefined;

/**
 * Average own switch ownership percentage for the winning alliance during auto.
 * @member {Number} winning_own_switch_ownership_percentage_auto
 */
EventInsights2018.prototype['winning_own_switch_ownership_percentage_auto'] = undefined;

/**
 * Average own switch ownership percentage for the winning alliance during teleop.
 * @member {Number} winning_own_switch_ownership_percentage_teleop
 */
EventInsights2018.prototype['winning_own_switch_ownership_percentage_teleop'] = undefined;

/**
 * Average scale ownership percentage for the winning alliance.
 * @member {Number} winning_scale_ownership_percentage
 */
EventInsights2018.prototype['winning_scale_ownership_percentage'] = undefined;

/**
 * Average scale ownership percentage for the winning alliance during auto.
 * @member {Number} winning_scale_ownership_percentage_auto
 */
EventInsights2018.prototype['winning_scale_ownership_percentage_auto'] = undefined;

/**
 * Average scale ownership percentage for the winning alliance during teleop.
 * @member {Number} winning_scale_ownership_percentage_teleop
 */
EventInsights2018.prototype['winning_scale_ownership_percentage_teleop'] = undefined;






export default EventInsights2018;


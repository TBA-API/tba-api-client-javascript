# TbaApiV3client.MatchTimeseries2018

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventKey** | **String** | TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event. | [optional] 
**matchId** | **String** | Match ID consisting of the level, match number, and set number, eg &#x60;qm45&#x60; or &#x60;f1m1&#x60;. | [optional] 
**mode** | **String** | Current mode of play, can be &#x60;pre_match&#x60;, &#x60;auto&#x60;, &#x60;telop&#x60;, or &#x60;post_match&#x60;. | [optional] 
**play** | **Number** |  | [optional] 
**timeRemaining** | **Number** | Amount of time remaining in the match, only valid during &#x60;auto&#x60; and &#x60;teleop&#x60; modes. | [optional] 
**blueAutoQuest** | **Number** | 1 if the blue alliance is credited with the AUTO QUEST, 0 if not. | [optional] 
**blueBoostCount** | **Number** | Number of POWER CUBES in the BOOST section of the blue alliance VAULT. | [optional] 
**blueBoostPlayed** | **Number** | Returns 1 if the blue alliance BOOST was played, or 0 if not played. | [optional] 
**blueCurrentPowerup** | **String** | Name of the current blue alliance POWER UP being played, or &#x60;null&#x60;. | [optional] 
**blueFaceTheBoss** | **Number** | 1 if the blue alliance is credited with FACING THE BOSS, 0 if not. | [optional] 
**blueForceCount** | **Number** | Number of POWER CUBES in the FORCE section of the blue alliance VAULT. | [optional] 
**blueForcePlayed** | **Number** | Returns 1 if the blue alliance FORCE was played, or 0 if not played. | [optional] 
**blueLevitateCount** | **Number** | Number of POWER CUBES in the LEVITATE section of the blue alliance VAULT. | [optional] 
**blueLevitatePlayed** | **Number** | Returns 1 if the blue alliance LEVITATE was played, or 0 if not played. | [optional] 
**bluePowerupTimeRemaining** | **String** | Number of seconds remaining in the blue alliance POWER UP time, or 0 if none is active. | [optional] 
**blueScaleOwned** | **Number** | 1 if the blue alliance owns the SCALE, 0 if not. | [optional] 
**blueScore** | **Number** | Current score for the blue alliance. | [optional] 
**blueSwitchOwned** | **Number** | 1 if the blue alliance owns their SWITCH, 0 if not. | [optional] 
**redAutoQuest** | **Number** | 1 if the red alliance is credited with the AUTO QUEST, 0 if not. | [optional] 
**redBoostCount** | **Number** | Number of POWER CUBES in the BOOST section of the red alliance VAULT. | [optional] 
**redBoostPlayed** | **Number** | Returns 1 if the red alliance BOOST was played, or 0 if not played. | [optional] 
**redCurrentPowerup** | **String** | Name of the current red alliance POWER UP being played, or &#x60;null&#x60;. | [optional] 
**redFaceTheBoss** | **Number** | 1 if the red alliance is credited with FACING THE BOSS, 0 if not. | [optional] 
**redForceCount** | **Number** | Number of POWER CUBES in the FORCE section of the red alliance VAULT. | [optional] 
**redForcePlayed** | **Number** | Returns 1 if the red alliance FORCE was played, or 0 if not played. | [optional] 
**redLevitateCount** | **Number** | Number of POWER CUBES in the LEVITATE section of the red alliance VAULT. | [optional] 
**redLevitatePlayed** | **Number** | Returns 1 if the red alliance LEVITATE was played, or 0 if not played. | [optional] 
**redPowerupTimeRemaining** | **String** | Number of seconds remaining in the red alliance POWER UP time, or 0 if none is active. | [optional] 
**redScaleOwned** | **Number** | 1 if the red alliance owns the SCALE, 0 if not. | [optional] 
**redScore** | **Number** | Current score for the red alliance. | [optional] 
**redSwitchOwned** | **Number** | 1 if the red alliance owns their SWITCH, 0 if not. | [optional] 



/**
 * The Blue Alliance API v3
 * # Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
 *
 * The version of the OpenAPI document: 3.8.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DistrictRankingEventPoints model module.
 * @module model/DistrictRankingEventPoints
 * @version 3.8.0
 */
class DistrictRankingEventPoints {
    /**
     * Constructs a new <code>DistrictRankingEventPoints</code>.
     * @alias module:model/DistrictRankingEventPoints
     * @param districtCmp {Boolean} `true` if this event is a District Championship event.
     * @param total {Number} Total points awarded at this event.
     * @param alliancePoints {Number} Points awarded for alliance selection.
     * @param elimPoints {Number} Points awarded for elimination match performance.
     * @param awardPoints {Number} Points awarded for event awards.
     * @param eventKey {String} TBA Event key for this event.
     * @param qualPoints {Number} Points awarded for qualification match performance.
     */
    constructor(districtCmp, total, alliancePoints, elimPoints, awardPoints, eventKey, qualPoints) { 
        
        DistrictRankingEventPoints.initialize(this, districtCmp, total, alliancePoints, elimPoints, awardPoints, eventKey, qualPoints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, districtCmp, total, alliancePoints, elimPoints, awardPoints, eventKey, qualPoints) { 
        obj['district_cmp'] = districtCmp;
        obj['total'] = total;
        obj['alliance_points'] = alliancePoints;
        obj['elim_points'] = elimPoints;
        obj['award_points'] = awardPoints;
        obj['event_key'] = eventKey;
        obj['qual_points'] = qualPoints;
    }

    /**
     * Constructs a <code>DistrictRankingEventPoints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DistrictRankingEventPoints} obj Optional instance to populate.
     * @return {module:model/DistrictRankingEventPoints} The populated <code>DistrictRankingEventPoints</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DistrictRankingEventPoints();

            if (data.hasOwnProperty('district_cmp')) {
                obj['district_cmp'] = ApiClient.convertToType(data['district_cmp'], 'Boolean');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('alliance_points')) {
                obj['alliance_points'] = ApiClient.convertToType(data['alliance_points'], 'Number');
            }
            if (data.hasOwnProperty('elim_points')) {
                obj['elim_points'] = ApiClient.convertToType(data['elim_points'], 'Number');
            }
            if (data.hasOwnProperty('award_points')) {
                obj['award_points'] = ApiClient.convertToType(data['award_points'], 'Number');
            }
            if (data.hasOwnProperty('event_key')) {
                obj['event_key'] = ApiClient.convertToType(data['event_key'], 'String');
            }
            if (data.hasOwnProperty('qual_points')) {
                obj['qual_points'] = ApiClient.convertToType(data['qual_points'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * `true` if this event is a District Championship event.
 * @member {Boolean} district_cmp
 */
DistrictRankingEventPoints.prototype['district_cmp'] = undefined;

/**
 * Total points awarded at this event.
 * @member {Number} total
 */
DistrictRankingEventPoints.prototype['total'] = undefined;

/**
 * Points awarded for alliance selection.
 * @member {Number} alliance_points
 */
DistrictRankingEventPoints.prototype['alliance_points'] = undefined;

/**
 * Points awarded for elimination match performance.
 * @member {Number} elim_points
 */
DistrictRankingEventPoints.prototype['elim_points'] = undefined;

/**
 * Points awarded for event awards.
 * @member {Number} award_points
 */
DistrictRankingEventPoints.prototype['award_points'] = undefined;

/**
 * TBA Event key for this event.
 * @member {String} event_key
 */
DistrictRankingEventPoints.prototype['event_key'] = undefined;

/**
 * Points awarded for qualification match performance.
 * @member {Number} qual_points
 */
DistrictRankingEventPoints.prototype['qual_points'] = undefined;






export default DistrictRankingEventPoints;


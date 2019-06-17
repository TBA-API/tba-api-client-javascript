/**
 * The Blue Alliance API v3
 * # Overview    Information and statistics about FIRST Robotics Competition teams and events.   # Authentication   All endpoints require an Auth Key to be passed in the header `X-TBA-Auth-Key`. If you do not have an auth key yet, you can obtain one from your [Account Page](/account).    A `User-Agent` header may need to be set to prevent a 403 Unauthorized error.
 *
 * The version of the OpenAPI document: 3.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DistrictList from './DistrictList';

/**
 * The EventSimple model module.
 * @module model/EventSimple
 * @version 3.5
 */
class EventSimple {
    /**
     * Constructs a new <code>EventSimple</code>.
     * @alias module:model/EventSimple
     * @param key {String} TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event.
     * @param name {String} Official name of event on record either provided by FIRST or organizers of offseason event.
     * @param eventCode {String} Event short code, as provided by FIRST.
     * @param eventType {Number} Event Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/event_type.py#L2
     * @param startDate {Date} Event start date in `yyyy-mm-dd` format.
     * @param endDate {Date} Event end date in `yyyy-mm-dd` format.
     * @param year {Number} Year the event data is for.
     */
    constructor(key, name, eventCode, eventType, startDate, endDate, year) { 
        
        EventSimple.initialize(this, key, name, eventCode, eventType, startDate, endDate, year);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, name, eventCode, eventType, startDate, endDate, year) { 
        obj['key'] = key;
        obj['name'] = name;
        obj['event_code'] = eventCode;
        obj['event_type'] = eventType;
        obj['start_date'] = startDate;
        obj['end_date'] = endDate;
        obj['year'] = year;
    }

    /**
     * Constructs a <code>EventSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventSimple} obj Optional instance to populate.
     * @return {module:model/EventSimple} The populated <code>EventSimple</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventSimple();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('event_code')) {
                obj['event_code'] = ApiClient.convertToType(data['event_code'], 'String');
            }
            if (data.hasOwnProperty('event_type')) {
                obj['event_type'] = ApiClient.convertToType(data['event_type'], 'Number');
            }
            if (data.hasOwnProperty('district')) {
                obj['district'] = DistrictList.constructFromObject(data['district']);
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state_prov')) {
                obj['state_prov'] = ApiClient.convertToType(data['state_prov'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
            }
            if (data.hasOwnProperty('end_date')) {
                obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * TBA event key with the format yyyy[EVENT_CODE], where yyyy is the year, and EVENT_CODE is the event code of the event.
 * @member {String} key
 */
EventSimple.prototype['key'] = undefined;

/**
 * Official name of event on record either provided by FIRST or organizers of offseason event.
 * @member {String} name
 */
EventSimple.prototype['name'] = undefined;

/**
 * Event short code, as provided by FIRST.
 * @member {String} event_code
 */
EventSimple.prototype['event_code'] = undefined;

/**
 * Event Type, as defined here: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/event_type.py#L2
 * @member {Number} event_type
 */
EventSimple.prototype['event_type'] = undefined;

/**
 * @member {module:model/DistrictList} district
 */
EventSimple.prototype['district'] = undefined;

/**
 * City, town, village, etc. the event is located in.
 * @member {String} city
 */
EventSimple.prototype['city'] = undefined;

/**
 * State or Province the event is located in.
 * @member {String} state_prov
 */
EventSimple.prototype['state_prov'] = undefined;

/**
 * Country the event is located in.
 * @member {String} country
 */
EventSimple.prototype['country'] = undefined;

/**
 * Event start date in `yyyy-mm-dd` format.
 * @member {Date} start_date
 */
EventSimple.prototype['start_date'] = undefined;

/**
 * Event end date in `yyyy-mm-dd` format.
 * @member {Date} end_date
 */
EventSimple.prototype['end_date'] = undefined;

/**
 * Year the event data is for.
 * @member {Number} year
 */
EventSimple.prototype['year'] = undefined;






export default EventSimple;


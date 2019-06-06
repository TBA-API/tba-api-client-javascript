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
 * The Media model module.
 * @module model/Media
 * @version 3.04.1
 */
class Media {
    /**
     * Constructs a new <code>Media</code>.
     * The &#x60;Media&#x60; object contains a reference for most any media associated with a team or event on TBA.
     * @alias module:model/Media
     * @param key {String} TBA identifier for this media.
     * @param type {module:model/Media.TypeEnum} String type of the media element.
     */
    constructor(key, type) { 
        
        Media.initialize(this, key, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, type) { 
        obj['key'] = key;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>Media</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Media} obj Optional instance to populate.
     * @return {module:model/Media} The populated <code>Media</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Media();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('foreign_key')) {
                obj['foreign_key'] = ApiClient.convertToType(data['foreign_key'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], Object);
            }
            if (data.hasOwnProperty('preferred')) {
                obj['preferred'] = ApiClient.convertToType(data['preferred'], 'Boolean');
            }
            if (data.hasOwnProperty('direct_url')) {
                obj['direct_url'] = ApiClient.convertToType(data['direct_url'], 'String');
            }
            if (data.hasOwnProperty('view_url')) {
                obj['view_url'] = ApiClient.convertToType(data['view_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * TBA identifier for this media.
 * @member {String} key
 */
Media.prototype['key'] = undefined;

/**
 * String type of the media element.
 * @member {module:model/Media.TypeEnum} type
 */
Media.prototype['type'] = undefined;

/**
 * The key used to identify this media on the media site.
 * @member {String} foreign_key
 */
Media.prototype['foreign_key'] = undefined;

/**
 * If required, a JSON dict of additional media information.
 * @member {Object} details
 */
Media.prototype['details'] = undefined;

/**
 * True if the media is of high quality.
 * @member {Boolean} preferred
 */
Media.prototype['preferred'] = undefined;

/**
 * Direct URL to the media.
 * @member {String} direct_url
 */
Media.prototype['direct_url'] = undefined;

/**
 * The URL that leads to the full web page for the media, if one exists.
 * @member {String} view_url
 */
Media.prototype['view_url'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Media['TypeEnum'] = {

    /**
     * value: "youtube"
     * @const
     */
    "youtube": "youtube",

    /**
     * value: "cdphotothread"
     * @const
     */
    "cdphotothread": "cdphotothread",

    /**
     * value: "imgur"
     * @const
     */
    "imgur": "imgur",

    /**
     * value: "facebook-profile"
     * @const
     */
    "facebook-profile": "facebook-profile",

    /**
     * value: "youtube-channel"
     * @const
     */
    "youtube-channel": "youtube-channel",

    /**
     * value: "twitter-profile"
     * @const
     */
    "twitter-profile": "twitter-profile",

    /**
     * value: "github-profile"
     * @const
     */
    "github-profile": "github-profile",

    /**
     * value: "instagram-profile"
     * @const
     */
    "instagram-profile": "instagram-profile",

    /**
     * value: "periscope-profile"
     * @const
     */
    "periscope-profile": "periscope-profile",

    /**
     * value: "grabcad"
     * @const
     */
    "grabcad": "grabcad",

    /**
     * value: "instagram-image"
     * @const
     */
    "instagram-image": "instagram-image",

    /**
     * value: "external-link"
     * @const
     */
    "external-link": "external-link",

    /**
     * value: "avatar"
     * @const
     */
    "avatar": "avatar"
};



export default Media;


/**
 * TodoBudget
 * API for Todo Budget app
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Achievement from './Achievement';
import Alert from './Alert';
import Bucket from './Bucket';
import Profile from './Profile';
import UserAllOf from './UserAllOf';

/**
 * The User model module.
 * @module model/User
 * @version 1.0.0
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:model/User
     * @implements module:model/UserAllOf
     * @param id {Number} Unique id of the user
     * @param profile {module:model/Profile} 
     */
    constructor(id, profile) { 
        UserAllOf.initialize(this, id, profile);
        User.initialize(this, id, profile);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, profile) { 
        obj['id'] = id;
        obj['profile'] = profile;
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();
            UserAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('profile')) {
                obj['profile'] = Profile.constructFromObject(data['profile']);
            }
            if (data.hasOwnProperty('timeFrame')) {
                obj['timeFrame'] = ApiClient.convertToType(data['timeFrame'], 'String');
            }
            if (data.hasOwnProperty('buckets')) {
                obj['buckets'] = ApiClient.convertToType(data['buckets'], [Bucket]);
            }
            if (data.hasOwnProperty('achievements')) {
                obj['achievements'] = ApiClient.convertToType(data['achievements'], [Achievement]);
            }
            if (data.hasOwnProperty('alerts')) {
                obj['alerts'] = ApiClient.convertToType(data['alerts'], [Alert]);
            }
        }
        return obj;
    }


}

/**
 * Unique id of the user
 * @member {Number} id
 */
User.prototype['id'] = undefined;

/**
 * @member {module:model/Profile} profile
 */
User.prototype['profile'] = undefined;

/**
 * Type of time frame (default monthly)
 * @member {String} timeFrame
 */
User.prototype['timeFrame'] = undefined;

/**
 * @member {Array.<module:model/Bucket>} buckets
 */
User.prototype['buckets'] = undefined;

/**
 * @member {Array.<module:model/Achievement>} achievements
 */
User.prototype['achievements'] = undefined;

/**
 * @member {Array.<module:model/Alert>} alerts
 */
User.prototype['alerts'] = undefined;


// Implement UserAllOf interface:
/**
 * Unique id of the user
 * @member {Number} id
 */
UserAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/Profile} profile
 */
UserAllOf.prototype['profile'] = undefined;
/**
 * Type of time frame (default monthly)
 * @member {String} timeFrame
 */
UserAllOf.prototype['timeFrame'] = undefined;
/**
 * @member {Array.<module:model/Bucket>} buckets
 */
UserAllOf.prototype['buckets'] = undefined;
/**
 * @member {Array.<module:model/Achievement>} achievements
 */
UserAllOf.prototype['achievements'] = undefined;
/**
 * @member {Array.<module:model/Alert>} alerts
 */
UserAllOf.prototype['alerts'] = undefined;




export default User;


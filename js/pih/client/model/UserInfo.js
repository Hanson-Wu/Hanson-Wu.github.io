/**
 * Personal Information Hub
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['js/pih/client/ApiClient', 'js/pih/client/model/Tag', 'js/pih/client/model/UserSetting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tag'), require('./UserSetting'));
  } else {
    // Browser globals (root is window)
    if (!root.PersonalInformationHub) {
      root.PersonalInformationHub = {};
    }
    root.PersonalInformationHub.UserInfo = factory(root.PersonalInformationHub.ApiClient, root.PersonalInformationHub.Tag, root.PersonalInformationHub.UserSetting);
  }
}(this, function(ApiClient, Tag, UserSetting) {
  'use strict';




  /**
   * The UserInfo model module.
   * @module js/pih/client/model/UserInfo
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>UserInfo</code>.
   * @alias module:js/pih/client/model/UserInfo
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>UserInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js/pih/client/model/UserInfo} obj Optional instance to populate.
   * @return {module:js/pih/client/model/UserInfo} The populated <code>UserInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('ownerName')) {
        obj['ownerName'] = ApiClient.convertToType(data['ownerName'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('receive')) {
        obj['receive'] = ApiClient.convertToType(data['receive'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
      }
      if (data.hasOwnProperty('settings')) {
        obj['settings'] = ApiClient.convertToType(data['settings'], [UserSetting]);
      }
    }
    return obj;
  }

  /**
   * Name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Owner Name
   * @member {String} ownerName
   */
  exports.prototype['ownerName'] = undefined;
  /**
   * Id
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Email
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Receive Email
   * @member {String} receive
   */
  exports.prototype['receive'] = undefined;
  /**
   * Tags
   * @member {Array.<module:js/pih/client/model/Tag>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * Settings
   * @member {Array.<module:js/pih/client/model/UserSetting>} settings
   */
  exports.prototype['settings'] = undefined;



  return exports;
}));



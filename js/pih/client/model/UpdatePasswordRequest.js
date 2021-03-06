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
    define(['js/pih/client/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PersonalInformationHub) {
      root.PersonalInformationHub = {};
    }
    root.PersonalInformationHub.UpdatePasswordRequest = factory(root.PersonalInformationHub.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdatePasswordRequest model module.
   * @module js/pih/client/model/UpdatePasswordRequest
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>UpdatePasswordRequest</code>.
   * @alias module:js/pih/client/model/UpdatePasswordRequest
   * @class
   * @param email {String} Email
   * @param password {String} Password
   * @param newPwd {String} New password
   */
  var exports = function(email, password, newPwd) {
    var _this = this;

    _this['email'] = email;
    _this['password'] = password;
    _this['newPwd'] = newPwd;
  };

  /**
   * Constructs a <code>UpdatePasswordRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js/pih/client/model/UpdatePasswordRequest} obj Optional instance to populate.
   * @return {module:js/pih/client/model/UpdatePasswordRequest} The populated <code>UpdatePasswordRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('newPwd')) {
        obj['newPwd'] = ApiClient.convertToType(data['newPwd'], 'String');
      }
    }
    return obj;
  }

  /**
   * Email
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Password
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * New password
   * @member {String} newPwd
   */
  exports.prototype['newPwd'] = undefined;



  return exports;
}));



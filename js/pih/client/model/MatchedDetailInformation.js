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
    root.PersonalInformationHub.MatchedDetailInformation = factory(root.PersonalInformationHub.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MatchedDetailInformation model module.
   * @module js/pih/client/model/MatchedDetailInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>MatchedDetailInformation</code>.
   * @alias module:js/pih/client/model/MatchedDetailInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MatchedDetailInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js/pih/client/model/MatchedDetailInformation} obj Optional instance to populate.
   * @return {module:js/pih/client/model/MatchedDetailInformation} The populated <code>MatchedDetailInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('matched')) {
        obj['matched'] = ApiClient.convertToType(data['matched'], ['Integer']);
      }
      if (data.hasOwnProperty('lines')) {
        obj['lines'] = ApiClient.convertToType(data['lines'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * Matched field
   * @member {String} field
   */
  exports.prototype['field'] = undefined;
  /**
   * Matched Lines
   * @member {Array.<Integer>} matched
   */
  exports.prototype['matched'] = undefined;
  /**
   * Lines
   * @member {Object.<String, String>} lines
   */
  exports.prototype['lines'] = undefined;



  return exports;
}));



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
    define(['js/pih/client/ApiClient', 'js/pih/client/model/FoundDoc'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FoundDoc'));
  } else {
    // Browser globals (root is window)
    if (!root.PersonalInformationHub) {
      root.PersonalInformationHub = {};
    }
    root.PersonalInformationHub.SearchResult = factory(root.PersonalInformationHub.ApiClient, root.PersonalInformationHub.FoundDoc);
  }
}(this, function(ApiClient, FoundDoc) {
  'use strict';




  /**
   * The SearchResult model module.
   * @module js/pih/client/model/SearchResult
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>SearchResult</code>.
   * @alias module:js/pih/client/model/SearchResult
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>SearchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:js/pih/client/model/SearchResult} obj Optional instance to populate.
   * @return {module:js/pih/client/model/SearchResult} The populated <code>SearchResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('keywords')) {
        obj['keywords'] = ApiClient.convertToType(data['keywords'], 'String');
      }
      if (data.hasOwnProperty('suggestion')) {
        obj['suggestion'] = ApiClient.convertToType(data['suggestion'], 'String');
      }
      if (data.hasOwnProperty('totalDocs')) {
        obj['totalDocs'] = ApiClient.convertToType(data['totalDocs'], 'Integer');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Integer');
      }
      if (data.hasOwnProperty('timeUsed')) {
        obj['timeUsed'] = ApiClient.convertToType(data['timeUsed'], 'Integer');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [FoundDoc]);
      }
    }
    return obj;
  }

  /**
   * Keywords
   * @member {String} keywords
   */
  exports.prototype['keywords'] = undefined;
  /**
   * Suggestion
   * @member {String} suggestion
   */
  exports.prototype['suggestion'] = undefined;
  /**
   * Total docs found
   * @member {Integer} totalDocs
   */
  exports.prototype['totalDocs'] = undefined;
  /**
   * Offset from first
   * @member {Integer} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * Query Time
   * @member {Integer} timeUsed
   */
  exports.prototype['timeUsed'] = undefined;
  /**
   * Query Detail
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * Found docs
   * @member {Array.<module:js/pih/client/model/FoundDoc>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));



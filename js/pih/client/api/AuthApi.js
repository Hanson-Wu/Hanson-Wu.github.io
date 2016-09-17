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
    define(['js/pih/client/ApiClient', 'js/pih/client/model/ApiError', 'js/pih/client/model/LoginRequest', 'js/pih/client/model/RegistrationRequest', 'js/pih/client/model/PlainText', 'js/pih/client/model/UpdatePasswordRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiError'), require('../model/LoginRequest'), require('../model/RegistrationRequest'), require('../model/PlainText'), require('../model/UpdatePasswordRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.PersonalInformationHub) {
      root.PersonalInformationHub = {};
    }
    root.PersonalInformationHub.AuthApi = factory(root.PersonalInformationHub.ApiClient, root.PersonalInformationHub.ApiError, root.PersonalInformationHub.LoginRequest, root.PersonalInformationHub.RegistrationRequest, root.PersonalInformationHub.PlainText, root.PersonalInformationHub.UpdatePasswordRequest);
  }
}(this, function(ApiClient, ApiError, LoginRequest, RegistrationRequest, PlainText, UpdatePasswordRequest) {
  'use strict';

  /**
   * Auth service.
   * @module js/pih/client/api/AuthApi
   * @version 0.0.1
   */

  /**
   * Constructs a new AuthApi. 
   * @alias module:js/pih/client/api/AuthApi
   * @class
   * @param {module:js/pih/client/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:js/pih/client/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the login operation.
     * @callback module:js/pih/client/api/AuthApi~loginCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login
     * 
     * @param {module:js/pih/client/model/LoginRequest} body 
     * @param {module:js/pih/client/api/AuthApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.login = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling login";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the register operation.
     * @callback module:js/pih/client/api/AuthApi~registerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register with email
     * 
     * @param {module:js/pih/client/model/RegistrationRequest} body 
     * @param {module:js/pih/client/api/AuthApi~registerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.register = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling register";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/auth/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the resetPwd operation.
     * @callback module:js/pih/client/api/AuthApi~resetPwdCallback
     * @param {String} error Error message, if any.
     * @param {module:js/pih/client/model/PlainText} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update password
     * 
     * @param {String} body 
     * @param {module:js/pih/client/api/AuthApi~resetPwdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:js/pih/client/model/PlainText}
     */
    this.resetPwd = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling resetPwd";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PlainText;

      return this.apiClient.callApi(
        '/auth/resetpwd', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePwd operation.
     * @callback module:js/pih/client/api/AuthApi~updatePwdCallback
     * @param {String} error Error message, if any.
     * @param {module:js/pih/client/model/PlainText} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update password
     * 
     * @param {module:js/pih/client/model/UpdatePasswordRequest} body 
     * @param {module:js/pih/client/api/AuthApi~updatePwdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:js/pih/client/model/PlainText}
     */
    this.updatePwd = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw "Missing the required parameter 'body' when calling updatePwd";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PlainText;

      return this.apiClient.callApi(
        '/auth/updatepwd', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TodoBudget);
  }
}(this, function(expect, TodoBudget) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TodoBudget.UserAllOf();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserAllOf', function() {
    it('should create an instance of UserAllOf', function() {
      // uncomment below and update the code to test UserAllOf
      //var instance = new TodoBudget.UserAllOf();
      //expect(instance).to.be.a(TodoBudget.UserAllOf);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TodoBudget.UserAllOf();
      //expect(instance).to.be();
    });

    it('should have the property profile (base name: "profile")', function() {
      // uncomment below and update the code to test the property profile
      //var instance = new TodoBudget.UserAllOf();
      //expect(instance).to.be();
    });

    it('should have the property timeFrame (base name: "timeFrame")', function() {
      // uncomment below and update the code to test the property timeFrame
      //var instance = new TodoBudget.UserAllOf();
      //expect(instance).to.be();
    });

    it('should have the property buckets (base name: "buckets")', function() {
      // uncomment below and update the code to test the property buckets
      //var instance = new TodoBudget.UserAllOf();
      //expect(instance).to.be();
    });

    it('should have the property achievements (base name: "achievements")', function() {
      // uncomment below and update the code to test the property achievements
      //var instance = new TodoBudget.UserAllOf();
      //expect(instance).to.be();
    });

    it('should have the property alerts (base name: "alerts")', function() {
      // uncomment below and update the code to test the property alerts
      //var instance = new TodoBudget.UserAllOf();
      //expect(instance).to.be();
    });

  });

}));
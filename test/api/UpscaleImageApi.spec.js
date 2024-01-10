/**
 * Aspose OCR Cloud 5.0 API
 * Aspose OCR Cloud 5.0 API
 *
 * The version of the OpenAPI document: 5.0
 * 
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
    factory(root.expect, root.AsposeOcrCloud50Api);
  }
}(this, function(expect, AsposeOcrCloud50Api) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AsposeOcrCloud50Api.UpscaleImageApi();
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

  describe('UpscaleImageApi', function() {
    describe('cancelUpscaleImage', function() {
      it('should call cancelUpscaleImage successfully', function(done) {
        //uncomment below and update the code to test cancelUpscaleImage
        //instance.cancelUpscaleImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUpscaleImage', function() {
      it('should call getUpscaleImage successfully', function(done) {
        //uncomment below and update the code to test getUpscaleImage
        //instance.getUpscaleImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postUpscaleImage', function() {
      it('should call postUpscaleImage successfully', function(done) {
        //uncomment below and update the code to test postUpscaleImage
        //instance.postUpscaleImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
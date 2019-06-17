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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TbaApiV3client);
  }
}(this, function(expect, TbaApiV3client) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TbaApiV3client.MatchApi();
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

  describe('MatchApi', function() {
    describe('getEventMatchTimeseries', function() {
      it('should call getEventMatchTimeseries successfully', function(done) {
        //uncomment below and update the code to test getEventMatchTimeseries
        //instance.getEventMatchTimeseries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEventMatches', function() {
      it('should call getEventMatches successfully', function(done) {
        //uncomment below and update the code to test getEventMatches
        //instance.getEventMatches(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEventMatchesKeys', function() {
      it('should call getEventMatchesKeys successfully', function(done) {
        //uncomment below and update the code to test getEventMatchesKeys
        //instance.getEventMatchesKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEventMatchesSimple', function() {
      it('should call getEventMatchesSimple successfully', function(done) {
        //uncomment below and update the code to test getEventMatchesSimple
        //instance.getEventMatchesSimple(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMatch', function() {
      it('should call getMatch successfully', function(done) {
        //uncomment below and update the code to test getMatch
        //instance.getMatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMatchSimple', function() {
      it('should call getMatchSimple successfully', function(done) {
        //uncomment below and update the code to test getMatchSimple
        //instance.getMatchSimple(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMatchTimeseries', function() {
      it('should call getMatchTimeseries successfully', function(done) {
        //uncomment below and update the code to test getMatchTimeseries
        //instance.getMatchTimeseries(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamEventMatches', function() {
      it('should call getTeamEventMatches successfully', function(done) {
        //uncomment below and update the code to test getTeamEventMatches
        //instance.getTeamEventMatches(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamEventMatchesKeys', function() {
      it('should call getTeamEventMatchesKeys successfully', function(done) {
        //uncomment below and update the code to test getTeamEventMatchesKeys
        //instance.getTeamEventMatchesKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamEventMatchesSimple', function() {
      it('should call getTeamEventMatchesSimple successfully', function(done) {
        //uncomment below and update the code to test getTeamEventMatchesSimple
        //instance.getTeamEventMatchesSimple(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamMatchesByYear', function() {
      it('should call getTeamMatchesByYear successfully', function(done) {
        //uncomment below and update the code to test getTeamMatchesByYear
        //instance.getTeamMatchesByYear(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamMatchesByYearKeys', function() {
      it('should call getTeamMatchesByYearKeys successfully', function(done) {
        //uncomment below and update the code to test getTeamMatchesByYearKeys
        //instance.getTeamMatchesByYearKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamMatchesByYearSimple', function() {
      it('should call getTeamMatchesByYearSimple successfully', function(done) {
        //uncomment below and update the code to test getTeamMatchesByYearSimple
        //instance.getTeamMatchesByYearSimple(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

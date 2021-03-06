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
    instance = new TbaApiV3client.ListApi();
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

  describe('ListApi', function() {
    describe('getDistrictEvents', function() {
      it('should call getDistrictEvents successfully', function(done) {
        //uncomment below and update the code to test getDistrictEvents
        //instance.getDistrictEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDistrictEventsKeys', function() {
      it('should call getDistrictEventsKeys successfully', function(done) {
        //uncomment below and update the code to test getDistrictEventsKeys
        //instance.getDistrictEventsKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDistrictEventsSimple', function() {
      it('should call getDistrictEventsSimple successfully', function(done) {
        //uncomment below and update the code to test getDistrictEventsSimple
        //instance.getDistrictEventsSimple(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDistrictRankings', function() {
      it('should call getDistrictRankings successfully', function(done) {
        //uncomment below and update the code to test getDistrictRankings
        //instance.getDistrictRankings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDistrictTeams', function() {
      it('should call getDistrictTeams successfully', function(done) {
        //uncomment below and update the code to test getDistrictTeams
        //instance.getDistrictTeams(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDistrictTeamsKeys', function() {
      it('should call getDistrictTeamsKeys successfully', function(done) {
        //uncomment below and update the code to test getDistrictTeamsKeys
        //instance.getDistrictTeamsKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDistrictTeamsSimple', function() {
      it('should call getDistrictTeamsSimple successfully', function(done) {
        //uncomment below and update the code to test getDistrictTeamsSimple
        //instance.getDistrictTeamsSimple(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEventTeams', function() {
      it('should call getEventTeams successfully', function(done) {
        //uncomment below and update the code to test getEventTeams
        //instance.getEventTeams(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEventTeamsKeys', function() {
      it('should call getEventTeamsKeys successfully', function(done) {
        //uncomment below and update the code to test getEventTeamsKeys
        //instance.getEventTeamsKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEventTeamsSimple', function() {
      it('should call getEventTeamsSimple successfully', function(done) {
        //uncomment below and update the code to test getEventTeamsSimple
        //instance.getEventTeamsSimple(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEventTeamsStatuses', function() {
      it('should call getEventTeamsStatuses successfully', function(done) {
        //uncomment below and update the code to test getEventTeamsStatuses
        //instance.getEventTeamsStatuses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEventsByYear', function() {
      it('should call getEventsByYear successfully', function(done) {
        //uncomment below and update the code to test getEventsByYear
        //instance.getEventsByYear(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEventsByYearKeys', function() {
      it('should call getEventsByYearKeys successfully', function(done) {
        //uncomment below and update the code to test getEventsByYearKeys
        //instance.getEventsByYearKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEventsByYearSimple', function() {
      it('should call getEventsByYearSimple successfully', function(done) {
        //uncomment below and update the code to test getEventsByYearSimple
        //instance.getEventsByYearSimple(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamEventsStatusesByYear', function() {
      it('should call getTeamEventsStatusesByYear successfully', function(done) {
        //uncomment below and update the code to test getTeamEventsStatusesByYear
        //instance.getTeamEventsStatusesByYear(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeams', function() {
      it('should call getTeams successfully', function(done) {
        //uncomment below and update the code to test getTeams
        //instance.getTeams(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamsByYear', function() {
      it('should call getTeamsByYear successfully', function(done) {
        //uncomment below and update the code to test getTeamsByYear
        //instance.getTeamsByYear(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamsByYearKeys', function() {
      it('should call getTeamsByYearKeys successfully', function(done) {
        //uncomment below and update the code to test getTeamsByYearKeys
        //instance.getTeamsByYearKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamsByYearSimple', function() {
      it('should call getTeamsByYearSimple successfully', function(done) {
        //uncomment below and update the code to test getTeamsByYearSimple
        //instance.getTeamsByYearSimple(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamsKeys', function() {
      it('should call getTeamsKeys successfully', function(done) {
        //uncomment below and update the code to test getTeamsKeys
        //instance.getTeamsKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTeamsSimple', function() {
      it('should call getTeamsSimple successfully', function(done) {
        //uncomment below and update the code to test getTeamsSimple
        //instance.getTeamsSimple(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

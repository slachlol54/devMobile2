/**
 * Created by 1656952 on 11/07/2017.
 */
var app = angular.module('app')

app.service('countriesService', function ($http, apiHost) {
  this.getList = function () {
    return $http.get(apiHost + 'countries');
  };

  this.getContract = function ($iso2) {
    return $http.get(apiHost + 'countries/' + $iso2 + '/contracts');
  };

  this.getStation = function ($id) {
    return $http.get(apiHost + 'contracts/' + $id + '/stations');
  };

  this.getAllContract = function () {
    return $http.get(apiHost + 'contracts');
  };


});


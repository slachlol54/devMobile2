/**
 * Created by 1656952 on 11/07/2017.
 */
var app = angular.module('app');


app.controller('homeController', function ($scope, countriesService) {


  $scope.message = "Liste de pays";
  countriesService.getList()
    .then(function (response) {
      console.log(response.data);
      $scope.countries = response.data;
    })
    .catch(function (error) {
      console.error(error.message)
    });

});


app.controller('countryDetailCtrl', function ($scope, $stateParams, countriesService, $ionicViewService) {

  countriesService.getContract($stateParams.iso2)
    .then(function (response) {
      console.log(response.data);
      $scope.contracts = response.data;



    })
    .catch(function (error) {
      console.error(error.message)
    });

});


app.controller('stationListCtrl', function ($timeout, $scope, $stateParams, countriesService) {




  countriesService.getStation($stateParams.id)
    .then(function (response) {

      var tick = function() {
        console.log('refreshisation');
        $timeout(tick, 1000);
        $scope.stations = response.data;
      }
      $scope.stations = response.data;
      $timeout(tick, 1000);



    })
    .catch(function (error) {
      console.error(error.message)
    });

});


app.controller('geolocCtrl', function($scope, $state,$cordovaGeolocation, $ionicLoading, countriesService) {

  $scope.tryGeoLocation = function () {
    $ionicLoading.show({
      template: 'Getting current position ...'
    });

    // Clean map
    //  cleanMap();

    $cordovaGeolocation.getCurrentPosition({
      timeout: 10000,
      enableHighAccuracy: true
    }).then(function (position) {
      $ionicLoading.hide().then(function () {
        $scope.latitude = position.coords.latitude;
        $scope.longitude = position.coords.longitude;
        console.log($scope.latitude);
        console.log($scope.longitude);
        //  createMarker({lat: position.coords.latitude, lng: position.coords.longitude});
      });
    });
  };

  var latLng = new google.maps.LatLng($scope.latitude, $scope.longitude);
  /*google.maps.geometry.spherical.computeDistanceBetween(latLng, latLngObject)*/


  countriesService.getAllContract()
    .then(function (response) {
      console.log(response.data);
      $scope.countries = response.data;
    })
    .catch(function (error) {
      console.error(error.message)
    });



  $scope.tryGeoLocation();

});



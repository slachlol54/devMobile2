/**
 * Created by 1656952 on 11/07/2017.
 */
var app = angular.module('app');


app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('countryList', {
      url: '/',
      controller: 'homeController',
      templateUrl: '/templates/countries/list.html'
    })

    .state('countryDetail', {
      url: '/country/:iso2',
      controller: 'countryDetailCtrl',
      templateUrl: '/templates/contract/list.html'
    })


    .state('stationList', {
      url: 'contracts/:id/stations',
      controller: 'stationListCtrl',
      templateUrl: '/templates/stations/listStations.html'
    })

    .state('geolocalisation', {
      url: '/carte',
      controller: 'geolocCtrl',
      templateUrl: '/templates/geolocalisation/carte.html'
    })


});

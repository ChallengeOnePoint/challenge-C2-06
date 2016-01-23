'use strict';

/**
 * @ngdoc overview
 * @name catstagramApp
 * @description
 * # catstagramApp
 *
 * Main module of the application.
 */
angular
  .module('catstagramApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-flexslider'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/slideshow', {
        templateUrl: 'views/slideshow.html',
        controller: 'SlideShowCtrl',
        controllerAs: 'slideshow'
      })
      .otherwise({
        redirectTo: '/'
      });
  });



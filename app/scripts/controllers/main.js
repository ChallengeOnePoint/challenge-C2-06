'use strict';

/**
 * @ngdoc function
 * @name catstagramApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the catstagramApp
 */
angular.module('catstagramApp')
  .controller('MainCtrl', function ($scope, Cats) {
    $scope.cats = {};

    Cats.getCats().then(function(cats){
      $scope.cats = cats;
    });
  });

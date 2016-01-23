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
    $scope.flex_cats = [];
  	//
    Cats.getCats().then(function(cats){
      $scope.cats = cats;
    })
    $scope.openModal = function(id){
      var current_cat = $scope.cats[id];
      $scope.flex_cats = $scope.cats;
      $scope.flex_cats.splice(id, 1);
      $scope.flex_cats.unshift(current_cat);

    	$('#cat_modal').openModal();
    }
  });

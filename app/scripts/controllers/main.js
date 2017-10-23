'use strict';

/**
 * @ngdoc function
 * @name sa20App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sa20App
 */
angular.module('sa20App')
.controller('MainCtrl', function ($scope) {
    $scope.init = function() {
        $scope.posts = [
            {
                id: 1,
                imagen: 'http://lorempixel.com/1400/680/'
            },
            {
                id: 2,
                imagen: 'http://lorempixel.com/1400/680/'
            }
        ];
    };
    
    $scope.init();
});
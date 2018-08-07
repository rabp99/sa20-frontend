'use strict';

/**
 * @ngdoc function
 * @name sa20App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sa20App
 */
angular.module('sa20App')
.controller('MainCtrl', function ($scope, postsService) {
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
        $scope.getLasts(2, 4);
        $scope.getMasVistos(2);
    };
    
    $scope.getLasts = function(portada, siguientes) {
        $scope.loadingUltimos = true;
        postsService.getLasts({cantidad: portada + siguientes}, function(data) {
            $scope.postsUltimos1 = data.posts.slice(0, portada);
            $scope.postsUltimos2 = data.posts.slice(portada, portada + siguientes);
            $scope.loadingUltimos = false;
        });
    };
    
    $scope.getMasVistos = function(cantidad) {
        $scope.loadingMasVistos = true;
        postsService.getMasVistos({cantidad: cantidad}, function(data) {
            $scope.postsMasVistos = data.posts;
            $scope.loadingMasVistos = false;
        });
    };
    
    $scope.init();
});
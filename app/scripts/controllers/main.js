'use strict';

/**
 * @ngdoc function
 * @name sa20App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sa20App
 */
angular.module('sa20App')
.controller('MainCtrl', function ($scope, postsService, infosService, $q) {
    var search = ['title_banner'];
    
    $scope.init = function() {
        var portada = 2;
        var siguientes = 4;
        $q.all([
            postsService.getLasts({cantidad: portada + siguientes}).$promise,
            postsService.getMasVistos({cantidad: 2}).$promise,
            infosService.getMany(search).$promise
        ]).then(function(data) {
            $scope.postsUltimos1 = data[0].posts.slice(0, portada);
            $scope.postsUltimos2 = data[0].posts.slice(portada, portada + siguientes);
            $scope.postsMasVistos = data[1].posts;
            $scope.infos = data[2].infos;
            
            // $scope.progressbar.complete();
        });
    };
    
    $scope.getMasVistos = function(cantidad) {
        $scope.loadingMasVistos = true;
        postsService.getMasVistos({cantidad: cantidad}, function(data) {
            $scope.postsMasVistos = data.posts;
            $scope.loadingMasVistos = false;
        });
    };
    
    $scope.animateElementIn = function($el) {
        $('#logo-banner').addClass('animated fadeOut');
    };
    
    $scope.animateElementOut = function($el) {
        $('#logo-banner').removeClass('not-visible fadeOut');
        $('#logo-banner').addClass('animated fadeIn');
    };
    
    $scope.init();
});
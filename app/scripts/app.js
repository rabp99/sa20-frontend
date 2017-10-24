'use strict';

/**
 * @ngdoc overview
 * @name sa20App
 * @description
 * # sa20App
 *
 * Main module of the application.
 */
angular
.module('sa20App', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'
])
.config(function($stateProvider, $urlRouterProvider) {
    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Home'
    };

    var postState = {
        name: 'post',
        url: '/post',
        templateUrl: 'views/post.html',
        controller: 'PostCtrl',
        controllerAs: 'post',
        title: 'Post'
    };
    
    
    $stateProvider.state(mainState);
    $stateProvider.state(postState);
    $urlRouterProvider.when('', '/');
});
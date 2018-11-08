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
    'ui.bootstrap',
    'angular-scroll-animate',
    'hljs'
])
.config(function($stateProvider, $urlRouterProvider, hljsServiceProvider) {
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
        url: '/post/{id}',
        templateUrl: 'views/post.html',
        controller: 'PostCtrl',
        controllerAs: 'PostCtrl',
        params: {
            id: {
                value: '1'
            }
        }
    };
    
    var postsAllState = {
        name: 'postsAll',
        url: '/posts',
        templateUrl: 'views/posts-all.html',
        controller: 'PostsAll',
        controllerAs: 'postsAll',
        title: 'Todos los Posts'
    };
    
    $stateProvider.state(mainState);
    $stateProvider.state(postState);
    $stateProvider.state(postsAllState);
    $urlRouterProvider.when('', '/');
    
    hljsServiceProvider.setOptions({
        // replace tab with 4 spaces
        tabReplace: '    '
    });
});
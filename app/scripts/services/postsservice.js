'use strict';

/**
 * @ngdoc service
 * @name sa20App.postsService
 * @description
 * # postsService
 * Factory in the sa20App.
 */
angular.module('sa20App')
.factory('postsService', function($resource, envService) {
    return $resource(envService.getHost() + 'posts/:id.json', {}, {
        getLasts: {
            method: 'GET',
            url: envService.getHost() + 'posts/getLasts/:cantidad.json'
        },
        getMasVistos: {
            method: 'GET',
            url: envService.getHost() + 'posts/getMasVistos/:cantidad.json'
        }
    });
});
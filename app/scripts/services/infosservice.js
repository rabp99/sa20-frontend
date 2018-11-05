'use strict';

/**
 * @ngdoc service
 * @name sa20App.infosService
 * @description
 * # infosService
 * Factory in the sa20App.
 */
angular.module('sa20App')
.factory('infosService', function($resource, envService) {
    return $resource(envService.getHost() + 'infos/:id.json', {}, {
        getMany: {
            method: 'POST',
            url: envService.getHost() + 'infos/getMany.json',
        },
        indexAdmin: {
            method: 'POST',
            url: envService.getHost() + 'infos/indexAdmin.json',
        }
    });
});
'use strict';

/**
 * @ngdoc service
 * @name sa20App.envService
 * @description
 * # envService
 * Factory in the sa20App.
 */
angular.module('sa20App')
.factory('envService', function () {
    return {
        getHost: function() {
            switch (window.location.hostname) {
                case 'localhost':
                    return 'http://localhost:8000/sa20-backend/';
                case 'admin.inexdeo.robertobocanegra.com':
                    return 'http://inexdeo.robertobocanegra.com/api/';
                case 'iedsa.com.pe':
                    return 'http://iedsa.com.pe/api/';
                case 'www.iedsa.com.pe':
                    return 'http://iedsa.com.pe/api/';
            }
        }
    };
});
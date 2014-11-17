'use strict';

var angular = require('angular');
require('angular-ui-router');
require('./controllers');
require('./services');
require('./factories');

angular.module('ngApp', [
    'ui.router',
    'ngApp.controllers',
    'ngApp.services',
    'ngApp.factories'
])
.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'views/home.html'
                });

    }]);

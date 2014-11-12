'use strict';

var angular = require('angular');
var DummyService= require('./dummy');

module.exports = angular.module('ngApp.services', [])
    .service('DummyService', DummyService);

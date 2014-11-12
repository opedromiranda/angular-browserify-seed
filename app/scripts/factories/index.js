'use strict';

var angular = require('angular');
var DummyFactory = require('./dummy');

module.exports = angular.module('ngApp.factories', [])
    .factory('DummyFactory', DummyFactory);

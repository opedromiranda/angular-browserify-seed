'use strict';

var angular = require('angular');
var DummyController = require('./dummy-controller');

module.exports = angular.module('ngApp.controllers', [])
    .controller('DummyController', ['$scope', DummyController]);

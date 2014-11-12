'use strict';

var angular = require('angular');
var DummyController = require('./dummy');

module.exports = angular.module('ngApp.controllers', [])
    .controller('DummyController', ['$scope', DummyController]);

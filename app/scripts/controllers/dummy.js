'use strict';

module.exports = function DummyController ($scope) {
    $scope.dummyMethod = function () {
        console.log('This is a dummy method');
    }
};
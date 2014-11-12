'use strict';

describe('Unit - DummyController', function() {

    var controller;
    var scope;

    beforeEach(function() {
        angular.mock.module('ngApp');
        angular.mock.inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            controller = $controller('DummyController', {
                $scope: scope
            });
        });
    });

    it('should exist', function () {
        expect(controller).toBeDefined();
    });

    it('should have a dummy method defined on its scope', inject(function () {
        expect(scope.dummyMethod).toBeDefined();
    }));

});
'use strict';

describe('Unit - DummyFactory', function() {

    var factory;

    beforeEach(function() {
        angular.mock.module('ngApp');
        angular.mock.inject(function (DummyFactory) {
            factory = DummyFactory;
        });
    });

    it('should exist', function () {
        expect(factory).toBeDefined();
    });

    it('should have a dummy method defined', inject(function () {
        expect(factory.dummyMethod).toBeDefined();
    }));

});
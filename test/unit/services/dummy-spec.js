'use strict';

describe('Unit - DummyService', function() {
    
    var service;

    beforeEach(function() {
        angular.mock.module('ngApp');
        angular.mock.inject(function (DummyService) {
            service = DummyService;
        });
    });

    it('should exist', function () {
        expect(service).toBeDefined();
    });

    it('should have a dummy method defined', inject(function () {
        expect(service.dummyMethod).toBeDefined();
    }));

});

'use strict';

module.exports = function(config) {

    config.set({

        basePath: '../',
        frameworks: ['jasmine', 'browserify'],
        preprocessors: {
            'app/scripts/**/*.js': ['browserify', 'coverage']
        },
        browsers: ['PhantomJS'],
        reporters: ['progress', 'coverage'],
        autoWatch: true,

        plugins: [
            'karma-jasmine',
            'karma-browserify',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],

        proxies: {
            '/': 'http://localhost:8124/'
        },

        urlRoot: '/__karma__/',

        files: [
            'app/scripts/main.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'test/unit/**/*.js'
        ],

        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        logLevel: config.LOG_INFO,
    });

};

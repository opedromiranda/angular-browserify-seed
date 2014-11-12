var gulp = require('gulp');
var karma = require('karma').server;

module.exports = function (done) {
    console.log(__dirname);
    karma.start({
        configFile: __dirname + '/../../test/karma.conf.js',
        singleRun: true
    }, done);
};

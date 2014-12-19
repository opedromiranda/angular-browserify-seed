var gulp = require('gulp');
var jshint = require('gulp-jshint');

module.exports = function() {
    gulp.src('./app/scripts/*.js')
    .pipe(jshint('./jshint.rc'))
    .pipe(jshint.reporter('default'));
};
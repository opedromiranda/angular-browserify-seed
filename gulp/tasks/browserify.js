var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

module.exports = function() {
    return browserify('./app/scripts/main.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./build/scripts'));
};

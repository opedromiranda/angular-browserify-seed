var browserify = require('gulp-browserify');
var gulp = require('gulp');

module.exports = function() {
    return gulp.src('./app/scripts/main.js')
            .pipe(browserify({
              debug : true
            }))
        .pipe(gulp.dest('./build/scripts/'))
};

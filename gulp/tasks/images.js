var gulp = require('gulp');

module.exports = function() {

    gulp.src('./app/images/**/*')
        .pipe(gulp.dest('build/images/'));
};

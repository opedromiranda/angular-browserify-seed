var gulp = require('gulp');

module.exports = function() {
    gulp.src('app/index.html')
        .pipe(gulp.dest('build/'));

    gulp.src('./app/views/**/*')
        .pipe(gulp.dest('build/views/'));
}

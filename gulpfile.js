var gulp = require('./gulp')([
    'browserify',
    'jshint',
    'views',
    'serve',
    'test'
]);


gulp.task('watch', ['jshint'], function() {
    gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'],
        ['jshint','browserify']);

    gulp.watch(['app/index.html', 'app/views/**/*.html'], ['views']);
});

gulp.task('build', ['test', 'jshint', 'browserify', 'views']);

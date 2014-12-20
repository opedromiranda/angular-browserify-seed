var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

module.exports = function() {
    return gulp.src('./app/styles/main.scss')
        .pipe(sass({
            style: 'expanded',
            "sourcemap=none": true //hack to allow autoprefixer to work
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('build/styles'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss(''))
        .pipe(gulp.dest('build/styles'));
};

'use strict';

const gulp = require('gulp');
const nano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');

gulp.task('style', () => {
    gulp.src('front/style/main.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(nano())
        .pipe(gulp.dest('web/css/'));
});

gulp.task('watch', () => {
    gulp.watch('front/style/**', ['style'])
});
'use strict';

var gulp = require('gulp'),
  cached = require('gulp-cached'),
  concat = require('gulp-concat'),
  jade = require('gulp-jade'),
  less = require('gulp-less'),
  minifyCSS = require('gulp-minify-css'),
  uglify = require('gulp-uglify');

// paths
var paths = {
  js: [
    'source/app.js',
    'source/js/**/*.js'
  ],
  libs: [
    'bower_components/angular/angular.js',
    'bower_components/angular-local-storage/dist/angular-local-storage.js',
    'bower_components/angular-route/angular-route.js'
  ],
  less: [
    'source/style/*.less'
  ],
  bootstrap: [
    'bower_components/bootstrap/less/bootstrap.less'
  ]
};

// layout
gulp.task('jade', function () {
  return gulp
    .src('source/**/*.jade')
    .pipe(cached('jade'))
    .pipe(jade())
    .pipe(gulp.dest('dist/'));
});

// CSS task
gulp.task('less', function () {
  return gulp
    .src(paths.less)
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copy-fonts', function () {
  return gulp
    .src('bower_components/bootstrap/fonts/*.*')
    .pipe(gulp.dest('dist/fonts/'))
});

gulp.task('less-bootstrap', function () {
  return gulp
    .src(paths.bootstrap)
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});

// JS task
gulp.task('js-app', function () {
  return gulp
    .src(paths.js)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('js-libs', function () {
  return gulp
    .src(paths.libs)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['jade', 'less', 'copy-fonts', 'less-bootstrap', 'js-app', 'js-libs']);

gulp.task('watch', function () {
  gulp.watch(['source/**/*.jade'], ['jade']);
  gulp.watch(paths.js, ['js-app']);
  gulp.watch(paths.less, ['less']);
});
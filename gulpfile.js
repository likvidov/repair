const { task, src, dest, parallel } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

task('buildCSS', function(cb) {
  return src('./src/css/*.css')
          .pipe(cleanCSS({compatibility: 'ie8'}))
          .pipe(dest('dist/css/'));

  cb();
});

task('buildJS', function(cb) {
  return src('./src/js/*.js')
          .pipe(dest('dist/js/'));

  cb();
});

task('buildHTML', function(cb) {
  return src('./src/*.html')
          .pipe(htmlmin({ collapseWhitespace: true }))
          .pipe(dest('dist/'));

  cb();
});

task('buildFonts', function(cb) {
  return src('./src/fonts/**/*')
          .pipe(dest('dist/fonts'));
  cb();
});

task('buildTinypng', function () {
    return src('./src/img/**/*.{png,jpg,jpeg}')
            .pipe(tinypng({
              key: 'Z4L43NYj800TbQKTNjXpV2Fmqt8DT5fj'
            }))
            .pipe(dest('dist/img'));
});

const buildCSS = task('buildCSS');
const buildJS = task('buildJS');
const buildHTML = task('buildHTML');
const buildFonts = task('buildFonts');
const buildTinypng = task('buildTinypng');

exports.default = parallel(buildCSS, buildJS, buildHTML, buildFonts);
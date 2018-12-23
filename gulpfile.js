const gulp = require('gulp');
const clean = require('gulp-clean');
const debug = require('gulp-debug');

const buildFolder = './build/**/*';
const cordovaFolder = './cordova/www/';

gulp.task('clean-www', () => {
  gulp.src('cordova/www/**/*', { read: false, force: true }).pipe(clean());
});

gulp.task('default', ['clean-www'], () => {
  gulp
    .src(buildFolder)
    .pipe(debug())
    .pipe(gulp.dest(cordovaFolder));
});

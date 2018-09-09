var gulp = require('gulp');
var clean = require('gulp-clean');
var debug = require('gulp-debug');

gulp.task('default',['clean-www'], function() {
  gulp.src('./build/**/*')
  .pipe(debug())
  .pipe(gulp.dest('./cordova/www'));
});

gulp.task('clean-www', function () {
  gulp.src('./cordova/www')
  .pipe(clean());
})
var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    browserify('assets/permissions_calc/src/js/main.js')
      .transform('reactify')
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('./javascripts/'));
});

gulp.task('copy',function() {
    gulp.src('assets/permissions_calc/src/index.html')
      .pipe(gulp.dest('assets/permissions_calc/dist'));
    gulp.src('assets/permissions_calc/src/assets/**/*.*')
      .pipe(gulp.dest('assets/permissions_calc/dist/assets'));
});

gulp.task('default',['browserify', 'copy'], function() {
    return gulp.watch('assets/permissions_calc/src/**/*.*', ['browserify', 'copy'])
});
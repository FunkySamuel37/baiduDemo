var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function() {
  gulp.src('styles/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest('../styles'));
});

gulp.task('less', function() {
  gulp.src('styles/*.less')
    .pipe(less())
    .pipe(prefix())
    .pipe(gulp.dest('../styles'));
});

gulp.task('copy', function() {
  gulp.src('*.html')
    .pipe(gulp.dest('..'))
});

gulp.task('watch', function() {
  gulp.watch(['*.html'], ['copy']);
  gulp.watch(['styles/*.scss', 'styles/*.less'], ['sass', 'less']);
});

gulp.task('default', ['sass', 'less', 'copy', 'watch']);

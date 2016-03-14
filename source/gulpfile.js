var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');


var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


gulp.task('sass', function() {
  gulp.src('styles/**/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest('../styles'));
});

gulp.task('less', function() {
  gulp.src('styles/**/*.less')
    .pipe(less())
    .pipe(prefix())
    .pipe(gulp.dest('../styles'));
});

gulp.task('copy', function() {
  gulp.src(['./**/*.html', '!./node_modules/**/*'], { base: './' })
    .pipe(gulp.dest('../'));
});

gulp.task('imagemin', function() {
	gulp.src('asset/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('../asset/images'));
});

gulp.task('watch', function() {
  gulp.watch(['*.html'], ['copy']);
  gulp.watch(['styles/*.scss', 'styles/*.less'], ['sass', 'less']);
  // gulp.watch(['asset/images/*'], ['imagemin']);
});

gulp.task('default', ['sass', 'less', 'copy', 'watch']);// 'imagemin',

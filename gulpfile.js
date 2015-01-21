var gulp = require('gulp'),
  filter = require('gulp-filter'),
  concat = require('gulp-concat'),
  compass = require('gulp-compass'),
  sourcemaps = require('gulp-sourcemaps'),
  browserify = require('gulp-browserify'),
  livereload = require('gulp-livereload'),
  autoprefixer = require('gulp-autoprefixer'),
  mainBowerFiles = require('main-bower-files');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('bower', function() {
  gulp.src(mainBowerFiles())
    .pipe(filter('**/*.js'))
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('assets/scripts/'))

  gulp.src(mainBowerFiles())
    .pipe(filter('**/*.css'))
    .pipe(concat('libs.css'))
    .pipe(gulp.dest('assets/styles/'))
});

gulp.task('styles', function() {
  gulp.src('assets/styles/sass/s.scss')
    .pipe(compass({
      css: 'assets/styles',
      sass: 'assets/styles/sass',
      image: 'assets/images',
      style: 'expanded'
    })).on('error', handleError)
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'ff 17', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('assets/styles/'))
    .pipe(livereload());
});

gulp.task('browserify', function() {
  gulp.src(['assets/scripts/app/app.js'])
    .pipe(browserify({
      insertGlobals: true,
      debug: true
    })).on('error', handleError)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('assets/scripts'))
    .pipe(livereload());
});

gulp.task('dev', function() {
  livereload.listen(35729);
  gulp.watch('assets/styles/**/*.scss', ['styles']);
  gulp.watch('assets/scripts/app/**/*.js', ['browserify']);
});

gulp.task('default', ['dev']);

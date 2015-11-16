var gulp  = require('gulp'),
    gutil = require('gutil'),
    sass  = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify');

gulp
  .task('default', function(){
    return gutil.log('Gulp is Running');
  })
  .task('build-css', function(){
    gutil.log('Compiled SCSS to CSS');
    return gulp.src('./client/scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('client/css'));
      
  })
  .task('browserify', function(){
    return browserify('./client/javascript/app.js')
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('./client/javascript/'));
  });

  gulp.watch('client/javascript/app.js', ['browserify']);
  gulp.watch('client/scss/**/*.scss', ['build-css']);

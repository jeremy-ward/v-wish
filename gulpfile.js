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
    return gulp.src('./client/stylesheets/scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('client/stylesheets'));
      
  })
  .task('browserify', function(){
    return browserify('./client/javascript/app.js')
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('./client/javascript/'));
  });

  gulp.watch('client/javascript/**/*.js', ['browserify']);
  gulp.watch('client/stylesheets/scss/**/*.scss', ['build-css']);

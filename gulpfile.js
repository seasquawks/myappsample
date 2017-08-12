const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

/*
  --Top Level Functions

  gulp.task - define tasks
  gulp.src - points to files to use
  gul.dest - points to folder to output
  gulp.watch -watch files and folders for changes

  */

  //Logs Message
  gulp.task('message', function(){
      return console.log('Gulp is running');
  });

  gulp.task('default', function() {
      return console.log('Gulp is running');
  });

  //Copy all html files
  gulp.task('copyHtml', function(){
      gulp.src('src/*.html').pipe(gulp.dest('dist'));
  });

  gulp.task('images', () => 
    gulp.src('src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'))
  );

  gulp.task('minify', function(){
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js')) ;
});
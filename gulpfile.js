// ///////////////////////////////////////////////
// Required
// ///////////////////////////////////////////////
var gulp = require('gulp'),
    uglify = require('gulp-uglify');
    browserSync = require('browser-sync');
    reload = browserSync.reload;
    sass = require('gulp-sass');
    plumber = require('gulp-plumber');
    autoprefixer = require('gulp-autoprefixer');
    del  = require('del');
    rename = require('gulp-rename');


// ///////////////////////////////////////////////
// Scripts Task
// ///////////////////////////////////////////////
gulp.task('scripts', function(){
  gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
      .pipe(plumber())
      .pipe(rename({suffix:'.min'}))
      .pipe(uglify())
      .pipe(gulp.dest("app/js"))
      .pipe(reload({stream:true}));
});

// ///////////////////////////////////////////////
// Sass Task
// ///////////////////////////////////////////////
gulp.task('sass', function (){
  gulp.src('app/scss/style.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer('last 2 versions'))
      .pipe(gulp.dest('app/css/'))
      .pipe(reload({stream:true}));

});

// ///////////////////////////////////////////////
// HTML Task
// ///////////////////////////////////////////////
gulp.task('html', function (){
  gulp.src('app/**/*.html')
  .pipe(reload({stream:true}));

});

// ///////////////////////////////////////////////
// Build Task
// ///////////////////////////////////////////////


//task to clean out files and folders from build folder
gulp.task('build:cleanfolder', function(cb){
  return del([
    'build/**',
  ], cb);
});

//task to create build directory for all files
gulp.task('build:copy', ['build:cleanfolder'], function(){
  return gulp.src('app/**/*/')
  .pipe(gulp.dest("build/"));
});

//task to remove unwanted build files
//list any files and directories here that you dont want to incluide
gulp.task('build:remove', ['build:copy'], function(cb){
  del([
    'build/scss',
    'build/js/!(*.min.js)'
  ], cb);
});

gulp.task('build', ['build:copy', 'build:remove']);

// ///////////////////////////////////////////////
// Browser-sync Task
// ///////////////////////////////////////////////
gulp.task('browser-sync', function() {
  browserSync ({
    server:{
        baseDir: "./app/"
    }
  });
});


// ///////////////////////////////////////////////
// Watch Task
// ///////////////////////////////////////////////
gulp.task('watch', function(){
  gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/**/*.html', ['html']);
});

// ///////////////////////////////////////////////
// Default Task
// ///////////////////////////////////////////////
gulp.task('default', ['scripts', 'sass', 'html', 'browser-sync', 'watch']);

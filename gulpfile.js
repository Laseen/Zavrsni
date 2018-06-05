var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

var SCSS_SRC = './src/Assets/scss/**/*.scss'; //Input
var SCSS_DEST = './src/Assets/css';           //Output

gulp.task('compile_scss', function(){
    //.pipe is a method to chain commands

    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError)) //compile into standard css
    .pipe(minifyCSS()) //Minify
    .pipe(rename({ suffix: '.min'})) //Prefix with .min
    .pipe(changed(SCSS_DEST)) //Only effect changed files
    .pipe(gulp.dest(SCSS_DEST)); //Output to Output.destination
});


//detect changes in SCSS(watching scss folder)
//needed because gulp.task is only done once, this is creating a loop
gulp.task('watch_scss', function(){
    gulp.watch(SCSS_SRC, ['compile_scss']);
});

//Run tasks
gulp.task('default', ['watch_scss']);
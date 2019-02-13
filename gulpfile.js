'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
sass.compiler = require('node-sass');

gulp.task('default',()=> {
  return gulp.src('assets/js/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('sass',()=> {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch',()=>{
  gulp.watch('sass/*.scss', ['sass']); 
  gulp.watch('./assets/js/*.js',['default']);
})
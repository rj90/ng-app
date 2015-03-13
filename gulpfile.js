var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    htmlreplace = require('gulp-html-replace');

gulp.task('minify', function () {
    gulp.src([
        'app/components/**/*.js',
        '!app/components/**/*spec.js',
        'app/views/**/*.js',
        '!app/views/**/*spec.js',
        'app/app.js'
    ])
        .pipe(uglify({mangle: false}))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/build'))
});

gulp.task('index', function () {
    gulp.src('app/index.html')
        .pipe(htmlreplace({
            'js': 'build/app.js?' + +new Date()
        }))
        .pipe(gulp.dest('app'));
});
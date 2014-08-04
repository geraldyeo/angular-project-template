var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();


gulp.task('js', function() {
    gulp.src(['app/namespace.js', 'app/**/app.js', 'app/**/*.js'])
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('app.js'))
        .pipe(plugins.ngAnnotate())
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('./dist/'));
});


gulp.task('watch', ['js', 'copy'], function() {
    gulp.watch('app/**/*.js', ['js', 'copy']);
});


gulp.task('copy', function() {
    gulp.src(['app/index.html'])
        .pipe(gulp.dest('./dist'));
});


gulp.task('clean', function() {
    plugins.rimraf('./dist');
});


gulp.task('default', ['clean', 'js', 'copy']);


// bump version
gulp.task('bump-patch', function() {
    gulp.src('./package.json')
        .pipe(plugins.bump())
        .pipe(gulp.dest('.'));
});


gulp.task('bump-minor', function() {
    gulp.src('./package.json')
        .pipe(plugins.bump({
            type: 'minor'
        }))
        .pipe(gulp.dest('.'));
});


gulp.task('bump-major', function() {
    gulp.src('./package.json')
        .pipe(plugins.bump({
            type: 'major'
        }))
        .pipe(gulp.dest('.'));
});

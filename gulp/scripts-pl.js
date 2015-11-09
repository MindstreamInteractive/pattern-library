var $ = require('./common.js');
var config = require('./config.js');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

$.gulp.task('scripts-pl', function() {
    return $.gulp.src(['./' + config.src + '/scripts/pattern-library/**/*.js'])
        .on('error', $.notify.onError('<%= error.message %>'))
        .pipe(uglify())
        .pipe(concat('pattern-library.js'))
        .pipe($.gulp.dest(config.dest + 'Content/Scripts/'))
});

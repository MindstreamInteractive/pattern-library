var $ = require('./common.js');
var config = require('./config.js');

$.gulp.task('copy', function() {
    // Scripts
    $.gulp.src(['./node_modules/picturefill/dist/picturefill.min.js'])
        .pipe($.gulp.dest(config.dest + 'Content/Scripts/'));

    $.gulp.src(['./node_modules/jquery/dist/jquery.min.js'])
        .pipe($.gulp.dest(config.dest + 'pattern-library/scripts/'));

});

var $ = require('./common.js');
var config = require('./config.js');

var fileinclude	= require('gulp-file-include');

$.gulp.task('html', function() {
	$.gulp.src([
			config.src + '/html/**/*.html',
			'!' + config.src +'/html/partials/**/*.html'
		])
		.pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe($.gulp.dest(config.dest));
});

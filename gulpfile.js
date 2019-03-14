var gulp = require('gulp'),
	connect = require('gulp-connect');
	
gulp.task('webs', function(){
	connect.server({
		port: 8383,
		host:'0.0.0.0',
		open:true,
		root:'./'
	 });
});

gulp.task('default',['webs']);
	

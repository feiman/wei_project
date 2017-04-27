var gulp = require('gulp');

var cleanCSS = require('gulp-clean-css');
var ngannotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');


gulp.task('minify-css', function() {
  return gulp.src('source/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts_min', function(){
  return gulp.src('source/js/**/*.js')
  	.pipe(ngannotate())
    .pipe(uglify()) // 执行 JavaScript 压缩
    .pipe(gulp.dest('dist/js'));
});

gulp.task('move_file_img',function(){
	console.log("开始移动img");
	var file = [
		'source/images/*'
	];
	var des_file = 'dist/images';
	return gulp.src(file)
	.pipe(gulp.dest(des_file));
});

gulp.task('move_file_tpl',function(){
	console.log("开始移动tpl");
	var file = [
		'source/tpl/**/*.html',
	];
	var des_file = 'dist/tpl';
	return gulp.src(file)
	.pipe(gulp.dest(des_file));
});

gulp.task('move_file_lib',function(){
  console.log("开始移动common_lib");
  var file = [
    'source/common_lib/**/*',
  ];
  var des_file = 'dist/common_lib';
  return gulp.src(file)
  .pipe(gulp.dest(des_file));
});
gulp.task('move_index',function(){
  console.log("开始移动common_lib");
  var file = [
    'source/index.html',
  ];
  var des_file = 'dist/';
  return gulp.src(file)
  .pipe(gulp.dest(des_file));
});
gulp.task('watch',function(){
  // 不同的文件个性，需要执行不同的任务来处理
  // gulp.watch(['source/tpl/**/*.html'], ['move_file']);
  // gulp.watch(['source/js/**/*.js'], ['scripts_min']);
  // gulp.watch(['source/css/**/*.css'], ['minify-css']);
  gulp.watch(['source/js/**/*.js']);
  gulp.watch(['source/css/**/*.css']);
  gulp.watch(['source/tpl/**/*.html']);
});

gulp.task('webserver', function(){
  gulp.src('./dist')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
      fallback: 'index.html'
    }));
});

gulp.task('auto_watch', function(){
    gulp.start( 'webserver','watch');
});

gulp.task('move_file',['move_file_tpl','move_file_img','move_file_lib','move_index']);

gulp.task('default', ['minify-css','scripts_min','move_file']);
// gulp.task('default', ['move_file']);

var gulp = require('gulp');
var run = require('gulp-run');
var runSequence = require('run-sequence');

gulp.task('build', function(){
  return run('npm run buildtests').exec();
});

gulp.task('test', function(){
  return run('npm run tests').exec();
});

gulp.task('report', function(){
  return run('npm run report').exec();
});

gulp.task('default', function(){
  runSequence('build', 'test', 'report');
});
var gulp = require('gulp');
var run = require('gulp-run');
var runSequence = require('run-sequence');

gulp.task('fetch', function(){
  var sources = [
    'node_modules/immutable/dist/immutable.min.js',
    'node_modules/react/dist/react.min.js',
    'node_modules/react-dom/dist/react-dom.min.js',
    'node_modules/redux/dist/redux.min.js',
    'node_modules/react-redux/dist/react-redux.min.js', 
    'node_modules/redux-thunk/dist/redux-thunk.min.js',
    'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ];
  var destination = 'build/libs/';
  return gulp
    .src(sources)
    .pipe(gulp.dest(destination))
})

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
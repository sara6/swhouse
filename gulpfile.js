var gulp = require('gulp');
var open = require('gulp-open');

gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open());
});

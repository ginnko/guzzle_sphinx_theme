const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const shell = require('gulp-shell');
const watch = require('gulp-watch');
const batch = require('gulp-batch');

const dir = 'guzzle_sphinx_theme/guzzle_sphinx_theme';

gulp.task('browser-sync', ['make-html'], () => {
  browserSync.init({
    server: {
      baseDir: "./demo/_build/html"
    }
  });
  gulp.watch(dir + '/*.html', ['make-html']);
  gulp.watch(dir + '/static/css/*.css', ['make-html']);
  gulp.watch(dir + '/static/js/*.js', ['make-html']);
  gulp.watch("./demo/_build/html/*.html").on('change', browserSync.reload);
});

gulp.task('make-html', shell.task([
  'cd demo && rm -rf _build && sphinx-build -b html -d _build/doctrees   . _build/html'
]));


gulp.task('new-html', function () {
  watch(dir + '/*.html', batch(function (events, done) {
      gulp.start('make-html', done);
  }));
});

gulp.task('new-css', function () {
  watch(dir + '/static/css/*.css', batch(function (events, done) {
      gulp.start('make-html', done);
  }));
});

gulp.task('new-js', function () {
  watch(dir + '/static/js/*.js', batch(function (events, done) {
      gulp.start('make-html', done);
  }));
});


gulp.task('default', ['browser-sync', 'new-css', 'new-html', 'new-js']);
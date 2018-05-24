const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const shell = require('gulp-shell');

const dir = 'ustack_sphinx_theme/ustack_sphinx_theme';

gulp.task('browser-sync', ['make-html'], () => {
  browserSync.init({
    server: {
      baseDir: "./demo/_build/html"
    }
  });
  gulp.watch(dir + '/*.html', ['make-html']);
  gulp.watch(dir + '/static/css/*.css', ['make-html']);
  gulp.watch(dir + '/static/js/*.js', ['make-html']);
  gulp.watch('./demo/conf.py', ['make-html']);
  gulp.watch("./demo/_build/html/*.html").on('change', browserSync.reload);
});

gulp.task('make-html', shell.task([
  'cd demo && rm -rf _build && sphinx-build -b html -d _build/doctrees   . _build/html'
]));



gulp.task('default', ['browser-sync']);
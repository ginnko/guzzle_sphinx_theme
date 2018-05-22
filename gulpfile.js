const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const shell = require('gulp-shell');

gulp.task('browser-sync', [], () => {
  browserSync.init({
    server: {
      baseDir: "./demo/_build/html"
    }
  });
  gulp.watch('./guzzle_sphinx_theme/guzzle_sphinx_theme/*.html', ['make-html']);
  gulp.watch('./guzzle_sphinx_theme/guzzle_sphinx_theme/static/css/*.css', ['make-html']);
  gulp.watch('./guzzle_sphinx_theme/guzzle_sphinx_theme/static/js/*.js', ['make-html']);
  gulp.watch('./guzzle_sphinx_theme/guzzle_sphinx_theme', ['make-html']);
  gulp.watch("./demo/_build/html/*.html").on('change', browserSync.reload);
});

gulp.task('make-html', shell.task([
  'cd demo && rm -rf _build && sphinx-build -b html -d _build/doctrees   . _build/html'
]));

gulp.task('default', ['browser-sync']);
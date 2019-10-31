const { src, dest, watch } = require('gulp');
const browserSync = require('browser-sync').create();

const taskOptions = { overwrite: true };
const watchOptions = { events: 'all' };
const destinationPath = 'build';

const htmlTask = cb => {
    src('src/*.html')
    .pipe(dest(destinationPath, taskOptions))
    .pipe(browserSync.stream());

    cb();
}

const cssTask = cb => {
    src('src/*.css')
    .pipe(dest(destinationPath, taskOptions))
    .pipe(browserSync.stream());

    cb();
}

const defaultTask = () => {
    browserSync.init({
        server: {
           baseDir: "./build",
           index: "/index.html"
        }
    });
    watch('src/*.html', watchOptions, htmlTask);
    watch('src/*.css', watchOptions, cssTask);
}

exports.default = defaultTask;
// Load dependencies
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const babel = require ('gulp-babel');
const cleanCss = require('gulp-clean-css');
const concat = require ('gulp-concat');
const imagemin = require ('gulp-imagemin');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

// Define source files
const source = {
    sass: './src/sass/style.scss',
    script: './src/js/main.js',
    images: './src/img/**/*',
};

// Define source files to watch
const watch = {
    sass: './src/sass/custom/**/*.scss',
    script: './src/js/**/*.js',
    images: './src/img/**/*',
};

// Define output directories
const output = {
    sass: './dist/assets/css',
    scripts: './dist/assets/js',
    images: './dist/img',
};

// Image compression settings
const imageSettings = [
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
];

// Autoprefixer settings
const autoprefixerBrowsers = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

// Compile and automatically prefix stylesheets
gulp.task('sass', () => {
    return gulp.src(source.sass)
        .pipe(plumber())
        .pipe(sourcemaps.init()) // Comment this line for production build
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(sourcemaps.write()) // Comment this line for production build
        .pipe(gulp.dest(output.sass))
        .pipe(browserSync.stream());
});

// Process all custom Javascript files
gulp.task('script', () => {
    return gulp.src(source.scripts.custom)
        .pipe(plumber())
        .pipe(sourcemaps.init()) // Comment this line for production build
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write()) // Comment this line for production build
        .pipe(gulp.dest(output.scripts));
});

// Image optimalisation 
gulp.task('images', () => {
    return gulp.src(source.images)
        .pipe(imagemin(imageSettings))
        .pipe(gulp.dest(output.images))
});

// Sets browsersync
gulp.task('serve', ['sass', 'script', 'images'], () => {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch(watch.sass, ['sass']);
    gulp.watch(watch.scripts.custom, ['script']).on('change', browserSync.reload);
    gulp.watch(watch.images, ['images']).on('change', browserSync.reload);
});
   
// Initialize default task
gulp.task('default', ['serve']);
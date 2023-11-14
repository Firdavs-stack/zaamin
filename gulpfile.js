const {watch, src ,dest, parallel, series} = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const scss =  require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const del = require('del');

function styles (){
    return src(['app/scss/**/*.scss','node_modules/normalize.css/normalize.css'])
            .pipe(scss({outputStyle: 'compressed'}))
            .pipe(concat('styles.min.css'))
            .pipe(dest('app/css'))
            .pipe(autoprefixer({
                overrideBrowserlist: 'last 10 version'
            }))
            .pipe(browserSync.stream())
}

function scripts(){
    return src(['node_modules/jquery/dist/jquery.js', 'app/js/main.js'])
            .pipe(concat('main.min.js'))
            .pipe(uglify())
            .pipe(dest('app/js'))
            .pipe(browserSync.stream())
}

function images(){
    return src('app/images/**/*')
            .pipe(imagemin(
                [
                    imagemin.gifsicle({interlaced: true}),
                    imagemin.mozjpeg({quality: 75, progressive: true}),
                    imagemin.optipng({optimizationLevel: 5}),
                    imagemin.svgo({
                        plugins: [
                            {removeViewBox: true},
                            {cleanupIDs: false}
                        ]
                    })
                ]
            ))
            .pipe(dest('dist/images'))
}

function watching(){
    watch(['app/scss/**/*.scss'], styles)
    watch(['app/*.html']).on('change', browserSync.reload)
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
}

function browsersync(){
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    })
}

function build(){
    return src([
        'app/css/styles.min.css', 
        'app/fonts/**/*',
        'app/js/main.min.js',
        'app/*.html'
    ], {base: 'app', allowEmpty: true})
    .pipe(dest('dist'))
}

function cleanDist (){
    return del('dist')
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;
exports.build = series(cleanDist,images,build)
exports.images = images;
exports.default = parallel(cleanDist,styles, scripts, browsersync, watching);
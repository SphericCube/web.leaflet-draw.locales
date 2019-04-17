const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

exports.default = () => {
    return src('src/**/*.js')
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(uglify())
            .pipe(rename({extname: '.min.js'}))
            .pipe(dest('dist'));
};

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

//Função do Sass (compilação)
function stylesSass(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}
//uglify
function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

//imagemin
function images(){
    return gulp.src('./src/image/**/*')
    .pipe(imagemin()) //Comprensão das imagens
    .pipe(gulp.dest('./dist/images'));//Pasta de destino dos arquivos comprimidos
}


exports.default = gulp.parallel(stylesSass, images , scripts);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss',gulp.parallel(stylesSass));
    //npm run build watch
}
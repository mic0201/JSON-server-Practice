var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var jsonServer = require('gulp-json-srv');
var serverReload = require("gulp-server-livereload");

// 設定 jsonServer
var server = jsonServer.create();
gulp.task('jsonServer', () => {
  return gulp.src('db.json')
    .pipe(server.pipe())
})

// 設定Server
gulp.task('connect',() => {
  connect.server({
    root: './',
    livereload: true
  });
})

// 哪些資料有變動就啟動reload
gulp.task('reload',() => {
  gulp.src(['./*.html','./sass/*.sass','./js/*.js'])
    .pipe(connect.reload());
})

// 編譯 sass, 以及加入 壓縮 , css reset 功能 , 中文註解
gulp.task('sass',() => {
  return gulp.src('./sass/*.sass')
    .pipe(sass({ 
      outputStyle: 'compressed',
      includePaths: require('node-reset-scss').includePath
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});

// 監控資料, 啟動特定task
gulp.task('watch', () => {
  gulp.watch('./sass/*.sass', ['sass','reload']);
  gulp.watch(['./js/*.js','./*.html'], ['reload']);
  gulp.watch(['./db.json'],['jsonServer','reload']);
})

// Default
gulp.task('default', ['sass','connect','reload','jsonServer','watch']);
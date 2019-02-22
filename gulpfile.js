const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');  //引入css压缩功能模块
const connect = require('gulp-connect');   //引入连接服务器模块
const htmlmin = require('gulp-htmlmin');   //引入压缩html模块


//开启服务器任务
gulp.task('connect',function(){
  connect.server();     //开启服务器
  console.log("连接服务器");
})
//压缩css
gulp.task('minicss', () => {
  return gulp.src('app/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'))
    console.log("压缩css")
});

//压缩html
gulp.task('minihtml', function () {
  //查找app目录下所有html文件
  gulp.src(['rev/*json','app/**/*.html'])       
  .pipe(htmlmin({
      collapseWhitespace: true,
      minifyJS: true,            
      minifyCSS: true             
  })) //压缩html
  .pipe(gulp.dest('dist'))   //把压缩的html文件放到dist文件中
console.log("压缩html");
});



gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});

//监听文件,如果发生改变就重新压缩
gulp.task('watch',function(){
  gulp.watch('app/**/*.html',['minihtml']); 
  gulp.watch('app/**/*.css',['minicss'])    
  gulp.watch('app/images/*',['miniimg'])  

})
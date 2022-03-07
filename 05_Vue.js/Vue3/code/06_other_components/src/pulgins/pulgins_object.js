export default {
  // install函数名是固定的
  install(app) {
    // 安装插件属性到组件实例config.globalProperties里
    
    // console.log(app);
    app.config.globalProperties.$name = 'fh'
  }
}
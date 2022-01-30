module.exports = {
  configureWebpack: {
    devServer: {
      // historyApiFallback 主要作用是解决SPA页面在路由跳转之后，进行页面刷新时，返回404的错误。
      // 默认是false，如果为ture则自动返回index.html的内容。
      // historyApiFallback: true
    }
  }
}

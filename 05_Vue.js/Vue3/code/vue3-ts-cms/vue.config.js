// const path = require('path')
// 为 Element Plus 按需引入样式
const unpluginElementPlus = require('unplugin-element-plus/webpack')

module.exports = {
  // 1.配置方式一：CLI提供的属性
  outputDir: 'build',
  // publicPath: './',
  // 2.配置方式二：和webpack属性完全一致，最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        component: '@/components'
      }
    },
    plugins: [unpluginElementPlus()],
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://152.136.185.210:5000',
          pathRewrite: {
            '^/api': ''
          },
          changeOrigin: true
        }
      }
    }
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     component: '@/components'
  //   }
  // }
  // 3.配置方式三：
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('component', '@/components')
  // }
}

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index') // 引用vue-loader的VueLoaderPlugin

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader' // 使用babel.config.js配置文件
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader' // vue-loader内部依赖@vue/compiler-sfc这个包来解析文件
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: '哈哈哈'
    }),
    new DefinePlugin({
      BASE_URL: '"./"',
      // 定义Vue功能标识
      __VUE_OPTIONS_API__: true, // 适配Vue2的API，为true则做适配，为false则会删除相应源代码不做适配
      __VUE_PROD_DEVTOOLS__: false // 生产阶段启用/禁用devtools调试工具，为true启用，false则禁用
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          to: './',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    }),
    new VueLoaderPlugin() // 使用vue-loader还需要用vue-loader里的VueLoaderPlugin来处理事情
  ]
}

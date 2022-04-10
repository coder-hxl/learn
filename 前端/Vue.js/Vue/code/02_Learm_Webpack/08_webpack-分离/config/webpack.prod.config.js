const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { merge } = require('webpack-merge') // 使用 webpack-merge 包

const commonConfig = require('./webpack.comm.config')

// 合并公共配置
module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
})

const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebapckPlugin({
      template: './index.html'
    })
  ]
}

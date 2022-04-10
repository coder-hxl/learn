/* 
	webpack配置文件，文件名webpack.config.js不能乱写，配置信息需要使用CommonJS的导出
	配置信息：
		- entry入口文件：需要打包的文件目录
		- output出口文件：
			- path：此文件的绝对目录, 打包文件的存放目录
			- filename：打包后的文件名
*/

const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  }
}

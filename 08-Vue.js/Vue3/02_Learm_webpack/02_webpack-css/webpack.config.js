/* 
	webpack配置文件，文件名webpack.config.js不能乱写，配置信息需要使用CommonJS的导出
	配置信息：
		- entry入口文件：需要打包的文件目录

		- output出口文件：
			- path：此文件的绝对目录, 打包文件的存放目录
			- filename：打包后的文件名

		- module模块：
			- rules规则属性，属性值是一个数组，里面可以存放多个对象，对象里面存放要规定类型的文件配置
*/

const path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/, // 正则表达式，匹配.css类型的文件
				// 打包css模块需要使用css-loader
				// 1.loader的写法(语法糖)
				// loader: 'css-loader',

				// 2.完整写法
				use: [
					// {loader: 'css-loader'}
					// loader的执行顺序是从下到上，需要将style-loader写到css-loader
					'style-loader', // 将style插入到页面中
					'css-loader', // 先将css模块解析打包

					/* 
						PostCSS这个工具可以将一些CSS进行转换和适配，如自动添加浏览器前缀、CSS样式的重置；
						但是实现这些功能需要PostCSS对应的插件
					*/
					"postcss-loader" // 这里没有设置配置信息，则会自动去同级目录上找postcss.config.js文件导出的内容当成自己的配置信息

					// {
					// 	loader: 'postcss-loader', // 这里给postcss-loader设置了配置信息，会直接使用
					// 	options: {
					// 		postcssOptions: {
					// 			plugins: [ // 插件
					// 				require('postcss-preset-env') // 使用postcss-preset-env模块
					// 			]
					// 		}
					// 	}
					// }
				]
			},
			{
				test: /\.less$/, // 正则表达式，匹配.less类型的文件
				use: [
					'style-loader',
					'css-loader',
					'less-loader' // 必须先通过less-loader将less转成css
				]
			},
			// {
			// 	test: /\.(less|css)$/, // 正则表达式，匹配.less或.css类型的文件
			// 	use: [
			// 		'style-loader',
			// 		'css-loader',
			// 		'less-loader'
			// 	]
			// }
		]
	}
}
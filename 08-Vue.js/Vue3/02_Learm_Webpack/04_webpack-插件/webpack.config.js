const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {DefinePlugin} = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	/* 
		mode设置模式
			- development：开发阶段，会设置development
			- production：生产阶段，准备打包上线的时候，设置production
	 */
	mode: 'development',
	/* 
		devtool设置
			- source-map，建立js映射文件，方便调试代码和错误
	 */
	devtool: 'source-map',

	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/bundle.js',
		// assetModuleFilename: 'img/[name]_[hash:6][ext]' // 通过asset打包资源的路径及文件命名格式
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
				]
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader',
				]
			},
			// {
			// 	test: /\.(jpe?g|png|gif)$/, 
			// // 下载对应的loader打包资源方式
			// 	use: {
			// 		loader: 'url-loader',
			// 		options: {
			// 			// outputPath: 'img', // 输出路径，起始目录为打包路径下
			// 			name: 'img/[name]_[hash:6].[ext]', //  打包资源的路径及文件命名格式，起始目录为打包路径
			// 			limit: 100 * 1024, // 将100kb以下的图片转成base64的uri标识
			// 		}
			// 	}
			// },
			{
				test: /\.(jpe?g|png|gif)$/, 
				// webpack5自带的asset打包资源方式模块，无需借助loader
				type: 'asset', // asset模块类型
				generator: {
					filename: 'img/[name]_[hash:6][ext]' // 打包资源的路径及文件命名格式，起始目录为打包路径
				},
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024 // 将10kb以下的图片转成base64的uri标识
					}
				}
			},
			// {
			// 	test: /\.(eot|ttf|woff2?)/,
			// 	// 下载对应的loader打包资源方式
			// 	use: {
			// 		loader: 'file-loader',
			// 		options: {
			// 			name: 'font/[name]_[hash:6].[ext]'
			// 		}
			// 	}
			// },
			{
				test: /\.(eot|ttf|woff2?)/,
				// webpack5自带的asset打包资源方式模块，无需借助loader
				type: 'asset/resource',
				generator: {
					filename: 'font/[name]_[hash:6].[ext]'
				}
			}
		]
	},
	plugins: [ // plugin使用插件
		new CleanWebpackPlugin(), // 每次打包前先把原先打包的内容删掉，再重新打包
		// 自动生成html模块插件
		new HtmlWebpackPlugin({
			template: 'public/index.html', // 使用自定义html模板
			title: '哈哈哈哈'
		}), 
		// 定义标识
		new DefinePlugin({
			BASE_URL: '"./"' // 给要打包的html模板的BASE_URL变量
		}),
		// 复制资源插件
		new CopyWebpackPlugin({ 
			patterns: [
				{
					from: 'public', // 选择文件目录
					to: './', // 在打包目录下
					globOptions: {
						ignore: [ // 匹配忽略复制的文件
							'**/index.html' // **表示目录下的所有index.html文件
						]
					}
				}
			]
		})
	]
}
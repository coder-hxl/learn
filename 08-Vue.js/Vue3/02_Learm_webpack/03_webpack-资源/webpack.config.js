const path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js',
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
			// 			// outputPath: 'img', // 输出路径，起始目录为打包路径
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
						maxSize: 100 * 1024 // 将100kb以下的图片转成base64的uri标识
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
	}
}
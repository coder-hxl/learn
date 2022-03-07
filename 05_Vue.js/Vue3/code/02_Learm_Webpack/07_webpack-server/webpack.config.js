const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {DefinePlugin} = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader/dist/index') 

module.exports = {
	target: 'web', // 环境打包模式
	mode: 'development',
	devtool: 'source-map',
	// watch: true, // watch模式：只要依赖图中的文件发生改变，那么代码就被重新编译
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/bundle.js',
	},
	// devServer配置
	devServer: {
		static: './public', // 该配置指定一个静态目录。启动server后如果浏览器需要引用的文件没在webpack打包里，则就会去 static 提供的目录中查找
		hot: true, // 热模块替换。修改依赖图里模块的代码，无需刷新浏览器实现更新
		// host: '0.0.0.0', // 主机地址
		port: 8888, // 端口号
		// open: true, // 是否打开浏览器
		compress: true, // 将打包资源里除html格式的文件压缩成gzip格式

		// 代理配置，通过代理发送请求
		proxy: {
			'/api': {
				target: 'http://localhost:8888', // 表示代理到的目标地址，比如/api/moment会被代理到http://localhost:8888/api/moment
				// 默认情况下，我们的/api也会被写入到URL中，如果希望删除，可以使用pathRewrite
				pathRewrite: {
					'^/api': '', // 不希望传递/api，匹配/api改写为空字符串
				},
				secure: false, // 默认情况下不接收转发到https的服务器上，如果希望支持，可以设置为false
				changeOrigin: true, // 表示是否更新代理后请求的headers中host地址
			}
		}
	},
	// resolve路径的配置
	resolve: {
		// extensions是解析到文件时自动添加扩展名：
		extensions: ['.js', '.json', '.mjs', '.vue', '.ts', ],
		// alias是配置别名
		alias: {
			'@': path.resolve(__dirname, './src'), // 在依赖图里，引入路径有@符号就会把@当成./src，如@/vue/App会解析成./src/vue/App
			'js': path.resolve(__dirname, './src/js')
		}
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
			{
				test: /\.(jpe?g|png|gif)$/,
				type: 'asset',
				generator: {
					filename: 'img/[name]_[hash:6][ext]',
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
					filename: 'font/[name]_[hash:6][ext]',
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader', 
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			title: '哈哈哈',
		}),
		new DefinePlugin({
			BASE_URL: '"./"',
			__VUE_OPTIONS_API__: true, 
			__VUE_PROD_DEVTOOLS__: false
		}),
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{
		// 			from: './public',
		// 			to: './',
		// 			globOptions: {
		// 				ignore: [
		// 					'**/index.html'
		// 				]
		// 			}
		// 		}
		// 	]
		// }),
		new VueLoaderPlugin(),
	]
}
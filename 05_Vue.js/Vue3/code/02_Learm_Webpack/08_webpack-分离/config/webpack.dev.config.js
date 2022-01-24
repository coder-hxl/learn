const { merge } = require('webpack-merge') // 使用 webpack-merge 包

const commonConfig = require('./webpack.comm.config')

// 合并公共配置
module.exports = merge(commonConfig, {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		static: './public', 
		hot: true, 
		// host: '0.0.0.0',
		port: 8888, 
		// open: true,
		compress: true,
		proxy: {
			'/api': {
				target: 'http://localhost:8888',
				pathRewrite: {
					'^/api': '', 
				},
				secure: false, 
				changeOrigin: true, 
			}
		}
	},
})
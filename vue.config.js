//路径别名
const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
configureWebpack: {
	    //关闭 webpack 的性能提示
	    performance: {
		    hints:false
	    }
	    },

	lintOnSave: true,
	//路径别名
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('assets', resolve('src/assets'))
			.set('components', resolve('src/components'))
			.set('pages', resolve('src/pages'))
			.set('static', resolve('src/static'))
	},
	devServer: {
		disableHostCheck: true,
		//跨域
		proxy: {
			'/api': {
				target: 'https://xsytest.dingdingxiujia.com',
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			},
		}
	},
	outputDir: 'dist',
	publicPath: './',
	// // 生产环境是否生成 sourceMap 文件
	productionSourceMap: true,


}
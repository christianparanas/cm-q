const { resolve } = require('path')


module.exports = {
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				page1: resolve(__dirname, '/pages/chapter2.html'),
				page2: resolve(__dirname, '/pages/chapter3.html'),
			}
		}
	}
}
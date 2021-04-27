const { resolve } require('path')


module.exports = {
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html')
				nested: resolve(__dirname, '/pages/chapter2.html')
			}
		}
	}
}
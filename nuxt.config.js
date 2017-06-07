const { join } = require('path')

module.exports = {
	//loading: 'components/loading.vue',
	css: [
		//'hover.css/css/hover-min.css',
		//'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
		//'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.min.css',
		//'bulma/bulma.css',
		//{ src: 'bulma', lang: 'sass' },
		join(__dirname, 'css/bulma.css'),
		join(__dirname, 'css/main.css')
	],
	build: {
		extractCSS: true
	}
}
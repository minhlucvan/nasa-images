export default {
	home: {
		name: 'home',
		uri: '/',
	},
	explode: {
		name: 'exprode',
		uri: '/explode',
		children: {
			media: {
				name: 'media',
				uri: 'media',
			},
		},
	},
	collection: {
		name: 'collection',
		uri: '/collection',
		children: {
			media: {
				name: 'media',
				uri: 'media',
			},
		},
	},
};

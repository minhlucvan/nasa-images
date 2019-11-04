export default () => ({
	getAssets: () => Promise.resolve(localStorage.getItem('assets') || {}),
	saveAsset: (item) => {
		const data = localStorage.getItem('assets') || '{}';
		const collection = JSON.parse(data);
		collection[item.id] = item;
		const updatedData = JSON.stringify(collection);
		localStorage.setItem('assets', updatedData);
		return Promise.resolve(item);
	},
	removeAsset: (id) => {
		const data = localStorage.getItem('assets') || '{}';
		const collection = JSON.parse(data);
		delete collection[id];
		const updatedData = JSON.stringify(collection);
		localStorage.setItem('assets', updatedData);
		return Promise.resolve(id);
	},
	get: (id) => {
		const data = localStorage.getItem('assets') || '{}';
		const collection = JSON.parse(data);
		return collection[id];
	},
});

import reduce from 'lodash/reduce';
import keyBy from 'lodash/keyBy';
import get from 'lodash/get';
import * as Fuse from 'fuse.js';
import { createAction, createReducer } from 'redux-starter-kit';

import * as fromApi from '../../api';

const PREFIX = '[NASA] [ASSETS]';

export const actions = {
	startFetch: createAction(`${PREFIX}/startFetch`),
	stopFetch: createAction(`${PREFIX}/stopFetch`),
	clearAssets: createAction(`${PREFIX}/clearAssets`),
	clearTempAssets: createAction(`${PREFIX}/clearTempAssets`),
	insertAssets: createAction(`${PREFIX}/insertAssets`),
	selectAsset: createAction(`${PREFIX}/selectAsset`),
	deselectAsset: createAction(`${PREFIX}/deselectAsset`),
	saveAsset: createAction(`${PREFIX}/saveAsset`),
	removeAsset: createAction(`${PREFIX}/removeAsset`),
	likeAsset: createAction(`${PREFIX}/likeAsset`),
	dislikeAsset: createAction(`${PREFIX}/dislikeAsset`),
	searchAsset: createAction(`${PREFIX}/searchAsset`),
	getRecentAsset: createAction(`${PREFIX}/getRecentAsset`),
	updateSearchTerm: createAction(`${PREFIX}/updateSearchTerm`),
	setRemote: createAction(`${PREFIX}/setRemote`),
	setIsFavorited: createAction(`${PREFIX}/setIsFavorited`),
};

export const initialState = {
	data: {},
	selectedId: null,
	searchTerm: null,
	fectched: false,
	isFetching: false,
	remoteEnabled: false,
	isFavorited: false,
	lastFetchRecent: null,
};

export const selectors = {
	root: (state) => state.assets,
	selected: (state) => state.data[state.selectedId],
	searchTerm: (state) => state.searchTerm,
	shouldFetchRecent: (state) => !state.lastFetchRecent
		|| (!state.searchTerm
			&& (Date.now() - state.lastFetchRecent) * 0.001 > 5 * 60),
	isFetching: (state) => state.isFetching,
	hasItem: (id) => (state) => !!state.data[id],
	isRemoteEnabled: (state) => state.remoteEnabled,
	isFavorited: (state) => state.isFavorited,
	items: (state) => {
		let items = Object.values(state.data).filter((it) => {
			const remoteFilter = state.remoteEnabled && !!it.temp;
			const recentFilter = !state.searchTerm && !!it.isRecent;
			const searchFilter = state.searchTerm && !it.isRecent;
			const localFilter = !state.remoteEnabled && !it.temp && it.isSaved;
			const favoritedFilter = state.isFavorited && it.isFavorited;
			const localSearchFilter = !state.isFavorited || state.searchTerm;
			return (
				(remoteFilter && (recentFilter || searchFilter))
				|| (localFilter && (favoritedFilter || localSearchFilter))
			);
		});
		if (!state.remoteEnabled && state.searchTerm) {
			const options = {
				keys: ['caption', 'description'],
				shouldSort: true,
				threshold: 0.6,
				location: 0,
				distance: 100,
				maxPatternLength: 32,
				minMatchCharLength: 1,
			};
			const fuse = new Fuse(items, options);

			items = fuse.search(state.searchTerm);
		}
		return items;
	},
};

export const reducer = createReducer(initialState, {
	[actions.insertAssets]: (state, { payload }) => {
		const { data: items, recent } = payload;
		// eslint-disable-next-line no-restricted-syntax
		for (const item of items) {
			const oldItem = state.data[item.id];
			let isSaved = false;
			let isFavorited = false;
			let isRecent = recent;
			const temp = true;
			if (oldItem) {
				isSaved = oldItem.isSaved || false;
				isFavorited = oldItem.isFavorited || false;
				isRecent = oldItem.isRecent || false;
			}
			state.data[item.id] = { ...item, isFavorited, isSaved, temp, isRecent };
		}
	},
	[actions.clearAssets]: (state) => {
		state.data = {};
	},
	[actions.startFetch]: (state) => {
		state.isFetching = true;
	},
	[actions.stopFetch]: (state) => {
		state.isFetching = false;
		state.fectched = true;
	},
	[actions.selectAsset]: (state, { payload }) => {
		state.selectedId = payload;
	},
	[actions.deselectAsset]: (state) => {
		state.selectedId = null;
	},
	[actions.saveAsset]: (state, { payload }) => {
		const { id } = payload;
		state.data[id].isSaved = true;
	},
	[actions.removeAsset]: (state, { payload }) => {
		const { id } = payload;
		state.data[id].isSaved = false;
		state.data[id].isFavorited = false;
	},
	[actions.likeAsset]: (state, { payload }) => {
		const { id } = payload;
		state.data[id].isFavorited = true;
		state.data[id].isSaved = true;
	},
	[actions.dislikeAsset]: (state, { payload }) => {
		const { id } = payload;
		state.data[id].isFavorited = false;
	},
	[actions.clearTempAssets]: (state) => {
		const items = Object.values(state.data);
		const data = {};
		// eslint-disable-next-line no-restricted-syntax
		for (const item of items) {
			if (item.isSaved || item.isRecent) {
				if (item.isSaved) {
					item.temp = false;
				}
				data[item.id] = item;
			}
		}
		state.data = data;
	},
	[actions.setRemote]: (state, { payload }) => {
		state.remoteEnabled = payload;
	},
	[actions.updateSearchTerm]: (state, { payload }) => {
		state.searchTerm = payload;
	},
	[actions.setIsFavorited]: (state, { payload }) => {
		state.isFavorited = payload;
	},
	[actions.getRecentAsset]: (state, { payload }) => {
		state.lastFetchRecent = Date.now();
	},
});

const remoteSearch = async ({ dispatch }, action, next) => {
	try {
		dispatch(actions.startFetch());
		next(action);
		dispatch(actions.clearTempAssets());
		const res = await dispatch(fromApi.actions.searchAssetApi(action.payload));
		dispatch(actions.insertAssets(res));
		return res;
	} catch (e) {
		console.error(e);
	} finally {
		dispatch(actions.stopFetch());
	}
	return action;
};

const localSearch = async ({ dispatch, getState }, action) => {
	const a = 1;
	return action;
};

const searchAssetEffect = async (store, action, next) => {
	const state = store.getState();
	const localState = get(state, 'nasa.assets');
	const isRemote = selectors.isRemoteEnabled(localState);
	if (isRemote) {
		return remoteSearch(store, action, next);
	}
	return localSearch(store, action, next);
};

const selectAssetEffect = ({ dispatch, getState }, action, next) => {
	const state = getState();
	const localState = get(state, 'nasa.assets');
	const hasItemSelector = selectors.hasItem(action.payload);
	if (!hasItemSelector(localState)) {
		dispatch(actions.searchAsset({ nasa_id: action.payload }));
	}
	next(action);
	return action;
};

const updateSearchTermEffect = ({ dispatch, getState }, action, next) => {
	const state = getState();
	const localState = get(state, 'nasa.assets');
	if (action.payload && selectors.isRemoteEnabled(localState)) {
		dispatch(actions.searchAsset({ q: action.payload }));
	}
	next(action);
};

const getRecentAssetEffect = async ({ dispatch, getState }, action, next) => {
	const state = getState();
	const localState = get(state, 'nasa.assets');
	if (selectors.shouldFetchRecent(localState)) {
		next(action);
		dispatch(actions.startFetch());
		const res = await dispatch(fromApi.actions.getRecentAssetApi());
		dispatch(actions.insertAssets({ ...res, recent: true }));
	}
	return action;
};

export const effects = {
	[actions.searchAsset]: searchAssetEffect,
	[actions.selectAsset]: selectAssetEffect,
	[actions.updateSearchTerm]: updateSearchTermEffect,
	[actions.getRecentAsset]: getRecentAssetEffect,
};

export default reducer;

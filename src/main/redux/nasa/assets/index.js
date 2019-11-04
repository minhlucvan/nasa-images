import reduce from 'lodash/reduce';
import keyBy from 'lodash/keyBy';
import get from 'lodash/get';
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
	updateSearchTerm: createAction(`${PREFIX}/updateSearchTerm`),
	setRemote: createAction(`${PREFIX}/setRemote`),
};

export const initialState = {
	data: {},
	selectedId: null,
	searchTerm: null,
	fectched: false,
	isFetching: false,
	remoteEnabled: false,
};

export const reducer = createReducer(initialState, {
	[actions.insertAssets]: (state, { payload }) => {
		state.data = keyBy(payload, 'id');
		state.items = payload;
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
		const items = Object.values(state.data).filter((item) => item.isSaved);
		const data = keyBy(items, 'id');
		state.data = data;
	},
	[actions.setRemote]: (state, { payload }) => {
		state.remoteEnabled = payload;
	},
	[actions.updateSearchTerm]: (state, { payload }) => {
		state.searchTerm = payload;
	},
});

export const selectors = {
	root: (state) => state.assets,
	selected: (state) => state.data[state.selectedId],
	searchTerm: (state) => state.searchTerm,
	isFetching: (state) => state.isFetching,
	hasItem: (id) => (state) => !!state.data[id],
	isRemoteEnabled: (state) => state.remoteEnabled,
	items: (state) => Object.values(state.data)
		.filter((it) => {
			const remoteFilter = state.remoteEnabled || !it.isSaved;
			return remoteFilter;
		}),
};

const searchAssetEffect = async ({ dispatch }, action) => {
	try {
		dispatch(actions.startFetch());
		const res = await dispatch(fromApi.actions.searchAssetApi(action.payload));
		dispatch(actions.clearTempAssets());
		dispatch(actions.insertAssets(res.data));
		return res;
	} catch (e) {
		console.error(e);
	} finally {
		dispatch(actions.stopFetch());
	}
	return action;
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

export const effects = {
	[actions.searchAsset]: searchAssetEffect,
	[actions.selectAsset]: selectAssetEffect,
	[actions.updateSearchTerm]: updateSearchTermEffect,
};

export default reducer;

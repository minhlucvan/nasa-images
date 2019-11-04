import keyBy from 'lodash/keyBy';
import { createAction, createReducer } from 'redux-starter-kit';

import * as fromApi from '../../api';

const PREFIX = '[NASA] [ASSETS]';

const startFetch = createAction(`${PREFIX}/startFetch`);

const stopFetch = createAction(`${PREFIX}/stopFetch`);

const clearAssets = createAction(`${PREFIX}/clearAssets`);

const insertAssets = createAction(`${PREFIX}/insertAssets`);

const selectAsset = createAction(`${PREFIX}/selectAsset`);

const deselectAsset = createAction(`${PREFIX}/deselectAsset`);

const saveAsset = createAction(`${PREFIX}/saveAsset`);

const removeAsset = createAction(`${PREFIX}/removeAsset`);

const likeAsset = createAction(`${PREFIX}/likeAsset`);

const dislikeAsset = createAction(`${PREFIX}/dislikeAsset`);

const searchAsset = createAction(`${PREFIX}/searchAsset`);

export const actions = {
	startFetch,
	stopFetch,
	clearAssets,
	selectAsset,
	deselectAsset,
	searchAsset,
};

export const initialState = {
	data: {},
	selectedId: null,
	searchTerm: null,
	fectched: false,
	isFetching: false,
};

export const reducer = createReducer(initialState, {
	[insertAssets]: (state, { payload }) => {
		state.data = keyBy(payload, 'id');
		state.items = payload;
	},
	[clearAssets]: (state) => {
		state.data = {};
	},
	[startFetch]: (state) => {
		state.isFetching = true;
	},
	[stopFetch]: (state) => {
		state.isFetching = false;
		state.fectched = true;
	},
	[selectAsset]: (state, { payload }) => {
		state.selectedId = payload;
	},
	[deselectAsset]: (state) => {
		state.selectedId = null;
	},
	[saveAsset]: (state, { payload }) => {
		const { id } = payload;
		state.data[id].isSaved = true;
	},
	[removeAsset]: (state, { payload }) => {
		state.data[payload].isSaved = false;
	},
	[likeAsset]: (state, { payload }) => {
		state.data[payload].isFavorite = true;
	},
	[dislikeAsset]: (state, { payload }) => {
		state.data[payload].isFavorite = false;
	},
});

export const selectors = {
	root: (state) => state.assets,
	items: (state) => Object.values(state.data),
	selected: (state) => state.data[state.selectedId],
	shouldLoadAssets: (state) => state.selectedId && !state.data[state.selectedId] && !state.isFetching && !state.fectched,
};

const searchAssetEffect = async ({ dispatch }, action) => {
	try {
		dispatch(startFetch());
		const res = await dispatch(fromApi.actions.searchAssetApi(action.payload));
		dispatch(insertAssets(res.data));
		return res;
	} catch (e) {
		// TODO
	} finally {
		dispatch(stopFetch());
	}
	return null;
};

export const effects = {
	[searchAsset]: searchAssetEffect,
};

const fetchAssets = (dispatch, excution) => (...args) => {
	dispatch(startFetch());
	return excution(...args)
		.then((result) => {
			dispatch(clearAssets());
			dispatch(insertAssets(result.data));
		})
		.finally(() => {
			dispatch(stopFetch());
		});
};

export const useSelectAsset = (dispatch) => (assetId) => dispatch(selectAsset(assetId));

export const useDeselectAsset = (dispatch) => () => dispatch(deselectAsset());

export const usefetchAsset = (dispatch, excution) => fetchAssets(dispatch, excution);

export const useSaveAsset = (dispatch, excution) => (...args) => excution(...args).then((item) => dispatch(saveAsset(item)));

export const useRemoveAsset = (dispatch, excution) => (...args) => excution(...args).then((item) => dispatch(removeAsset(item)));

export default reducer;

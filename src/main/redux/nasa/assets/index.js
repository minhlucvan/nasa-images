import { createAction, createReducer } from 'redux-starter-kit';
import keyBy from 'lodash/keyBy';
import isEmpy from 'lodash/isEmpty';


const PREFIX = '[NASA] [ASSETS]';

const startFetch = createAction(`${PREFIX}/startFetch`);

const stopFetch = createAction(`${PREFIX}/stopFetch`);

const clearAssets = createAction(`${PREFIX}/clearAssets`);

const insertAssets = createAction(`${PREFIX}/insertAssets`);

const selectAsset = createAction(`${PREFIX}/selectAsset`);

const deselectAsset = createAction(`${PREFIX}/deselectAsset`);

export const actions = {
	startFetch,
	stopFetch,
	clearAssets,
	selectAsset,
	deselectAsset,
};

export const initialState = {
	data: {},
	items: [],
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
});

export const selectors = {
	root: (state) => state.assets,
	items: (state) => state.items,
	selected: (state) => state.data[state.selectedId],
	shouldLoadAssets: (state) => state.selectedId && !state.data[state.selectedId] && !state.isFetching && !state.fectched,
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

export const usefetchAsset = (dispatch, excution) => fetchAssets(dispatch, excution);

export default reducer;

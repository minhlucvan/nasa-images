import { createAction, createReducer, createSelector } from 'redux-starter-kit';
import keyBy from 'lodash/keyBy';
import hashCode from '~helpers/hashCode';

const PREFIX = '[NASA] [ASSETS]';

const startFetch = createAction(`${PREFIX}/startFetch`);

const stopFetch = createAction(`${PREFIX}/stopFetch`);

const clearAssets = createAction(`${PREFIX}/clearAssets`);

const insertAssets = createAction(`${PREFIX}/insertAssets`);

export const actions = {
	startFetch,
	stopFetch,
	clearAssets,
};

export const initialState = {
	data: {},
	isFetching: false,
};

export const reducer = createReducer(initialState, {
	[insertAssets]: (state, { payload }) => {
		state.data = keyBy(payload, (item) => hashCode(item.href));
	},
	[clearAssets]: (state) => {
		state.data = {};
	},
	[startFetch]: (state) => {
		state.isFetching = true;
	},
	[stopFetch]: (state) => {
		state.isFetching = false;
	},
});

export const selectors = {
	root: createSelector((state) => state.assets),
	assets: createSelector((state) => Object.values(state.data)),
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


export const usefetchAsset = (dispatch, excution) => fetchAssets(dispatch, excution);

export default reducer;

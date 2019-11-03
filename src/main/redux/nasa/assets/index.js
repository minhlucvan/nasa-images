import { createAction, createReducer, createSelector } from 'redux-starter-kit';

const PREFIX = '[NASA] [ASSETS]';

const startFetch = createAction(`${PREFIX}/startFetch`);

const stopFetch = createAction(`${PREFIX}/stopFetch`);

const clearAssets = createAction(`${PREFIX}/clearAssets`);

const insertAssets = createAction(`${PREFIX}/insertAssets`);

const fetchAssets = createAction(`${PREFIX}/fetchAssets`, (excution) => async (dispatch) => {
	dispatch(startFetch());
	return excution()
		.then((result) => {
			dispatch(clearAssets());
			dispatch(insertAssets(result.assets));
		})
		.finally(() => {
			stopFetch();
		});
});

export const actions = {
	startFetch,
	stopFetch,
	clearAssets,
	fetchAssets,
};

export const initialState = {
	data: {},
	isFetching: false,
};

export const reducer = createReducer(initialState, {
	[insertAssets]: (state, { assets }) => {
		state.data = assets;
	},
	[clearAssets]: (state) => {
		state.data = {};
	},
});

export const selectors = {
	root: createSelector((state) => state.assets),
	assets: createSelector((state) => Object.values(state.data)),
};

export default reducer;

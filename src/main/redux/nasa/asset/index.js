import { createAction, createReducer } from 'redux-starter-kit';

const PREFIX = '[NASA] [ASSET] ';

const updateAsset = createAction(`${PREFIX}/updateAsset`);

const clearAsset = createAction(`${PREFIX}/updateAsset`);


export const actions = {
	updateAsset,
	clearAsset,
};

export const selectors = {
	asset: (state) => state.Asset,
};

export const initialState = {
	asset: null,
};

export const reducer = createReducer(
	initialState,
	{
		[updateAsset]: (state, payload) => {
			state.asset = payload;
		},
		[clearAsset]: (state) => {
			state.asset = null;
		},
	},
);

export default reducer;

import { createReducer, createAction, createSelector } from 'redux-starter-kit';

const PREFIX = '[APP] [CONFIG]';

const loadConfig = createAction(`${PREFIX}/loadConfig`);

export const actions = {
	loadConfig,
};

export const initialState = {
	app: {},
	api: {},
	nasa: {},
	brand: {},
};

export const reducer = createReducer([], {
	[loadConfig]: (state, { payload }) => payload,
});

export const selectors = {
	state: (state) => state,
	api: (state) => state.api,
};

export default reducer;

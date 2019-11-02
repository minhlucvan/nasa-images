import { createReducer, createAction } from 'redux-starter-kit';

const PREFIX = '[APP] [CONFIG]';

const loadConfig = createAction(`${PREFIX}/loadConfig`);

export const actions = {
	loadConfig,
};

export const initialState = {
};

export const reducer = createReducer([], {
	[loadConfig]: (state, { payload }) => payload,
});

export const selectors = {
	root: (state) => state.config,
};

export default reducer;

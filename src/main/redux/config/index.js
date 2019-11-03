import { createReducer, createAction, createSelector } from 'redux-starter-kit';

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
	root: createSelector((state) => state.config),
};

export default reducer;

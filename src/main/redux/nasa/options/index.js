import { createAction, createReducer } from 'redux-starter-kit';

const PREFIX = '[NASA] [OPTIONS] ';

const updateSearchTerm = createAction(`${PREFIX}/updateSearchTerm`);

const clearSearchTerm = createAction(`${PREFIX}/updateSearchTerm`);


export const actions = {
	updateSearchTerm,
	clearSearchTerm,
};

export const selectors = {
	searchTerm: (state) => state.searchTerm,
};

export const initialState = {
	searchTerm: '',
};

export const reducer = createReducer(
	initialState,
	{
		[updateSearchTerm]: (state, payload) => {
			state.searchTerm = payload;
		},
		[clearSearchTerm]: (state) => {
			state.searchTerm = '';
		},
	},
);

export default reducer;

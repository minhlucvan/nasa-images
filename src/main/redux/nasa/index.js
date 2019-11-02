import { combineReducers } from 'redux';
import * as options from './options';
import * as assets from './assets';

export const actions = {
	options: options.actions,
	assets: assets.options,
};

export const initialState = {
	options: options.initialState,
	assets: assets.initialState,
};

export const reducer = combineReducers({
	options: options.reducer,
	assets: assets.reducer,
});

export default reducer;

import * as options from './options';
import * as assets from './assets';
import * as asset from './asset';

import combineReducers from '../store/combineReducers';
import combineStates from '../store/combineStates';
import combineActions from '../store/combineActions';

export const modules = {
	options,
	assets,
};

export const actions = combineActions({}, modules);

export const initialState = combineStates({}, modules);

export const selectors = {
	options: options.selectors,
	assets: assets.selectors,
};

export const reducer = combineReducers(modules);

export default reducer;

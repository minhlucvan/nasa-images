import * as options from './options';
import * as assets from './assets';
import combineReducers from '../store/combineReducers';
import combineSelectors from '../store/combineSelectors';
import combineStates from '../store/combineStates';
import combineActions from '../store/combineActions';

const stores = {
	options,
	assets,
};

export const actions = combineActions({}, stores);

export const initialState = combineStates({}, stores);

export const selectors = {
	options: options.selectors,
	assets: assets.selectors,
};

export const reducer = combineReducers(stores);

export default reducer;

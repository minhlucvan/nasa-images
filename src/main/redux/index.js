import { compose } from 'redux-starter-kit';
import configureStore from './store/configureStore';
import combineSelectors from './store/combineSelectors';

import * as nasa from './nasa';
import * as config from './config';
import * as loading from './loading';
import * as api from './api';

const stores = { nasa, config, loading, api };

let redux = null;

export const getRedux = () => redux;

export default () => {
	const newRedux = {
		store: configureStore(stores),
		selectors: combineSelectors({}, stores),
	};
	newRedux.store.slector = newRedux.selectors;
	redux = newRedux;
	return redux;
};

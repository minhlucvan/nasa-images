import { compose } from 'redux-starter-kit';
import configureStore from './store/configureStore';
import combineSelectors from './store/combineSelectors';

import * as nasa from './nasa';
import * as config from './config';
import * as loading from './loading';

const stores = { nasa, config, loading };

export default () => ({
	store: configureStore(stores),
	selectors: combineSelectors({}, stores),
});

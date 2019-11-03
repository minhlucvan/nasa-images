import configureStore from './store/configureStore';

import * as nasa from './nasa';
import * as config from './config';
import * as loading from './loading';

export default () => configureStore({ nasa, config, loading });

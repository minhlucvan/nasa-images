import configureStore from './store/configureStore';

import * as nasa from './nasa';
import * as config from './config';
import * as loading from './loading';
import * as assets from './asset';

export default () => configureStore({ nasa, config, loading, assets });

import configureStore from './store/configureStore';

import * as nasa from './nasa';
import * as config from './config';

export default () => configureStore({ nasa, config });

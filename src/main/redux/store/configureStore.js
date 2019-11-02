import thunk from 'redux-thunk';
/* import { logger } from 'redux-logger'; */
import { compose, createStore, applyMiddleware } from 'redux';

import initialState from './initialState';

const middlewares = [];

const reducers = (state) => state;

const combinedStates = Object.assign(initialState);

middlewares.push(thunk);

/*
if (process.env.NODE_ENV === 'development') {
	middlewares.push(reduxLogger);
}
*/

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */

const configureStore = () => createStore(reducers, combinedStates, composeEnhancers(applyMiddleware(...middlewares)));

export default configureStore;

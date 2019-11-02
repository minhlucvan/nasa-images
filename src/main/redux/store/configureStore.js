import reduce from 'lodash/reduce';
import thunk from 'redux-thunk';
/* import { logger } from 'redux-logger'; */
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import initialState from './initialState';

const middlewares = [];

const createReducer = (modules) => combineReducers(reduce(modules, (r, v, k) => ({ [k]: v.reducer, ...r }), {}));

const combinedStates = (defaultState, modules) => ({ ...defaultState, ...reduce(modules, (r, v, k) => ({ [k]: v.initialState, ...r }), {}) });

middlewares.push(thunk);

/*
if (process.env.NODE_ENV === 'development') {
	middlewares.push(reduxLogger);
}
*/

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */

const configureStore = (modules) => createStore(
	createReducer(modules),
	combinedStates(initialState, modules),
	composeEnhancers(
		applyMiddleware(...middlewares),
	),
);

export default configureStore;

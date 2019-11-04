import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
/* import { logger } from 'redux-logger'; */
import { compose, createStore, applyMiddleware } from 'redux';
import combineReducers from './combineReducers';
import combineStates from './combineStates';
import combineEffects from './combineEffects';
import initialState from './initialState';

const middlewares = [thunk];


/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */

const configureStore = (modules) => createStore(
	combineReducers(modules),
	combineStates(initialState, modules),
	composeEnhancers(
		applyMiddleware(...middlewares, ...combineEffects(modules)),
		persistState('*', {
			key: 'nasa',
			slicer: () => (state) => state,
		}),
	),
);

export default configureStore;

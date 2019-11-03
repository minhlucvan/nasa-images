import reduce from 'lodash/reduce';
import { combineReducers } from 'redux';

export default (modules) => combineReducers(
	reduce(
		modules,
		(r, v, k) => ({
			[k]: v.reducer,
			...r,
		}),
		{},
	),
);

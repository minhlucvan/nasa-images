import reduce from 'lodash/reduce';

export default (defaultState, modules) => ({
	...defaultState,
	...reduce(
		modules,
		(r, v, k) => ({
			[k]: v.initialState,
			...r,
		}),
		{},
	),
});

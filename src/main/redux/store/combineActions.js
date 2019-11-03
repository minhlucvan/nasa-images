import reduce from 'lodash/reduce';

export default (defaultActions, modules) => ({
	...defaultActions,
	...reduce(
		modules,
		(r, v, k) => ({
			[k]: v.actions,
			...r,
		}),
		{},
	),
});

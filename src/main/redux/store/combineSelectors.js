import isFunction from 'lodash/isFunction';
import reduce from 'lodash/reduce';

export const createSelectors = (selectors, rootSelector) => reduce(
	selectors,
	(r, v, k) => ({
		[k]: isFunction(v) ? (state) => v(rootSelector(state), k) : createSelectors(v, (state) => rootSelector(state)[k]),
		...r,
	}),
	{},
);

export default (defaultSelectors, modules) => ({
	...defaultSelectors,
	...reduce(
		modules,
		(r, v, k) => ({
			[k]: createSelectors(v.selectors, (state) => state[k]),
			...r,
		}),
		{},
	),
});

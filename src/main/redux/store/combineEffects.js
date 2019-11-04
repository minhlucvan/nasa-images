import isObject from 'lodash/isObject';

export const combineEffects = (modules) => {
	const effects = [];
	// eslint-disable-next-line no-restricted-syntax
	for (const mod of Object.values(modules)) {
		const modEffects = mod.effects || {};
		// eslint-disable-next-line no-restricted-syntax
		for (const key of Object.keys(modEffects)) {
			const effectImpl = modEffects[key];
			const effect = (store) => (next) => (action) => {
				if (key !== '*' && action.type !== key) {
					return next(action);
				}
				return effectImpl(store, action, next);
			};
			effects.push(effect);
		}

		if (isObject(mod.modules)) {
			const subEffects = combineEffects(mod.modules);
			effects.push(...subEffects);
		}
	}
	return effects;
};


export default combineEffects;

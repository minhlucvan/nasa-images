import { createAction, createReducer, createSelector } from 'redux-starter-kit';
import { useDispatch } from 'react-redux';
import { update } from 'immutability-helper';

const PREFIX = '[APP] [LOADING]';

export const actions = {
	startLoad: createAction(`${PREFIX}/start`),
	stopLoad: createAction(`${PREFIX}/stop`),
};

export const initialState = {
	timeout: 900,
	indicators: 0,
	startTime: null,
};

export const reducer = createReducer(
	initialState,
	{
		[actions.startLoad]: (state) => update(state, { indicators: { $set: state.indicators + 1 } }),
		[actions.stopLoad]: (state) => update(state, { indicators: { $set: state.indicators > 0 ? state.indicators - 1 : 0 } }),
	},
);


export const withLoader = (task) => {
	const dispatch = useDispatch();
	dispatch(actions.startLoad());
	return task()
		.finally(() => {
			dispatch(actions.stopLoad());
		});
};

export const selectors = {
	root: createSelector((state) => state.loadding),
	isLoading: createSelector((state) => state.indicators === 0),
};

export default reducer;

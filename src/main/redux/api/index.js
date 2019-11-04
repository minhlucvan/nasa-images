import axios from 'axios';
import qs from 'qs';
import { createAction, createReducer } from 'redux-starter-kit';

const PREFIX = '[NASA] [ASSET] ';

const searchAssetApi = createAction(`${PREFIX}/searchAssetApi`);

export const actions = {
	searchAssetApi,
};

export const selectors = {
};

export const initialState = {
	asset: null,
};

const searchAssetApiEffect = ({ dispatch, getState }, { payload }) => {
	const { config: { api: { nasa: { schema, host, search } } } } = getState();
	return axios({
		method: 'get',
		url: `${schema}://${host}/${search}`,
		params: payload,
		paramsSerializer: (params) => qs.stringify(params),
	}).then((response) => ({
		meta: response.data.collection.metadata,
		data: response.data.collection.items
			.filter((item) => item && item.links && item.links[0] && item.links[0].href)
			.map((item) => {
				const info = item.data ? item.data[0] : {};
				const link = item.links ? item.links[0] : {};
				item.id = info.nasa_id;
				item.info = info;
				item.link = link;
				item.caption = info.title || '';
				item.description = info.description || '';
				item.thumbnail = link.href || '';
				item.displayDate = new Date(info.date_created).toLocaleDateString();
				return item;
			}),
	}));
};

export const effects = {
	[searchAssetApi]: searchAssetApiEffect,
};

export const reducer = createReducer(
	initialState,
	{},
);

export default reducer;

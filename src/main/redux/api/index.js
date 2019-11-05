import axios from 'axios';
import qs from 'qs';
import { createAction, createReducer } from 'redux-starter-kit';

const PREFIX = '[NASA] [ASSET] ';


export const actions = {
	searchAssetApi: createAction(`${PREFIX}/searchAssetApi`),
	getRecentAssetApi: createAction(`${PREFIX}/getRecentAssetApi`),
};

export const selectors = {
};

export const initialState = {
	asset: null,
};

const makeRequest = ({ url, method, params }) => axios({
	method,
	url,
	params,
	paramsSerializer: (p) => qs.stringify(p),
});

const makegetRequest = (url, params) => makeRequest({
	url,
	params,
	method: 'get',
});

const handleCollectionResponse = (response) => ({
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
});

const searchAssetApiEffect = ({ dispatch, getState }, { payload }) => {
	const { config: { api: { nasa: { schema, host, search } } } } = getState();
	return makegetRequest(`${schema}://${host}${search}`, payload)
		.then(handleCollectionResponse);
};

const getRecentAssetApiEffect = ({ dispatch, getState }, { payload }) => {
	const { config: { api: { nasa: { schema, assetsHost, recent } } } } = getState();
	return makegetRequest(`${schema}://${assetsHost}${recent}`, payload)
		.then(handleCollectionResponse);
};

export const effects = {
	[actions.searchAssetApi]: searchAssetApiEffect,
	[actions.getRecentAssetApi]: getRecentAssetApiEffect,
};

export const reducer = createReducer(
	initialState,
	{},
);

export default reducer;

import axios from 'axios';
import qs from 'qs';

export default ({ SCHEMA, HOST, SEARCH, token }) => {
	const BASE_URL = `${SCHEMA}://${HOST}`;
	return {
		search: (q) => axios({
			method: 'get',
			url: `${BASE_URL}/${SEARCH}`,
			params: {
				q,
			},
			paramsSerializer: (params) => qs.stringify(params),
		}).then((response) => ({
			meta: response.data.collection.metadata,
			data: response.data.collection.items
				.filter((item) => item && item.links && item.links[0] && item.links[0].href)
				.map((item) => {
					const info = item.data ? item.data[0] : {};
					const link = item.links ? item.links[0] : {};
					item.info = info;
					item.link = link;
					item.caption = info.title || '';
					item.thumbnail = link.href || '';
					return item;
				}),
		})),
	};
};

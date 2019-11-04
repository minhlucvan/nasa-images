import axios from 'axios';
import qs from 'qs';

export default ({ schema, host, search, token }) => {
	const BASE_URL = `${schema}://${host}`;
	return {
		// eslint-disable-next-line camelcase
		search: ({ q, nasa_id }) => axios({
			method: 'get',
			url: `${BASE_URL}/${search}`,
			params: {
				q,
				nasa_id,
			},
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
		})),
	};
};

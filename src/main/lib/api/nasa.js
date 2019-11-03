import axios from 'axios';
import qs from 'qs';

export default ({ SCHEMA, HOST, SEARCH, token }) => {
	const BASE_URL = `${SCHEMA}://${HOST}`;
	return {
		search: ({ term: q }) => axios({
			method: 'get',
			url: `${BASE_URL}/${SEARCH}`,
			params: {
				q,
			},
			paramsSerializer: (params) => qs.stringify(params),
		}),
	};
};

import { useState } from 'react';
import { compose } from 'redux';

export default (api) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [input, setInput] = useState(null);
	const [isLoading, setIsloading] = useState(false);

	const call = (payload) => {
		setData(null);
		setInput(null);
		setIsloading(true);
		setInput(payload);

		return api(input)
			.then((dat) => {
				setData(dat);
			})
			.catch(setError)
			.finally(() => setIsloading(false));
	};

	return {
		call,
		data,
		error,
		isLoading,
	};
};

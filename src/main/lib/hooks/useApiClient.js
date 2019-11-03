import { useState } from 'react';
import createClient from '~api';

export default (config) => {
	const instance = createClient(config || {});
	const [client, setClient] = useState(instance);

	const refreshClient = () => {
		const newInstance = createClient(config || {});
		setClient(newInstance);
	};

	return [client, refreshClient];
};

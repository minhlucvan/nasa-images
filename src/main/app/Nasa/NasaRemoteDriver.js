import { useState } from 'react';

export const useRemoteDriver = ({ apiClient, withLoading }) => {
	const a = 1;
	return {
		search: withLoading(apiClient.nasa.search),
	};
};

export default useRemoteDriver;

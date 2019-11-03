import { usefetchAsset } from '~redux/nasa/assets';

export const useRemoteDriver = ({ apiClient, withLoading, dispatch }) => {
	const fetchAsset = usefetchAsset(dispatch, apiClient.nasa.search);
	const search = withLoading(fetchAsset);
	return {
		search,
	};
};

export default useRemoteDriver;

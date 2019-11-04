import { usefetchAsset, useSelectAsset } from '~redux/nasa/assets';

export const useRemoteDriver = ({ apiClient, withLoading, dispatch }) => {
	const fetchAsset = usefetchAsset(dispatch, apiClient.nasa.search);
	const search = withLoading(fetchAsset);
	const selectAsset = useSelectAsset(dispatch);
	return {
		isRemote: true,
		search,
		selectAsset,
	};
};

export default useRemoteDriver;

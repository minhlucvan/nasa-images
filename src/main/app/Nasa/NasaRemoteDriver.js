import { usefetchAsset } from '~redux/nasa/assets';

export const useRemoteDriver = ({ apiClient, storageClient, withLoading, dispatch }) => {
	const api = (...args) => apiClient.nasa.search(...args)
		.then((res) => {
			res.data = res.data.map((it) => {
				const old = storageClient.nasa.get(it.id);
				if (old) {
					it.isSaved = true;
					it.isFavorite = old.isFavorite;
				}
				return it;
			});
			return res;
		});

	const fetchAsset = usefetchAsset(dispatch, api);
	const search = withLoading(fetchAsset);

	return {
		isRemote: true,
		search,
	};
};

export default useRemoteDriver;

import { usefetchAsset, useSaveAsset, useRemoveAsset, likeAsset } from '~redux/nasa/assets';

export const useLocalDriver = ({ dispatch, storageClient }) => {
	const fetchAsset = usefetchAsset(dispatch, storageClient.nasa.getAssets);
	const search = fetchAsset;
	const saveAsset = useSaveAsset(dispatch, storageClient.nasa.saveAsset);
	const removeAsset = useRemoveAsset(dispatch, storageClient.nasa.removeAsset);

	return {
		isLocal: true,
		search,
		saveAsset,
		removeAsset,
		likeAsset: (item) => dispatch(likeAsset(item.id)),
	};
};

export default useLocalDriver;

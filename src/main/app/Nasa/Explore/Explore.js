import React, { useContext, useCallback, Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MediaList } from '~components/media';
import { useAppContext } from '../../../context/AppContext';
import { useNasaContext } from '../NasaContext';

export const Explore = () => {
	const appContext = useAppContext();
	const { saveAsset, removeAsset, likeAsset } = useNasaContext();
	const assets = useSelector(appContext.selectors.nasa.assets.items);

	const handleAddAsset = (item) => {
		saveAsset(item);
	};

	const handleLikeAsset = (item) => {
		likeAsset(item);
	};

	const handleRemoveAsset = (item) => {
		removeAsset(item);
	};

	return (
		<div>
			<MediaList
				onAddItem={handleAddAsset}
				onLikeItem={handleLikeAsset}
				onRemoveItem={handleRemoveAsset}
				items={assets} />
		</div>
	);
};

export default Explore;

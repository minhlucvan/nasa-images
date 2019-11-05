import React, { useContext, useCallback, Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { MediaList } from '~components/media';
import { useAppContext } from '../../../context/AppContext';
import * as fromAssets from '~redux/nasa/assets';

export const Collection = ({ assets }) => {
	const dispatch = useDispatch();
	const { isHeart } = useAppContext();
	const { actions: { saveAsset, likeAsset, removeAsset, dislikeAsset } } = fromAssets;

	const handleAddAsset = (item) => {
		dispatch(saveAsset(item));
	};

	const handleLikeAsset = (item) => {
		dispatch(likeAsset(item));
	};

	const handleRemoveAsset = (item) => {
		dispatch(removeAsset(item));
	};

	const handDislikeAsset = (item) => {
		dispatch(dislikeAsset(item));
	};

	return (
		<div>
			<MediaList
				onAddItem={handleAddAsset}
				onLikeItem={handleLikeAsset}
				onRemoveItem={handleRemoveAsset}
				onDislikeItem={handDislikeAsset}
				items={assets} />
		</div>
	);
};

export default Collection;

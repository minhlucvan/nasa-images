import React, { useContext, useCallback, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MediaList } from '~components/media';
import * as fromAssets from '~redux/nasa/assets';

import styles from './Explore.module';

export const Explore = ({ assets }) => {
	const dispatch = useDispatch();
	const {
		actions: {
			saveAsset,
			likeAsset,
			removeAsset,
			dislikeAsset,
			setAssetStatus,
			loadMoreAssets,
		},
	} = fromAssets;

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
	const handleItemLoaded = (item) => {
		dispatch(setAssetStatus(item));
	};

	const handleLoadMore = () => {
		dispatch(loadMoreAssets());
	};

	return (
		<div className={styles.Explore}>
			<MediaList
				onItemLoaded={handleItemLoaded}
				onAddItem={handleAddAsset}
				onLikeItem={handleLikeAsset}
				onRemoveItem={handleRemoveAsset}
				onDislikeItem={handDislikeAsset}
				items={assets}
			/>
			<div className={styles.pageFooter} >
				<button className={styles.LoadMore} onClick={handleLoadMore}>load more</button>
			</div>
		</div>
	);
};

export default Explore;

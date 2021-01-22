import React, { useState, useEffect } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';

import MediaItem from '../MediaItem/MediaItem';

import styles from './MediaList.module';

export const MediaList = ({
	items,
	loading,
	onItemLoaded,
	onAddItem,
	onRemoveItem,
	onLikeItem,
	onDislikeItem,
}) => {

	const handleItemLoaded = (item) => {
		onItemLoaded(item);
	};

	return (
		<ul
			className={`${styles.MediaList} ${
				loading ? styles.loading : styles.loadded
			}`}
		>
			{(items || []).map((item) => (
				<li key={item.href} className={styles.MediaListItem}>
					<MediaItem
						item={item}
						onLoad={handleItemLoaded}
						onAdd={onAddItem}
						onLike={onLikeItem}
						onDislike={onDislikeItem}
						onRemove={onRemoveItem}
					/>
				</li>
			))}
		</ul>
	);
};

export default MediaList;

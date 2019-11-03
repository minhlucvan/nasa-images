import React, { useState, useEffect } from 'react';
import MediaItem from '../MediaItem/MediaItem';

import styles from './MediaList.module';

export const MediaList = ({ items }) => {
	const [loadded, setLoaded] = useState(false);
	const [loaddedItem, setLoaddedItem] = useState(0);

	const handleItemLoaded = () => {
		setLoaddedItem(loaddedItem + 1);
	};

	const checkLoaded = () => {
		setLoaded(loaddedItem === items.length);
	};

	useEffect(() => {
		checkLoaded();
	}, [loaddedItem]);

	useEffect(() => {
		setLoaddedItem(0);
		checkLoaded();
	}, [items]);

	return (
		<div className={`${styles.MediaList} ${loadded ? styles.loadded : styles.loading}`}>
			{(items || []).map(
				(item) => (
					<div key={item.href} className={styles.MediaListItem}>
						<MediaItem {...item} onLoad={handleItemLoaded}/>
					</div>
				),
			)}
		</div>
	);
};

export default MediaList;

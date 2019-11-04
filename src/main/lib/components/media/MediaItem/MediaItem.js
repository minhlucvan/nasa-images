import React, { useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import Img from 'react-image';

import styles from './MediaItem.module';

export const MediaItem = ({ id, caption, thumbnail, onLoad }) => {
	const [imgLoaded, setImgLoaded] = useState(false);
	const { path } = useRouteMatch();

	const handleImageLoaded = () => {
		setImgLoaded(true);
		onLoad();
	};

	return (
		<article className={`${styles.MediaItem} ${imgLoaded ? styles.loaded : styles.loading}`}>
			<Link className={styles.ItemWraper}
				title={caption}
				to={`${path}/asset/${id}`}>
				<div className={styles.ItemImageWraper}>
					<Img src={thumbnail}
						alt={caption}
						title={caption}
						className={`${styles.ItemImage}`}
						onLoad={handleImageLoaded} />
				</div>
				<p className={styles.ItemCaption}>{caption}</p>
			</Link>
		</article>
	);
};

export default MediaItem;

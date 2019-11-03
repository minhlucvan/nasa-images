import React, { useState } from 'react';
import Img from 'react-image';

import styles from './MediaItem.module';

export const MediaItem = ({ caption, thumbnail, onLoad }) => {
	const [imgLoaded, setImgLoaded] = useState(false);

	const handleImageLoaded = () => {
		setImgLoaded(true);
		onLoad();
	};

	return (
		<article className={`${styles.MediaItem} ${imgLoaded ? styles.loaded : styles.loading}`}>
			<a className={styles.ItemWraper}
				title={caption}
				href="/asset/PIA21931">
				<div className={styles.ItemImageWraper}>
					<Img src={thumbnail}
						alt={caption}
						title={caption}
						className={`${styles.ItemImage}`}
						onLoad={handleImageLoaded} />
				</div>
				<p className={styles.ItemCaption}>{caption}</p>
			</a>
		</article>
	);
};

export default MediaItem;

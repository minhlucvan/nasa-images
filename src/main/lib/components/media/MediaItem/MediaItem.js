import React, { useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import Img from 'react-image';
import { TiHeartFullOutline, TiBookmark } from 'react-icons/ti';
import styles from './MediaItem.module';

export const MediaItem = ({ item, onLoad, onAdd, onLike, onRemove, onDislike }) => {
	const { id, caption, thumbnail, isSaved, isFavorited } = item;
	const [imgLoaded, setImgLoaded] = useState(false);
	const { path } = useRouteMatch();

	const handleImageLoaded = () => {
		setImgLoaded(true);
		onLoad();
	};

	const handleAdd = (e) => {
		e.preventDefault();
		onAdd(item);
	};

	const handleLike = (e) => {
		e.preventDefault();
		onLike(item);
	};

	const handleDislike = (e) => {
		e.preventDefault();
		onDislike(item);
	};

	const handleRemove = (e) => {
		e.preventDefault();
		onRemove(item);
	};

	return (
		<article className={`${styles.MediaItem} ${imgLoaded ? styles.loaded : styles.loading}`}>
			<Link className={styles.ItemWraper}
				title={caption}
				to={`${path}/asset/${id}`}>
				<div className={styles.ItemMain}>
					<div className={styles.ItemContent}>
						<div className={styles.ItemImageWraper}>
							<Img src={thumbnail}
								alt={caption}
								title={caption}
								className={`${styles.ItemImage}`}
								onLoad={handleImageLoaded} />
						</div>
						<p className={styles.ItemCaption}>{caption}</p>
					</div>
					<div className={styles.ItemOverlay}>
						<TiHeartFullOutline className={`${styles.Icon} ${isFavorited ? styles.light : ''}`} onClick={isFavorited ? handleDislike : handleLike} />
						<TiBookmark className={`${styles.Icon} ${isSaved ? styles.light : ''}`} onClick={isSaved ? handleRemove : handleAdd} />
					</div>
				</div>
			</Link>
		</article>
	);
};

export default MediaItem;

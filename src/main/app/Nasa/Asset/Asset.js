import React, { Fragment } from 'react';
import Img from 'react-image';

import styles from './Asset.module';

export const Asset = ({ asset }) => {
	const { thumbnail, caption, description, displayDate, info } = asset;
	return (
		<div className={styles.Asset}>
			<div className={styles.Wrapper}>
				<div className={styles.Title}>
					<h1>{caption}</h1>
				</div>
				<div class={styles.Content}>
					<div className={styles.Media}>
						<Img src={thumbnail}
							alt={caption}
							title={caption}
							className={`${styles.Image}`} />
					</div>
					<div className={styles.Info}>
						<p>{description}</p>
						<div className={styles.Meta}>
							<div className={styles.MetaInfo}>
								<div className={styles.MetaAttribute}>
									<label></label><span>{displayDate}</span>
								</div>
								<div className={styles.MetaAttribute}>
									<label></label><span>{info.photographer}</span>
								</div>
								<div className={styles.MetaAttribute}>
									<label></label><span>{info.location}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Asset;

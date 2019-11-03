import React from 'react';

import styles from './Logo.module';

export const Logo = ({ src }) => (
	<div className={styles.Logo}>
		<img className={styles.Image} src={src} />
	</div>
);

export default Logo;

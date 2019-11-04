import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Logo.module';

export const Logo = ({ src }) => (
	<div className={styles.Logo}>
		<Link to="/">
			<img className={styles.Image} src={src} />
		</Link>
	</div>
);

export default Logo;

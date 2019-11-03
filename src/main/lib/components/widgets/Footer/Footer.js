import React from 'react';

import styles from './Footer.module';

export const Footer = ({ children }) => (
	<div className={styles.Footer}>
		<div className={styles.FooterWraper}>
			{children}
		</div>
	</div>
);

export default Footer;

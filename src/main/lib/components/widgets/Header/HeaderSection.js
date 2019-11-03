import React from 'react';

import styles from './Header.module';

export const HeaderSection = ({ children }) => (
	<div className={styles.HeaderSection}>
		{children}
	</div>
);

export default HeaderSection;

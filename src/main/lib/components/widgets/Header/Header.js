import React from 'react';

import styles from './Header.module';

export const Header = ({ children }) => (
	<header className={styles.Header}>
		<div className={styles.HeaderWraper}>
			{children}
		</div>
	</header>
);

export default Header;

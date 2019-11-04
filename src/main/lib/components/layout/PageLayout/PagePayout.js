import React from 'react';

import styles from './PageLayout.module';

export const PageLayout = ({ children }) => (
	<div className={styles.PageLayout}>
		{children}
	</div>
);

export default PageLayout;

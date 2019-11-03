import React from 'react';

import styles from './PageLayout.module';

export const PageLayout = ({ children }) => (
	<section className={styles.PageLayout}>
		{children}
	</section>
);

export default PageLayout;

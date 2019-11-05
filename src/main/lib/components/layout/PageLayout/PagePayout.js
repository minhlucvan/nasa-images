import React from 'react';

import styles from './PageLayout.module';

export const PageLayout = ({ children, blank, loader, isEmpty, isLoading }) => (
	<div className={styles.PageLayout}>
		{!isEmpty && children}
		{isEmpty && <div className={styles.Empty}>
			{!isLoading && blank}
			{isLoading && loader}
		</div>}
	</div>
);

export default PageLayout;

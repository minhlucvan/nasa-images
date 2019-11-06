import React from 'react';

import styles from './PageLayout.module';

export const PageContent = ({ children, visible }) => (visible ? (
	<div className={styles.PageContent}>
		{children}
	</div>
) : (<div></div>));

export default PageContent;

import React from 'react';

import styles from './StackedLayout.module';

export const StackedLayout = ({ children }) => (
	<div className={styles.StackedLayout}>
		{children}
	</div>
);

export default StackedLayout;

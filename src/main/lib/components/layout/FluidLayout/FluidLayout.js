import React from 'react';

import styles from './FluidLayout.module';

export const FluidLayout = ({ children }) => (
	<div className={styles.FluidLayout}>
		{children}
	</div>
);

export default FluidLayout;

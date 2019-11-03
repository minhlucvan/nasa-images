import React from 'react';

import styles from './StackedLayout.module';

export const StackedSection = ({ children }) => (
	<section className={styles.StackedSection}>
		{children}
	</section>
);

export default StackedSection;

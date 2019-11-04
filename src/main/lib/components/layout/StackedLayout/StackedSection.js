import React from 'react';

import styles from './StackedLayout.module';

export const StackedSection = ({ children, grow }) => (
	<section className={`${styles.StackedSection} ${grow ? styles.grow : ''}`}>
		{children}
	</section>
);

export default StackedSection;

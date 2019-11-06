import React from 'react';

import styles from './ErrorLayout.module';

export const ErrorLayout = ({ children, icon, message }) => {
	const styledIcon = React.cloneElement(icon, { className: styles.Icon });
	return (
		<div className={styles.Error}>
			{styledIcon}
			<h1>{message}</h1>
			{children}
		</div>
	);
};

export default ErrorLayout;

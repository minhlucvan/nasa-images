import React from 'react';
import { Icon } from 'react-icons-kit';
import { rocket } from 'react-icons-kit/fa/rocket';
import { globe } from 'react-icons-kit/fa/globe';
import styles from './Loader.module';

export const Loader = () => (
	<div className={styles.RocketLoader}>
		<div className={styles.Loader}>
			<div className={styles.Globe}>
				<Icon icon={globe} className={styles.GlobeIcon} />
			</div>
			<div className={styles.Rocket} >
				<Icon icon={rocket} className={styles.RoketIcon} />
			</div>
		</div>
	</div>
);

export default Loader;

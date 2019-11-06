import React from 'react';
import { FaRocket, FaGlobeAsia } from 'react-icons/fa';
import styles from './Loader.module';

export const Loader = () => (
	<div className={styles.RocketLoader}>
		<div className={styles.Loader}>
			<div className={styles.Globe}>
				<FaGlobeAsia className={styles.GlobeIcon} />
			</div>
			<div className={styles.Rocket} >
				<FaRocket className={styles.RoketIcon} />
			</div>
		</div>
	</div>
);

export default Loader;

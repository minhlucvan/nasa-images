import React, { useContext, useCallback, Fragment } from 'react';
import { FaCircleNotch, FaRocket } from 'react-icons/fa';
import isEmpty from 'lodash/isEmpty';
import { MdSearch } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { PageLayout } from '~components/layout/PageLayout';
import Explore from './Explore';

import { useAppContext } from '../../../context/AppContext';

import styles from './Explore.module';

export const ExploreContainer = () => {
	const { selectors } = useAppContext();
	const assets = useSelector(selectors.nasa.assets.items);
	const isLoading = useSelector(selectors.nasa.assets.isFetching);
	const searchTerm = useSelector(selectors.nasa.assets.searchTerm);

	return (
		<PageLayout isEmpty={isEmpty(assets)}
			isLoading={isLoading}
			loader={<FaCircleNotch className={styles.Loader}/>}
			blank={
				!searchTerm ? <div className={styles.Empty}>
					<FaRocket className={styles.Icon}/>
					<h1>Explore NASA Images</h1>
				</div> : <div className={styles.Empty}>
					<MdSearch className={styles.Icon}/>
					<h1>No Asset found for "{searchTerm}"</h1>
				</div>
			}>
			<Explore assets={assets}/>
		</PageLayout>
	);
};

export default ExploreContainer;

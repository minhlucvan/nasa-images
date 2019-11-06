import React, { useContext, useCallback, Fragment } from 'react';
import { FaCircleNotch, FaRocket } from 'react-icons/fa';
import isEmpty from 'lodash/isEmpty';
import { MdSearch } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { PageLayout, PageContent } from '~components/layout/PageLayout';
import { ErrorLayout } from '~components/layout/ErrorLayout';
import Explore from './Explore';

import { useAppContext } from '../../../context/AppContext';

import styles from './Explore.module';
import { Loader } from '~components/loader';

export const ExploreContainer = () => {
	const { selectors } = useAppContext();
	const assets = useSelector(selectors.nasa.assets.items);
	const isLoading = useSelector(selectors.nasa.assets.isFetching);
	const searchTerm = useSelector(selectors.nasa.assets.searchTerm);

	return (
		<PageLayout>
			<PageContent visible={!isEmpty(assets)}>
				<Explore assets={assets}/>
			</PageContent>
			<PageContent visible={isEmpty(assets) && isLoading}>
				<Loader />
			</PageContent>
			<PageContent visible={isEmpty(assets) && !searchTerm}>
				<ErrorLayout
					icon={<FaRocket className={styles.Icon}/>}
					message="Explore NASA Images"/>
			</PageContent>
			<PageContent visible={isEmpty(assets) && searchTerm}>
				<ErrorLayout
					icon={<MdSearch className={styles.Icon}/>}
					message={`No Asset found for "${searchTerm}"`}/>
			</PageContent>
		</PageLayout>
	);
};

export default ExploreContainer;

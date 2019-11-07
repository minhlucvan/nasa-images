import React, { useContext, useCallback, Fragment } from 'react';
import isEmpty from 'lodash/isEmpty';
import { Icon } from 'react-icons-kit';
// eslint-disable-next-line camelcase
import { ic_collections } from 'react-icons-kit/md/ic_collections';
// eslint-disable-next-line camelcase
import { ic_search } from 'react-icons-kit/md/ic_search';
import { useSelector } from 'react-redux';

import { PageLayout, PageContent } from '~components/layout/PageLayout';
import { useAppContext } from '../../../context/AppContext';

import Collection from './Collection';

import styles from './Collection.module';
import { ErrorLayout } from '~components/layout/ErrorLayout';

export const CollectionContainer = ({ children }) => {
	const { selectors } = useAppContext();
	const searchTerm = useSelector(selectors.nasa.assets.searchTerm);
	const assets = useSelector(selectors.nasa.assets.items);
	return (
		<PageLayout>
			<PageContent isEmpty={!isEmpty(assets)}>
				<Collection assets={assets}/>
			</PageContent>
			<PageContent visible={isEmpty(assets) && !searchTerm}>
				<ErrorLayout
					// eslint-disable-next-line camelcase
					icon={<Icon icon={ic_collections} size={244} />}
					message="Your collection is empty"/>
			</PageContent>
			<PageContent visible={isEmpty(assets) && searchTerm}>
				<ErrorLayout
					// eslint-disable-next-line camelcase
					icon={<Icon icon={ic_search} size={244} className={styles.Icon}/>}
					message={`No Asset found for "${searchTerm}"`}/>
			</PageContent>
		</PageLayout>
	);
};

export default CollectionContainer;

import React, { useContext, useCallback, Fragment } from 'react';
import isEmpty from 'lodash/isEmpty';
import { MdCollections, MdSearch } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { PageLayout } from '~components/layout/PageLayout';
import { useAppContext } from '../../../context/AppContext';

import Collection from './Collection';

import styles from './Collection.module';

export const CollectionContainer = ({ children }) => {
	const { selectors } = useAppContext();
	const searchTerm = useSelector(selectors.nasa.assets.searchTerm);
	const assets = useSelector(selectors.nasa.assets.items);
	return (
		<PageLayout isEmpty={isEmpty(assets)}
			blank={
				!searchTerm ? <div className={styles.Empty}>
					<MdCollections className={styles.Icon}/>
					<h1>Adding asset to collection</h1>
				</div> : <div className={styles.Empty}>
					<MdSearch className={styles.Icon}/>
					<h1>No Asset found for "{searchTerm}"</h1>
				</div>
			}>
			<Collection assets={assets}/>
		</PageLayout>
	);
};

export default CollectionContainer;

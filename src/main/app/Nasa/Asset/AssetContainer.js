import React, { useContext, useCallback, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { PageLayout } from '~components/layout/PageLayout';
import { useAppContext } from '../../../context/AppContext';

import Asset from './Asset';

export const AssetContainer = () => {
	const appContext = useAppContext();
	const asset = useSelector(appContext.selectors.nasa.assets.selected);
	return (
		<PageLayout>
			{asset && <Asset asset={asset}/>}
		</PageLayout>
	);
};

export default AssetContainer;

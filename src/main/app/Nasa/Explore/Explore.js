import React, { useContext, useCallback, Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MediaList } from '~components/media';
import { useAppContext } from '../../../context/AppContext';

export const Explore = () => {
	const appContext = useAppContext();
	const assets = useSelector(appContext.selectors.nasa.assets.items);

	return (
		<div>
			<MediaList items={assets}></MediaList>
		</div>
	);
};

export default Explore;

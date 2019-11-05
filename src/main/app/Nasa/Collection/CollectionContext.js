import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { useAppContext } from '../../../context/AppContext';
import * as fromAssets from '~redux/nasa/assets';

const Context = React.createContext();

export const useCollectionContext = () => useContext(Context);

export const CollectionContext = ({ children }) => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const { updateSearchTerm, isHeart } = useAppContext();

	dispatch(fromAssets.actions.clearTempAssets());
	dispatch(fromAssets.actions.setRemote(false));
	dispatch(fromAssets.actions.updateSearchTerm(''));

	useEffect(() => {
		// updateSearchTerm('');
	}, [pathname]);

	useEffect(() => {
		dispatch(fromAssets.actions.setIsFavorited(isHeart));
	}, [isHeart]);

	const context = {};
	return (
		<Context.Provider value={context} >
			{children}
		</Context.Provider>
	);
};

export default CollectionContext;

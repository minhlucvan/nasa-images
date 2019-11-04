import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as fromAssets from '~redux/nasa/assets';

const Context = React.createContext();

export const useCollectionContext = () => useContext(Context);

export const CollectionContext = ({ children }) => {
	const dispatch = useDispatch();

	dispatch(fromAssets.actions.clearTempAssets());
	dispatch(fromAssets.actions.setRemote(true));
	dispatch(fromAssets.actions.updateSearchTerm(''));

	useEffect(() => () => dispatch(fromAssets.actions.updateSearchTerm('')));

	const context = {};
	return (
		<Context.Provider value={context} >
			{children}
		</Context.Provider>
	);
};

export default CollectionContext;

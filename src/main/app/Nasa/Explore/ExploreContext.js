import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as fromAssets from '~redux/nasa/assets';

const Context = React.createContext();

export const useExploreContext = () => useContext(Context);

export const ExploreContext = ({ children }) => {
	const dispatch = useDispatch();

	dispatch(fromAssets.actions.setRemote(true));
	dispatch(fromAssets.actions.updateSearchTerm(''));

	const context = {};
	return (
		<Context.Provider value={context} >
			{children}
		</Context.Provider>
	);
};

export default ExploreContext;

import React, { useContext, useEffect } from 'react';
import { useNasaContext } from '../NasaContext';

const Context = React.createContext();

export const useExploreContext = () => useContext(Context);

export const ExploreContext = ({ children }) => {
	const context = {};
	return (
		<Context.Provider value={context} >
			{children}
		</Context.Provider>
	);
};

export default ExploreContext;

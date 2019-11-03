import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useLocalDriver from './NasaLocalDriver';
import useRemoteDriver from './NasaRemoteDriver';
import { useAppContext } from '../../context/AppContext';


const Context = React.createContext();

export const useNasaContext = () => useContext(Context);

const NasaContext = ({ children }) => {
	const { pathname } = useLocation();
	const appContext = useAppContext();
	const [driver, setDriver] = useState(pathname);

	const handlerSearch = (term) => driver && driver.search(term);
	const context = {
		driver,
		handlerSearch,
	};

	const refresherDriver = (path) => {
		if (path && path.includes('explore')) {
			setDriver(useRemoteDriver(appContext));
		}
		if (path && path.includes('collection')) {
			setDriver(useLocalDriver(appContext));
		}
	};

	useEffect(() => {
		refresherDriver(pathname);
		return () => { };
	}, [pathname]);

	return (
		<Context.Provider value={context}>
			{children}
		</Context.Provider>
	);
};

export default NasaContext;

import React, { useContext, useEffect, useState } from 'react';
import isEqual from 'lodash/isEqual';
import { useSelector } from 'react-redux';
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

	const refresherDriver = (path) => {
		if (path && path.includes('explore')) {
			setDriver(useRemoteDriver(appContext));
		}
		if (path && path.includes('collection')) {
			setDriver(useLocalDriver(appContext));
		}
	};

	useEffect(() => {
		handlerSearch(appContext.searchTerm);
	}, [appContext.searchTerm]);

	useEffect(() => {
		refresherDriver(pathname);
		return () => { };
	}, [pathname]);

	const context = {
		driver,
		handlerSearch,
	};

	return (
		<Context.Provider value={context}>
			{children}
		</Context.Provider>
	);
};

export default NasaContext;

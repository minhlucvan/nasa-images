import React, { useContext, useEffect, useState } from 'react';

import useLocalDriver from './NasaLocalDriver';
import useRemoteDriver from './NasaRemoteDriver';
import { useAppContext } from '../../context/AppContext';

const Context = React.createContext();

export const useNasaContext = () => useContext(Context);

const NasaContext = ({ children }) => {
	const appContext = useAppContext();
	const [driver, setDriver] = useState(null);

	const handlerSearch = (params) => driver && driver.search && driver.search(params);

	const handleSelectAsset = (assetId) => driver && driver.selectAsset && driver.selectAsset(assetId);

	const registerRemote = () => setDriver(useRemoteDriver(appContext));

	const registerLocal = () => setDriver(useLocalDriver(appContext));

	useEffect(() => {
		if (appContext.searchTerm) {
			handlerSearch({ q: appContext.searchTerm });
		}
	}, [appContext.searchTerm]);

	const context = {
		driver,
		handlerSearch,
		handleSelectAsset,
		registerRemote,
		registerLocal,
	};

	return (
		<Context.Provider value={context}>
			{children}
		</Context.Provider>
	);
};

export default NasaContext;

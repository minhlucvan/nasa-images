import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import createLocalDriver from './NasaLocalDriver';
import createRemoteDriver from './NasaRemoteDriver';

const Context = React.createContext();

export const useNasaContext = () => useContext(Context);

const NasaContext = ({ children }) => {
	const { path } = useRouteMatch();
	const [driver, setDriver] = useState();

	const useLocalDriver = () => {
		const driverInstance = createLocalDriver();
		setDriver(driverInstance);
	};

	const useRemoteDriver = () => {
		const driverInstance = createRemoteDriver();
		setDriver(driverInstance);
	};

	useEffect(() => {
		if (path && path.includes('explore')) {
			useRemoteDriver();
		}
		if (path && path.includes('collection')) {
			useLocalDriver();
		}
		return () => { };
	}, [path]);

	const context = {
		driver,
	};

	return (
		<Context.Provider value={context}>
			{children}
		</Context.Provider>
	);
};

export default NasaContext;

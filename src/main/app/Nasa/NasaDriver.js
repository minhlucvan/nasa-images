import React, { useState, useEffect } from 'react';
import useRemoteDriver from './NasaRemoteDriver';
import useLocalDriver from './NasaLocalDriver';

export const useDriver = (pathname) => {
	const [driver, setDriver] = useState(pathname);

	const refresherDriver = (path) => {
		if (path && path.includes('explore')) {
			setDriver(useRemoteDriver());
		}
		if (path && path.includes('collection')) {
			setDriver(useLocalDriver());
		}
	};

	useEffect(() => {
		refresherDriver(pathname);
		return () => { };
	}, [pathname]);

	return [driver, refresherDriver];
};


export default useDriver;

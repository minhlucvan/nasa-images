import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import useRemoteDriver from './NasaRemoteDriver';
import useLocalDriver from './NasaLocalDriver';

export const useDriver = () => {
	const { path } = useRouteMatch();
	const [driver, setDriver] = useState();

	useEffect(() => {
		if (path && path.includes('explore')) {
			setDriver(useRemoteDriver());
		}
		if (path && path.includes('collection')) {
			setDriver(useLocalDriver());
		}
		return () => { };
	}, [path]);

	return [driver];
};


export default useDriver;

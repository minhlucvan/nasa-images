import React, { useContext, useCallback, Fragment, useEffect } from 'react';
import { useNasaContext } from '../NasaContext';

export const Explore = () => {
	const { handlerSearch } = useNasaContext();

	useEffect(() => {
		handlerSearch('abc');
	}, [handlerSearch]);

	return (
		<Fragment>
			Explore
		</Fragment>
	);
};

export default Explore;

import React, { useContext, useCallback, Fragment } from 'react';
import { useNasaContext } from '../NasaContext';

export const Explore = ({ children }) => {
	const context = useNasaContext();
	context.handlerSearch('abc');
	return (
		<Fragment>
			Explore
		</Fragment>
	);
};

export default Explore;

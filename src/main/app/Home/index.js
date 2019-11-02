import React from 'react';

import HomeContainer from './HomeContainer';
import HomeContext from './HomeContext';

export default () => (
	<HomeContext>
		<HomeContainer />
	</HomeContext>
);

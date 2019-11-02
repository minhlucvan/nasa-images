import React from 'react';

import CollectionContainer from './CollectionContainer';
import CollectionContext from './CollectionContext';

export default () => (
	<CollectionContext>
		<CollectionContainer />
	</CollectionContext>
);

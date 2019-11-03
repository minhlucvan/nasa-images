import React, { useContext, useCallback, Fragment } from 'react';
import Explore from './Explore';
import { PageLayout } from '~components/layout/PageLayout';

export const ExploreContainer = () => (
	<PageLayout>
		<Explore />
	</PageLayout>
);

export default ExploreContainer;

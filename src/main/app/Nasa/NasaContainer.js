import React, { Fragment } from 'react';
import { Switch, Redirect, useRouteMatch, Route } from 'react-router-dom';

import { useNasaContext } from './NasaContext';

import AssetPage from './Asset';
import CollectionPage from './Collection';
import ExplorePage from './Explore';

export const NasaContainer = () => {
	const context = useNasaContext();

	return (
		<Switch>
			<Route exact path='/explore' component={(ExplorePage)} />
			<Route exact path='/collection' component={CollectionPage} />
			<Route exact path='/*/asset/:assetId' component={AssetPage} />
			<Redirect to='/explore' />
		</Switch>
	);
};

export default NasaContainer;

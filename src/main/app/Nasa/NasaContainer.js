import React, { Fragment } from 'react';
import { Switch, Redirect, useRouteMatch, Route } from 'react-router-dom';

import { useNasaContext } from './NasaContext';

import AssetPage from './Asset';
import CollectionPage from './Collection';
import ExplorePage from './Explore';

export const NasaContainer = () => {
	const context = useNasaContext();
	const { path } = useRouteMatch();

	return (
		<Switch>
			<Redirect exact from={`${path}/`} to={`${path}/explore`} />
			<Route exact path={`${path}/explore`} component={ExplorePage} />
			<Route exact path={`${path}/collection`} component={CollectionPage}></Route>
			<Route exact path={`${path}/*/asset/:assetId`} component={AssetPage}></Route>
			<Redirect exact to={`${path}/`} />
		</Switch>
	);
};

export default NasaContainer;

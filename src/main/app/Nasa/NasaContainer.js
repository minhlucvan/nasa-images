import React, { useContext, useCallback, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import config from '~config';

import { useNasaContext } from './NasaContext';

import ExploreContainer from './Explore/ExploreContainer';
import CollectionContainer from './Collection/CollectionContainer';
import AssetContainer from './Asset/AssetContainer';

export const NasaContainer = ({ children }) => {
	const context = useNasaContext();
	return (
		<Fragment>
			abc---------------
			<Switch context="router">
				<Redirect
					from='/'
					to='/explore' />
				<Route exact
					path='/explore'
					conponent={ExploreContainer}>
					<Route
						path='/asset'
						component={AssetContainer}>
					</Route>
				</Route>
				<Route exact
					path='/collection'
					component={CollectionContainer}>
					<Route
						path='/asset'
						component={AssetContainer}>
					</Route>
				</Route>
				<Redirect to='/' />
			</Switch>
		</Fragment>
	);
};

export default NasaContainer;

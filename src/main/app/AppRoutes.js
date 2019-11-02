import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AboutPage from './About';
import NasaPage from './Nasa';
import HomePage from './Home';

const AppRoutes = () => (
	<Switch>
		<Route exact path='/about' component={AboutPage}></Route>
		<Route exact path="/home" component={HomePage} />
		<Route path='/' component={NasaPage} />
		<Redirect to='/' />
	</Switch>
);

export default AppRoutes;

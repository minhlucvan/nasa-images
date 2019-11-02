import React from 'react';
import { Route, Switch } from 'react-router-dom';
import config from '~config';

import AjaxLoading from '~components/AjaxLoading';
import ErrorBoundary from '~components/ErrorBoundary';
import ToastContainer from '~components/toast/ToastContainer';

import AboutPage from './About';
import NasaPage from './Nasa;';
import HomePage from './Home';

const AppRoutes = () => (
	<Switch>
		<Route exact path='/about' component={AboutPage}></Route>
		<Route exact path="/home" component={HomePage} />
		<Route exact path='/' component={NasaPage} />
	</Switch>
);

export default AppRoutes;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import config from '~config';

import AjaxLoading from '~components/AjaxLoading';
import ErrorBoundary from '~components/ErrorBoundary';

import Home from './Home/Home';

const { ROUTES } = config.MAIN.APP;

const App = () => (
	<ErrorBoundary>
		<Switch context="router">
			<Route exact
				path={ROUTES.home.url}
				component={Home} />
		</Switch>
		<AjaxLoading />
		<ToastContainer className="p-0"
			draggable={false}
			newestOnTop={true}
			transition={Slide}
			hideProgressBar={true} />
	</ErrorBoundary>
);

export default App;

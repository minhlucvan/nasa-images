import React from 'react';
import { Route, Switch } from 'react-router-dom';
import config from '~config';

import AjaxLoading from '~components/AjaxLoading';
import ErrorBoundary from '~components/ErrorBoundary';
import ToastContainer from '~components/toast/ToastContainer';

import AppRoutes from './AppRoutes';

const App = () => {
	const a = 1;
	return (
		<ErrorBoundary>
			<AppRoutes />
			<AjaxLoading />
			<ToastContainer />
		</ErrorBoundary>
	);
};

export default App;

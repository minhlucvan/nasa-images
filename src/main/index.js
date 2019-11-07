import 'raf/polyfill';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import config from '~config';
// import registerServiceWorker from '~helpers/registerServiceWorker';
import AppContext from './context/AppContext';
import createModule from './redux';

import './scss/global';

import App from './app/App';
import packageJson from '../../package.json';

console.log(`%c${packageJson.author.name} version: ${packageJson.version}`, 'background-color: #343E48; color: #90BC47; padding: 5px 10px');

const redux = createModule();

const renderApp = () => (
	<AppContext redux={redux} config={config}>
		<App />
	</AppContext>
);


ReactDOM.render(
	renderApp(),
	document.getElementById('app'),
);

/* Add a service worker for Progressive Web App purposes */
if (process.env.NODE_ENV === 'production') {
	OfflinePluginRuntime.install();
// registerServiceWorker();
}

import 'raf/polyfill';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '~store/configureStore';
import registerServiceWorker from '~helpers/registerServiceWorker';

import './scss/global';

import App from './app/App';
import packageJson from '../../package.json';

console.log(`%c${packageJson.author.name} version: ${packageJson.version}`, 'background-color: #343E48; color: #90BC47; padding: 5px 10px');

const store = configureStore();

const renderApp = () => (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);


ReactDOM.render(
	renderApp(),
	document.getElementById('app'),
);

/* Add a service worker for Progressive Web App purposes */
registerServiceWorker();

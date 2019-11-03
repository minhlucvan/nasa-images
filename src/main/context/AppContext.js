import React, { useContext, useState, useEffect } from 'react';
import useApiClient from '~hooks/useApiClient';
import StoreContext from './StoreContext';
import I18nContext from './I18nContext';
import ThemeContext from './ThemeContext';
import RouterContext from './RouterContext';
import * as fromConfig from '../redux/config';

const Context = React.createContext();

export const useAppContext = () => useContext(Context);

export const AppContext = ({ store: storeInstance, config: appConfig, children }) => {
	const [store] = useState(storeInstance);
	const [apiClient, refreshClient] = useApiClient(appConfig || {});
	const [config, setConfig] = useState(null);

	store.subscribe(() => {
		setConfig(store.getState(fromConfig.selectors.root));
	});

	useEffect(() => {
		store.dispatch(fromConfig.actions.loadConfig(appConfig));
		refreshClient(appConfig || {});
	}, [store, appConfig]);

	const state = {
		store,
		config,
		apiClient,
	};

	return (
		<Context.Provider value={state}>
			<StoreContext store={store}>
				<I18nContext>
					<ThemeContext>
						<RouterContext>
							{children}
						</RouterContext>
					</ThemeContext>
				</I18nContext>
			</StoreContext>
		</Context.Provider>
	);
};

export default AppContext;

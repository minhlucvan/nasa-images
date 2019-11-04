import React, { useContext, useState, useEffect } from 'react';
import { useStorageClient } from '../lib/storage';
import StoreContext from './StoreContext';
import I18nContext from './I18nContext';
import ThemeContext from './ThemeContext';
import RouterContext from './RouterContext';
import * as fromConfig from '../redux/config';
import * as fromLoading from '../redux/loading';

const Context = React.createContext();

export const useAppContext = () => useContext(Context);

export const AppContext = ({ redux, config, children }) => {
	const [store] = useState(redux.store);
	const [searchTerm, updateSearchTerm] = useState('');
	const [selectors] = useState(redux.selectors);
	const [withLoading] = fromLoading.useLoading({ dispatch: store.dispatch });
	const storageClient = useStorageClient();

	useEffect(() => {
		store.dispatch(fromConfig.actions.loadConfig(config));
	}, [store, config]);

	const state = {
		dispatch: store.dispatch,
		store,
		config,
		selectors,
		storageClient,
		withLoading,
		updateSearchTerm,
		searchTerm,
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

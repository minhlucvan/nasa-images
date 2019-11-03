import React, { useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useApiClient from '~hooks/useApiClient';
import StoreContext from './StoreContext';
import I18nContext from './I18nContext';
import ThemeContext from './ThemeContext';
import RouterContext from './RouterContext';
import * as fromConfig from '../redux/config';
import * as fromLoading from '../redux/loading';

const Context = React.createContext();

export const useAppContext = () => useContext(Context);

export const AppContext = ({ store: storeInstance, config: appConfig, children }) => {
	const [store] = useState(storeInstance);
	const [withLoading] = fromLoading.useLoading({ dispatch: store.dispatch });
	const [apiClient, refreshClient] = useApiClient(appConfig || {});

	useEffect(() => {
		store.dispatch(fromConfig.actions.loadConfig(appConfig));
		refreshClient(appConfig || {});
	}, [store, appConfig]);
	const state = {
		store,
		dispatch: store.dispatch,
		apiClient,
		withLoading,
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

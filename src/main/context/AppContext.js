import React, { useContext, useState } from 'react';
import StoreContext from './StoreContext';
import I18nContext from './I18nContext';
import ThemeContext from './ThemeContext';
import RouterContext from './RouterContext';

const Context = React.createContext();

export const useAppContext = () => useContext(Context);

export const AppContext = ({ store: storeInstance, children }) => {
	const store = storeInstance;
	const state = {
		store,
	};

	return (
		<Context.Provider value={state}>
			<I18nContext>
				<StoreContext store={store}>
					<ThemeContext>
						<RouterContext>
							{children}
						</RouterContext>
					</ThemeContext>
				</StoreContext>
			</I18nContext>
		</Context.Provider>
	);
};

export default AppContext;

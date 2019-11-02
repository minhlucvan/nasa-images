import React, { useContext } from 'react';
import { Provider } from 'react-redux';

const Context = React.createContext();

export const useStoreContext = () => useContext(Context);

export const StoreContext = ({ store, children }) => (
	<Context.Provider value={{}}>
		<Provider store={store}>
			{children}
		</Provider>
	</Context.Provider>
);

export default StoreContext;

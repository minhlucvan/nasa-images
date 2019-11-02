import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Context = React.createContext();

export const useRouterContext = () => useContext(Context);

export const RouterContext = ({ children }) => (
	<Context.Provider value={{}} >
		<BrowserRouter>
			{children}
		</BrowserRouter>
	</Context.Provider>
);

export default RouterContext;

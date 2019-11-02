import React, { useContext } from 'react';

const Context = React.createContext();

export const useThemeContext = () => useContext(Context);

export const ThemeContext = ({ children }) => (
	<Context.Provider value={{}}>
		{children}
	</Context.Provider>
);

export default ThemeContext;

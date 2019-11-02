import React, { useContext } from 'react';

const Context = React.createContext();

export const useHomeContext = () => useContext(Context);

export const HomeContext = ({ children }) => {
	const context = {};
	return (
		<Context.Provider value={context} >
			{children}
		</Context.Provider>
	);
};

export default HomeContext;

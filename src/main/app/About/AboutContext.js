import React, { useContext } from 'react';

const Context = React.createContext();

export const useAboutContext = () => useContext(Context);

export const AboutContext = ({ children }) => {
	const context = {};
	return (
		<Context.Provider value={context} >
			{children}
		</Context.Provider>
	);
};

export default AboutContext;

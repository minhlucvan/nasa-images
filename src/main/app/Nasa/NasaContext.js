import React, { useContext, useCallback } from 'react';

const Context = React.createContext();

export const useNasaContext = () => useContext(Context);

export const NasaContext = ({ children }) => {
	const handlerRegistDriver = (driver) => {};
	const registerDriver = useCallback();
	const useLocalDriver = useCallback();
	const useRemoveDriver = useCallback();
	const context = {
		registerDriver,
		useLocalDriver,
		useRemoveDriver,
	};
	return (
		<Context.Provider value={context} >
			{children}
		</Context.Provider>
	);
};

export default NasaContext;

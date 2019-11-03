import React, { useContext } from 'react';
import useDriver from './NasaDriver';

const Context = React.createContext();

export const useNasaContext = () => useContext(Context);

const NasaContext = ({ children }) => {
	const [driver] = useDriver();

	const handlerSearch = (term) => driver && driver.search(term);

	const context = {
		driver,
		handlerSearch,
	};

	return (
		<Context.Provider value={context}>
			{children}
		</Context.Provider>
	);
};

export default NasaContext;

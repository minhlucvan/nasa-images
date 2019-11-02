import React, { useContext } from 'react';

const Context = React.createContext();

export const useCollectionContext = () => useContext(Context);

export const CollectionContext = ({ children }) => {
	const context = {};
	return (
		<Context.Provider value={context} >
			{children}
		</Context.Provider>
	);
};

export default CollectionContext;

import React, { useContext } from 'react';

const Context = React.createContext();

export const useAssetContext = () => useContext(Context);

export const AssetContext = ({ children }) => {
	const context = {};
	return (
		<Context.Provider value={context} >
			{children}
		</Context.Provider>
	);
};

export default AssetContext;

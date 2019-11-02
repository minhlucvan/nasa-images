import React, { useContext } from 'react';

const Context = React.createContext();

export const useAssetContext = () => useContext(Context);

export const AssetContext = (props) => {
	const context = {};
	return (
		<Context.Provider value={context} >
			{props.children}
		</Context.Provider>
	);
};

export default AssetContext;

import React, { useContext, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNasaContext } from '../NasaContext';
import { useAppContext } from '../../../context/AppContext';


const Context = React.createContext();

export const useAssetContext = () => useContext(Context);

export const AssetContext = (props) => {
	const { assetId } = useParams();
	const { selectors } = useAppContext();
	const shouldLoadAssets = useSelector(selectors.nasa.assets.shouldLoadAssets);
	const {
		driver,
		handleSelectAsset,
		handlerSearch,
		handlerdeselectAsset,
	} = useNasaContext();

	useEffect(() => {
		if (driver && assetId) {
			handleSelectAsset(assetId);
		}
		return () => {
			handlerdeselectAsset();
		};
	}, [driver, assetId]);

	useEffect(() => {
		if (driver && shouldLoadAssets && assetId) {
			handlerSearch({ nasa_id: assetId });
		}
	}, [driver, shouldLoadAssets, assetId]);

	const context = {};
	return (
		<Context.Provider value={context} >
			{props.children}
		</Context.Provider>
	);
};

export default AssetContext;

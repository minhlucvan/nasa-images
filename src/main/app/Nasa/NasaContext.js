import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useLocalDriver from './NasaLocalDriver';
import useRemoteDriver from './NasaRemoteDriver';
import { useAppContext } from '../../context/AppContext';
import { useSelectAsset, useDeselectAsset, actions } from '~redux/nasa/assets';

const Context = React.createContext();

export const useNasaContext = () => useContext(Context);

const NasaContext = ({ children }) => {
	const appContext = useAppContext();
	const dispatch = useDispatch();
	const localDriver = useLocalDriver(appContext);
	const remoteDriver = useRemoteDriver(appContext);
	const selectAsset = useSelectAsset(appContext.dispatch);
	const deselectAsset = useDeselectAsset(appContext.dispatch);

	const testSearch = (...args) => dispatch(actions.searchAsset(...args));

	const handlerSearch = (params) => remoteDriver.search(params);

	const handleSelectAsset = (assetId) => selectAsset(assetId);

	const handlerdeselectAsset = () => deselectAsset();

	const saveAsset = (item) => localDriver.saveAsset(item);

	const removeAsset = (item) => localDriver.removeAsset(item.id);

	const likeAsset = (item) => localDriver.likeAsset(item);

	useEffect(() => {
		if (appContext.searchTerm) {
			// handlerSearch({ q: appContext.searchTerm });
			testSearch({ q: appContext.searchTerm });
		}
	}, [appContext.searchTerm]);

	const context = {
		handlerSearch,
		handleSelectAsset,
		handlerdeselectAsset,
		saveAsset,
		removeAsset,
		likeAsset,
	};

	return (
		<Context.Provider value={context}>
			{children}
		</Context.Provider>
	);
};

export default NasaContext;

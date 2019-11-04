import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as fromNasa from '~redux/nasa/assets';

const Context = React.createContext();

export const useAssetContext = () => useContext(Context);

export const AssetContext = (props) => {
	const { assetId } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fromNasa.actions.selectAsset(assetId));
		return () => {
			dispatch(fromNasa.actions.deselectAsset(assetId));
		};
	}, [assetId]);

	const context = {
		assetId,
	};
	return (
		<Context.Provider value={context} >
			{props.children}
		</Context.Provider>
	);
};

export default AssetContext;

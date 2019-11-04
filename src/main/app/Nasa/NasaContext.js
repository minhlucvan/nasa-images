import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppContext } from '../../context/AppContext';
import * as fromAssets from '~redux/nasa/assets';


const Context = React.createContext();

export const useNasaContext = () => useContext(Context);

const NasaContext = ({ children }) => {
	const { searchTerm, updateSearchTerm, setIsRemote, isRemote } = useAppContext();
	const dispatch = useDispatch();
	const nasaTerm = useSelector(fromAssets.selectors.searchTerm);
	const isRemoteEnabled = useSelector(fromAssets.selectors.isRemoteEnabled);

	useEffect(() => {
		if (searchTerm) {
			dispatch(fromAssets.actions.updateSearchTerm(searchTerm));
		}
	}, [searchTerm]);

	useEffect(() => {
		if (nasaTerm !== searchTerm) {
			updateSearchTerm(nasaTerm);
		}
	}, [nasaTerm, searchTerm]);

	useEffect(() => {
		if (isRemoteEnabled !== isRemote) {
			setIsRemote(isRemoteEnabled);
		}
	}, [isRemoteEnabled, isRemote]);

	const context = {
	};

	return (
		<Context.Provider value={context}>
			{children}
		</Context.Provider>
	);
};

export default NasaContext;

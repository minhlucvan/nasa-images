import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import * as fromAssets from '~redux/nasa/assets';


const Context = React.createContext();

export const useNasaContext = () => useContext(Context);

const NasaContext = ({ children }) => {
	const { searchTerm, setIsRemote, isRemote } = useAppContext();
	const { pathname } = useLocation();
	const history = useHistory();

	const dispatch = useDispatch();
	const nasaTerm = useSelector(fromAssets.selectors.searchTerm);
	const isRemoteEnabled = useSelector(fromAssets.selectors.isRemoteEnabled);

	useEffect(() => {
		dispatch(fromAssets.actions.updateSearchTerm(searchTerm));

		if (searchTerm && !pathname.endsWith('explore') && !pathname.endsWith('collection')) {
			const target = pathname.includes('explore') ? '/explore' : '/collection';
			history.push(target);
		}
	}, [searchTerm]);

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

import api from '~api';
import { useAppContext } from '../../context/AppContext';

export const useRemoteDriver = () => {
	const { apiClient } = useAppContext(api.search);

	return {
		search: apiClient.nasa.search,
	};
};

export default useRemoteDriver;

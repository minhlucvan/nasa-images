import createNasaStorage from './nasa';

export const useStorageClient = () => ({
	nasa: createNasaStorage(),
});

export default useStorageClient;

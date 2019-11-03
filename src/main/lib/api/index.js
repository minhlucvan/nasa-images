import createNasaClient from './nasa';

export default ({ NASA }) => ({
	nasa: createNasaClient(NASA),
});

import createNasaClient from './nasa';

export default ({ nasa }) => ({
	nasa: createNasaClient(nasa),
});

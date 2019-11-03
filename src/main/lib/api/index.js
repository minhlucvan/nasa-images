import createNasaClient from './nasa';

export default ({ API }) => ({
	nasa: createNasaClient(API.NASA),
});

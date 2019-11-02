import createBaseDriver from './NasaDriver';

export const createDriver = () => {
	const driver = createBaseDriver();
	return driver;
};

export default createDriver;

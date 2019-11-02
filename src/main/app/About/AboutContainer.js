import React from 'react';
import { useAboutContext } from './AboutContext';

export const AboutContainer = ({ children }) => {
	const context = useAboutContext();
	return (
		<About />
	);
};

export default AboutContainer;

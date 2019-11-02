import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';

export default () => (
	<ToastContainer
		draggable={false}
		newestOnTop={true}
		transition={Slide}
		hideProgressBar={true} />
);

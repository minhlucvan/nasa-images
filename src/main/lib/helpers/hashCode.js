export default (str) => {
	let h = 0;
	for (let i = 0; i < str.length; i += 1) {
		// eslint-disable-next-line no-bitwise
		h = Math.imul(31, h) + str.charCodeAt(i) | 0;
	}
	// eslint-disable-next-line no-undef
	return Math.abs(h);
};

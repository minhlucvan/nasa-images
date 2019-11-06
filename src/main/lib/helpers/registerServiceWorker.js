/* [::1] is the IPv6 localhost address. 127.0.0.1/8 is considered localhost for IPv4. */
const isLocalhost = Boolean(window.location.hostname === 'localhost' || window.location.hostname === '[::1]' || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

/* eslint-disable no-console */
function registerValidSW(swUrl) {
	navigator.serviceWorker
		.register(swUrl)
		.then((response) => {
			const registration = response;

			registration.onupdatefound = () => {
				const installingWorker = registration.installing;

				installingWorker.onstatechange = () => {
					if (installingWorker.state === 'installed') {
						if (navigator.serviceWorker.controller) {
							/**
							 * At this point, the old content will have been purged and
							 * the fresh content will have been added to the cache.
							 * It's the perfect time to display a "New content is
							 * available; please refresh." message in your web app.
							 */
						} else {
							/**
							 * At this point, everything has been precached.
							 * It's the perfect time to display a "Content is cached for offline use." message.
							 */
						}
					}
				};
			};
		})
		.catch((error) => console.error('Error during service worker registration: ', error));
}

function checkValidServiceWorker(swUrl) {
	/* Check if the service worker can be found. If it can't, reload the page. */
	fetch(swUrl)
		.then((response) => {
			/* Ensure service worker exists, and that we really are getting a JS file. */
			if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
				/* No service worker found. Probably a different app. Reload the page. */
				navigator.serviceWorker.ready
					.then((registration) => registration.unregister()
						.then(() => window.location.reload()));
			} else {
				/* Service worker found. Proceed as normal. */
				registerValidSW(swUrl);
			}
		})
		.catch((error) => console.error('No internet connection found. Nasa Images is running in offline mode. ', error));
}

const unregister = () => {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.ready.then((registration) => registration.unregister());
	}
};

const register = () => {
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			const swUrl = 'service-worker.js';

			if (!isLocalhost) {
				/* Is not local host. Just register service worker */
				registerValidSW(swUrl);
			} else {
				/* This is running on localhost. Lets check if a service worker still exists or not. */
				checkValidServiceWorker(swUrl);
			}
		});
	} else {
		console.warn('Cannot register service workers in development mode.');
	}
};

export default register;
/* eslint-enable no-console */

export const debounce = (fn, delay) => {
	let timeoutID;
	return function (...args) {
		if (timeoutID) {
			clearTimeout(timeoutID);
		}
		timeoutID = setTimeout(() => {
			console.log('triggered');
			fn(...args);
		}, delay);
	};
};

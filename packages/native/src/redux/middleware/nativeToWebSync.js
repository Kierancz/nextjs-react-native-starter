/* eslint-disable no-undef */
const createEventDispatch = (data) =>
	`setTimeout(function() { 
		window.dispatchEvent(new CustomEvent('bridgeNativeData', { detail: ${JSON.stringify(data)} } ));
	}, 0);
    true;`;

const nativeToWebSync = (store) => (next) => (action) => {
	console.log('BRIDGE(RN): MW dispatch: ', action);
	let result = next(action);
	console.log('BRIDGE(RN): MW next state', store.getState());

	// console.log('BRIDGE(RN): MW window.bridgeRef: ', window.bridgeRef);

	if (window.bridgeRef && !action.type.includes('bridgeWebData')) {
		const webEventDispatch = createEventDispatch(action);
		console.log('BRIDGE(RN): MW webEventDispatch: ', webEventDispatch);
		window.bridgeRef.injectJavaScript(webEventDispatch);
	}

	return result;
};

export default nativeToWebSync;

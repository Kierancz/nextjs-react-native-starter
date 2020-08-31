/* eslint-disable no-undef */
const webToNativeSync = () => (next) => (action) => {
	const result = next(action);
	// console.log('webToNativeSync next state: ', store.getState());
	if (!action.type.includes('bridgeNativeData')) {
		console.log('BRIDGE(WEB) MW dispatching: ', action);
		window.ReactNativeWebView.postMessage(JSON.stringify(action));
	}
	return result;
};

export default webToNativeSync;

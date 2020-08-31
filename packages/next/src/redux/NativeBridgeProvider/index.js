/* eslint-disable no-undef */
import React from 'react';
import T from 'prop-types';
import { useDispatch } from 'react-redux';
// import bridgeNativeDataSlice from '../reducers/bridgeNativeData';

const NativeDataProvider = ({ children }) => {
	const dispatch = useDispatch();

	const handleData = (e) => {
		// window.alert(`WEB: NBP react-native message ${JSON.stringify(e.detail)}`);
		console.log(`WEB: NDP react-native message: ${JSON.stringify(e.detail)}`);

		// dispatch(bridgeNativeDataSlice.actions.setBridgeNativeData(e.detail));
		dispatch(e.detail);
	};

	React.useEffect(() => {
		window.addEventListener('bridgeNativeData', handleData, false);

		return () => {
			window.removeEventListener('bridgeNativeData', handleData, false);
		};
	}, []);

	return <React.Fragment>{children}</React.Fragment>;
};

NativeDataProvider.propTypes = {
	children: T.node.isRequired
};

export default NativeDataProvider;

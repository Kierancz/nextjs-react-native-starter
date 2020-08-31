/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { BackHandler } from 'react-native';
import { WebView as ReactNativeWebView } from 'react-native-webview';
import Geolocation from '@react-native-community/geolocation';
import bridgeNativeDataSlice from '../../redux/reducers/bridgeNativeData';
import BridgeProvider from '../BridgeProvider';
import { Text } from 'react-native';

const WebView = (props) => {
	const dispatch = useDispatch();
	const requestCurrentPosition = useSelector((state) => state.bridgeWebData.requestCurrentPosition || false);

	React.useEffect(() => {
		if (requestCurrentPosition) {
			Geolocation.getCurrentPosition((position) => {
				dispatch(bridgeNativeDataSlice.actions.setBridgeNativeData({ currentPosition: position }));
			});
		}
	});

	return (
		<BridgeProvider>
			<ReactNativeWebView
				startInLoadingState={true}
				renderLoading={() => <Text>Loading...</Text>}
				renderError={(errorName) => <Text>{`Error: ${errorName}`}</Text>}
				source={{ uri: 'http://localhost:3000' }}
				originWhitelist={[ '*' ]}
				pullToRefreshEnabled={true}
				domStorageEnabled={true}
				dataDetectorTypes="all"
				{...props}
			/>
		</BridgeProvider>
	);
};

export default WebView;

// useEffect(() => {
// 	const backAction = () => {
// 		webRef.current.injectJavaScript(`
// 			window.ndBackPress = true;
// 			true;
// 		`);
// 		return true;
// 	};

// 	const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

// 	return () => backHandler.remove();
// }, []);

// useEffect(() => {
// 	const injected = postWebMessage('testNativeMessage');
// 	console.log('injected: ', injected);
// 	webRef.current.injectJavaScript(injected);
// }, []);

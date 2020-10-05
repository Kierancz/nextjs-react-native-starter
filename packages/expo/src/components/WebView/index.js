import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { NativeProvider } from 'webview-state-bridge';
// import { BackHandler } from 'react-native';
import { WebView as ReactNativeWebView } from 'react-native-webview';
// import Geolocation from '@react-native-community/geolocation';
// import nativeDataSlice from '../../redux/reducers/nativeData';
import { Text } from 'react-native';

const WebView = (props) => {
	// const dispatch = useDispatch();
	// const requestCurrentPosition = useSelector((state) => state.webData.requestCurrentPosition || false);

	// React.useEffect(() => {
	// 	if (requestCurrentPosition) {
	// 		Geolocation.getCurrentPosition((position) => {
	// 			dispatch(nativeDataSlice.actions.setNativeData({ currentPosition: position }));
	// 		});
	// 	}
	// });

	return (
		<NativeProvider>
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
		</NativeProvider>
	);
};

export default WebView;

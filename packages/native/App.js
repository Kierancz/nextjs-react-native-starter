/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import WebView from './src/components/WebView';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { StatusBar } from 'react-native';

const App = () => {
	React.useEffect(() => {
		changeNavigationBarColor('black');
	});
	return (
		<Provider store={store}>
			<StatusBar backgroundColor="black" />
			<WebView source={{ uri: 'https://nextest-brown.vercel.app/' }} />
		</Provider>
	);
};

export default App;

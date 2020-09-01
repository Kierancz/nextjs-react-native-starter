/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { WebProvider } from 'webview-state-bridge';
import store from '../src/redux';
import theme from '../src/theme';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles);
		}
	}, []);

	return (
		<React.Fragment>
			<Head>
				<title>My page</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				<link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" />
			</Head>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<WebProvider>
						<Component {...pageProps} />
					</WebProvider>
				</ThemeProvider>
			</Provider>
		</React.Fragment>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired
};

export default MyApp;

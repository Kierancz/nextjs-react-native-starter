import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { nativeMiddleware } from 'webview-state-bridge';
import nativeData from '../reducers/nativeData';
import webData from '../reducers/webData';

const store = configureStore({
	reducer: { nativeData: nativeData.reducer, webData: webData.reducer },
	middleware: [ ...getDefaultMiddleware(), nativeMiddleware ]
});

export default store;

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { webMiddleware } from 'webview-state-bridge';
// import webToNativeSync from '../middleware/webToNativeSync';
import nativeData from '../reducers/nativeData';
import webData from '../reducers/webData';

const store = configureStore({
	reducer: { nativeData: nativeData.reducer, webData: webData.reducer },
	middleware: [ ...getDefaultMiddleware(), webMiddleware ]
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import webToNativeSync from '../middleware/webToNativeSync';
import bridgeNativeData from '../reducers/bridgeNativeData';
import bridgeWebData from '../reducers/bridgeWebData';

const store = configureStore({
	reducer: { bridgeNativeData: bridgeNativeData.reducer, bridgeWebData: bridgeWebData.reducer },
	middleware: [ webToNativeSync ]
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import nativeToWebSync from '../middleware/nativeToWebSync';
import bridgeNativeData from '../reducers/bridgeNativeData';
import bridgeWebData from '../reducers/bridgeWebData';

const store = configureStore({
	reducer: { bridgeNativeData: bridgeNativeData.reducer, bridgeWebData: bridgeWebData.reducer },
	middleware: [ nativeToWebSync ]
});

export default store;

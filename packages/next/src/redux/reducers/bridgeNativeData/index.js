import { createSlice } from '@reduxjs/toolkit';

const bridgeNativeData = createSlice({
	name: 'bridgeNativeData',
	initialState: {},
	reducers: {
		setBridgeNativeData(state, action) {
			return { ...state, ...action.payload };
		}
	}
});

export default bridgeNativeData;

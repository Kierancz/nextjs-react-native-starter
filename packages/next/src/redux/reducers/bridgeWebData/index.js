import { createSlice } from '@reduxjs/toolkit';

const bridgeWebData = createSlice({
	name: 'bridgeWebData',
	initialState: {},
	reducers: {
		setBridgeWebData(state, action) {
			return { ...state, ...action.payload };
		}
	}
});

export default bridgeWebData;

import { createSlice } from '@reduxjs/toolkit';

const nativeData = createSlice({
	name: 'nativeData',
	initialState: {},
	reducers: {
		setNativeData(state, action) {
			return { ...state, ...action.payload };
		}
	}
});

export default nativeData;

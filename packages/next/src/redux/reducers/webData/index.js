import { createSlice } from '@reduxjs/toolkit';

const webData = createSlice({
	name: 'webData',
	initialState: {},
	reducers: {
		setWebData(state, action) {
			return { ...state, ...action.payload };
		}
	}
});

export default webData;

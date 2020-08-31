import { createSlice } from '@reduxjs/toolkit';

const geospatial = createSlice({
	name: 'geospatial',
	initialState: { requestCurrentPosition: false, currentPosition: {} },
	reducers: {
		requestCurrentPosition: (state) => (state.requestCurrentPosition = true),
		setCurrentPosition: (state, action) => ({
			...state,
			currentPosition: action.payload,
			requestCurrentPosition: false
		})
	}
});

export default geospatial;

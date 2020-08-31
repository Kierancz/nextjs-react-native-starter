/* eslint-disable no-undef */
import React from 'react';
import { useDispatch } from 'react-redux';
// import T from 'prop-types';

const BridgeProvider = ({ children }) => {
	const ref = (node) => {
		window.bridgeRef = node;
	};
	const dispatch = useDispatch();
	// Assuming webMessage is redux action
	const onMessage = (e) => {
		console.log('RN: dispatching sharedData with the e.nativeEvent.data: ', e.nativeEvent.data);
		dispatch(JSON.parse(e.nativeEvent.data));
	};

	return React.cloneElement(children, { ref, onMessage });
};

export default BridgeProvider;

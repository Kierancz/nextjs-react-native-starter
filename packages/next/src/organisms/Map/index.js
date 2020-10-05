/* eslint-disable no-undef */
import React from 'react';
// import T from 'prop-types';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import { useSelector, useDispatch } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import webDataSlice from '../../redux/reducers/webData';

const createViewport = (options = {}) => ({
	width: '100vw',
	height: '100%',
	zoom: 8,
	...options,
	latitude: options.latitude || 37.7577,
	longitude: options.longitude || -122.4376
});

export default function Map() {
	const nativeData = useSelector((state) => state.nativeData || {});
	const [ viewport, setViewport ] = React.useState(createViewport());

	const { currentPosition } = nativeData || {};
	const { coords } = currentPosition || {};
	const { latitude, longitude } = coords || {};

	React.useEffect(
		() => {
			const { currentPosition } = nativeData || {};
			const { coords } = currentPosition || {};
			const { latitude, longitude } = coords || {};
			// window.alert(`MAP STATE: ${JSON.stringify(nativeData)}`);

			setViewport(createViewport({ latitude, longitude }));
		},
		[ latitude, longitude ]
	);

	const dispatch = useDispatch();

	return (
		<ReactMapGL
			mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
			{...viewport}
			onViewportChange={(nextViewport) => setViewport(nextViewport)}
			mapStyle="mapbox://styles/mapbox/satellite-v9"
		>
			<div style={{ position: 'absolute', bottom: 64, right: 24 }}>
				<NavigationControl showCompass={false} />
			</div>
			{latitude &&
			longitude && (
				<Marker latitude={latitude} longitude={longitude} offsetLeft={-20} offsetTop={-10}>
					<LocationOnIcon color="primary" fontSize="large" />
				</Marker>
			)}
			<Fab color="primary" aria-label="add" style={{ position: 'absolute', bottom: 140, right: 12 }}>
				<MyLocationIcon
					onClick={() => dispatch(webDataSlice.actions.setWebData({ requestCurrentPosition: true }))}
				/>
			</Fab>
		</ReactMapGL>
	);
}

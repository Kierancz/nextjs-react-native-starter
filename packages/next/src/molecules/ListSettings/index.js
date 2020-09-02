import React from 'react';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import ListInputs from '../ListInputs';

const settings = [
	{ id: 'dark-mode', label: 'Dark Mode', icon: <Brightness3Icon /> },
	{ id: 'wifi', label: 'Wifi', icon: <WifiIcon /> },
	{ id: 'bluetooth', label: 'Bluetooth', icon: <BluetoothIcon /> }
];

export default function ListSettings() {
	return <ListInputs subheader="Settings" listItems={settings} />;
}

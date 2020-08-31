import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper
	}
}));

export default function SwitchListSecondary() {
	const classes = useStyles();
	const [ checked, setChecked ] = React.useState([ 'wifi' ]);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [ ...checked ];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
			<ListItem>
				<ListItemIcon>
					<Brightness3Icon />
				</ListItemIcon>
				<ListItemText id="switch-list-label-dark-mode" primary="Dark Mode" />
				<ListItemSecondaryAction>
					<Switch
						edge="end"
						onChange={handleToggle('dark-mode')}
						checked={checked.indexOf('dark-mode') !== -1}
						inputProps={{ 'aria-labelledby': 'switch-list-label-dark-mode' }}
					/>
				</ListItemSecondaryAction>
			</ListItem>
			<ListItem>
				<ListItemIcon>
					<WifiIcon />
				</ListItemIcon>
				<ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
				<ListItemSecondaryAction>
					<Switch
						edge="end"
						onChange={handleToggle('wifi')}
						checked={checked.indexOf('wifi') !== -1}
						inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
					/>
				</ListItemSecondaryAction>
			</ListItem>
			<ListItem>
				<ListItemIcon>
					<BluetoothIcon />
				</ListItemIcon>
				<ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
				<ListItemSecondaryAction>
					<Switch
						edge="end"
						onChange={handleToggle('bluetooth')}
						checked={checked.indexOf('bluetooth') !== -1}
						inputProps={{ 'aria-labelledby': 'switch-list-label-bluetooth' }}
					/>
				</ListItemSecondaryAction>
			</ListItem>
		</List>
	);
}

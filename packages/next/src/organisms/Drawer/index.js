import React from 'react';
import T from 'prop-types';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
	list: {
		width: 250
	}
});

export default function Drawer({ open, onTransition }) {
	const classes = useStyles();
	const [ state, setState ] = React.useState({
		open: false
	});

	const toggleDrawer = (open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ open });
		onTransition(open);
	};

	React.useEffect(
		() => {
			if (open !== state.open) {
				toggleDrawer(open);
			}
		},
		[ open ]
	);

	const router = useRouter();

	const list = () => (
		<div
			className={clsx(classes.list)}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				<ListItem button onClick={() => router.push('/settings')}>
					<ListItemIcon>
						<SettingsIcon />
					</ListItemIcon>
					<ListItemText primary="Settings" />
				</ListItem>
			</List>
			<Divider />
			<List>
				{[ 'Inbox', 'Starred', 'Send email', 'Drafts' ].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{[ 'All mail', 'Trash', 'Spam' ].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div>
			<SwipeableDrawer
				anchor="left"
				open={state.open || open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
			>
				{list()}
			</SwipeableDrawer>
		</div>
	);
}

Drawer.propTypes = {
	open: T.bool,
	onTransition: T.func
};

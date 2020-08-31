import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '../Drawer';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function AppBar() {
	const classes = useStyles();
	const [ state, setState ] = React.useState({ open: false });
	const router = useRouter();

	const routeNameMap = {
		'/': 'Home',
		'/favorites': 'Favorites',
		'/explore': 'Explore'
	};

	return (
		<div className={classes.root}>
			<MuiAppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={() => setState({ open: true })}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						{routeNameMap[router.route]}
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</MuiAppBar>
			<Drawer open={state.open} onTransition={(open) => setState({ open })} />
		</div>
	);
}

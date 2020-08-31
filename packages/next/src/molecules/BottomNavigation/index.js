// import React from 'react';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import MuiBottomNavigation from '@material-ui/core/BottomNavigation';
import MuiBottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
	root: {
		width: '100vw'
	}
});

export default function BottomNavigation() {
	const classes = useStyles();
	const router = useRouter();

	return (
		<MuiBottomNavigation value={router.pathname} showLabels className={classes.root}>
			<MuiBottomNavigationAction
				label="Views"
				icon={<RestoreIcon />}
				onClick={() => router.push('/')}
				value="/"
			/>
			<MuiBottomNavigationAction
				label="Favorites"
				icon={<FavoriteIcon />}
				onClick={() => router.push('/favorites')}
				value="/favorites"
			/>
			<MuiBottomNavigationAction
				label="Nearby"
				icon={<LocationOnIcon />}
				onClick={() => router.push('/explore')}
				value="/explore"
			/>
		</MuiBottomNavigation>
	);
}

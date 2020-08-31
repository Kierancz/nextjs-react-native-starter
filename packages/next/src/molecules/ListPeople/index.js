import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import faker from 'faker';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	}
}));

export default function CheckboxListSecondary() {
	const classes = useStyles();
	const [ checked, setChecked ] = React.useState([ 1 ]);

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
		<List dense className={classes.root} subheader={<ListSubheader>Friends</ListSubheader>}>
			{[ 0, 1, 2, 3 ].map((value) => {
				const labelId = `checkbox-list-secondary-label-${value}`;
				return (
					<ListItem key={value} button>
						<ListItemAvatar>
							<Avatar alt={`Avatar n°${value + 1}`} src={faker.image.avatar()} />
						</ListItemAvatar>
						<ListItemText id={labelId} primary={faker.name.findName()} />
						<ListItemSecondaryAction>
							<Checkbox
								edge="end"
								onChange={handleToggle(value)}
								checked={checked.indexOf(value) !== -1}
								inputProps={{ 'aria-labelledby': labelId }}
							/>
						</ListItemSecondaryAction>
					</ListItem>
				);
			})}
		</List>
	);
}

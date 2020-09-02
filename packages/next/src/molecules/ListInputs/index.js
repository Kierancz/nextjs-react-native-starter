import React from 'react';
import T from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper
	}
}));

export default function ListInputs({ subheader, listItems, onChange, variant }) {
	const classes = useStyles();
	const [ checked, setChecked ] = React.useState([]);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [ ...checked ];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		onChange(value, checked);
		setChecked(newChecked);
	};

	const InputComponent = variant === 'switch' ? Switch : Checkbox;

	return (
		<List subheader={<ListSubheader>{subheader}</ListSubheader>} className={classes.root}>
			{listItems.map((listItem) => (
				<ListItem key={listItem.label}>
					{listItem.icon && <ListItemIcon>{listItem.icon}</ListItemIcon>}
					{listItem.avatar && (
						<ListItemAvatar>
							<Avatar {...listItem.avatar} />
						</ListItemAvatar>
					)}
					<ListItemText id={`switch-list-label-${listItem.label}`} primary={listItem.label} />
					<ListItemSecondaryAction>
						<InputComponent
							edge="end"
							onChange={handleToggle(listItem.label)}
							checked={checked.indexOf(listItem.label) !== -1}
							inputProps={{ 'aria-labelledby': `switch-list-label-${listItem.label}` }}
						/>
					</ListItemSecondaryAction>
				</ListItem>
			))}
		</List>
	);
}

ListInputs.propTypes = {
	subheader: T.string,
	listItems: T.arrayOf(
		T.shape({
			avatar: T.shape({ src: T.string, alt: T.string }),
			icon: T.node,
			id: T.string,
			label: T.string.isRequired
		})
	),
	onChange: T.func,
	variant: T.oneOf([ 'checkbox', 'switch' ])
};

ListInputs.defaultProps = {
	listItems: [],
	onChange: () => {},
	variant: 'switch'
};

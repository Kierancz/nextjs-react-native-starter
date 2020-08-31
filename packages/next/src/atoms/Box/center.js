import { style } from '@material-ui/system';

const center = style({
	prop: 'center',
	cssProperty: false,
	transform: (value) => ({
		display: 'flex',
		justifyContent: value === 'x' || value === 'xy' ? 'center' : undefined,
		alignItems: value === 'y' || value === 'xy' ? 'center' : undefined
	})
});

export default center;

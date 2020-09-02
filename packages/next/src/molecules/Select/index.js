import React from 'react';
import T from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

export default function Select({ children, options, native, ...otherProps }) {
	const OptionComponent = native ? 'option' : MenuItem;

	return (
		<TextField
			select
			SelectProps={{
				native
			}}
			variant="outlined"
			{...otherProps}
		>
			{children}
			{options.map((option) => (
				<OptionComponent key={option.value} value={option.value}>
					{option.label}
				</OptionComponent>
			))}
		</TextField>
	);
}

Select.propTypes = {
	children: T.node,
	options: T.arrayOf(T.shape({ label: T.node, value: T.node })),
	native: T.bool
};

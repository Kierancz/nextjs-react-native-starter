import React from 'react';
import T from 'prop-types';
import Box from '@material-ui/core/Box';
import BottomNavigation from '../../molecules/BottomNavigation';
import AppBar from '../../organisms/AppBar';

export default function NavContainer({ children }) {
	return (
		<React.Fragment>
			<AppBar />
			<Box height="calc(100vh - 120px)" position="relative" overflow="scroll">
				{children}
			</Box>
			<BottomNavigation />
		</React.Fragment>
	);
}

NavContainer.propTypes = {
	children: T.node.isRequired
};

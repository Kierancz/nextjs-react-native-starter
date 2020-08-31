import T from 'prop-types';
import Head from 'next/head';
import Type from '@material-ui/core/Typography';
import NavContainer from '../NavContainer';
import Box from '../../atoms/Box';

const HeadingContainer = ({ title, children }) => {
	return (
		<div>
			<Head>
				<title>Settings</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavContainer>
				<Box center="xy" mt={6}>
					<Box width="100%" maxWidth={350}>
						<Box center="xy">
							<Type variant="h4">{title}</Type>
						</Box>
						<Box py={4}>{children}</Box>
					</Box>
				</Box>
			</NavContainer>
		</div>
	);
};

HeadingContainer.propTypes = {
	title: T.string.isRequired,
	children: T.node.isRequired
};

export default HeadingContainer;

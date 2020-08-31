import Head from 'next/head';
import HeadingContainer from '../../src/layouts/HeadingContainer';
import ListSettings from '../../src/molecules/ListSettings';
import ListPeople from '../../src/molecules/ListPeople';
import Box from '../../src/atoms/Box';

export default function Favorites() {
	return (
		<div>
			<Head>
				<title>Favorites</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<HeadingContainer title="Favorites">
				<Box mb={4}>
					<ListSettings />
				</Box>
				<ListPeople />
			</HeadingContainer>
		</div>
	);
}

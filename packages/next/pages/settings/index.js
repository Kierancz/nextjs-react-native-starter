import Head from 'next/head';
import HeadingContainer from '../../src/layouts/HeadingContainer';
import ListSettings from '../../src/molecules/ListSettings';

export default function Settings() {
	return (
		<div>
			<Head>
				<title>Settings</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<HeadingContainer title="Settings">
				<ListSettings />
			</HeadingContainer>
		</div>
	);
}

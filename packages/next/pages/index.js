import Head from 'next/head';
import NavContainer from '../src/layouts/NavContainer';
import SignIn from '../src/organisms/SignIn';
import Box from '@material-ui/core/Box';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavContainer>
				<Box pb={9}>
					<SignIn />
				</Box>
			</NavContainer>
		</div>
	);
}

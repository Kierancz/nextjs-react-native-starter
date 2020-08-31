import Head from 'next/head';
import NavContainer from '../../src/layouts/NavContainer';
import Map from '../../src/dynamic/Map/index';

export default function Explore() {
	return (
		<div>
			<Head>
				<title>Explore</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavContainer>
				<Map />
			</NavContainer>
		</div>
	);
}

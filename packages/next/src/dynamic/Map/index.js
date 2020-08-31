import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../../organisms/Map'), {
	ssr: false
});

const DynamicComponentWithNoSSRMap = () => <DynamicComponentWithNoSSR />;

export default DynamicComponentWithNoSSRMap;

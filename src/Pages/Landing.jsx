import React from 'react';
import Intro from "../Components/Intro";
import PageContainer from '../Components/PageContainer';

const Landing = () => {
	return (
		<PageContainer Child={Intro} />
	);
}
 
export default Landing;
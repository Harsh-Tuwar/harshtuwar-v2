import React from 'react';
import ContactBlock from './ContactBlock';
import Footer from './Footer';
import Intro from './Intro';
import Nav from './Nav';
import Socials from './Socials';

const Main = () => {
	return (
		<div className="container">
			<Nav />
			<main>
				<Intro />
				<Socials />
				<ContactBlock />
			</main>
			<div className="background-eff"></div>
			<div className="d-none d-md-block">
				<div className="background-eff2"></div>
			</div>
			<Footer />
		</div>
	);
}
 
export default Main;
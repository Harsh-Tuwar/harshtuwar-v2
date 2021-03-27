import React from 'react';
import Nav from "../Components/Nav";
import Intro from "../Components/Intro";
import Socials from "../Components/Socials";
import ContactBlock from "../Components/ContactBlock";
import Footer from "../Components/Footer";

const Landing = () => {
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
 
export default Landing;
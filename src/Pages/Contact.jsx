import React from 'react';
import Nav from "../Components/Nav";
import Footer from '../Components/Footer';
import ContactBlock from '../Components/ContactBlock';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
	return (
		<>
			<div className="container">
				<Nav />
				<main>
					<div className="intro">
						<h1 className="intro-header">Harsh Tuwar</h1>
						<h2 className="intro-description">Full-Stack Web Developer</h2>
					</div>
					<ContactForm />
					<ContactBlock />
				</main>
				<div className="background-eff"></div>
				<div className="d-none d-md-block">
					<div className="background-eff2"></div>
				</div>
				<Footer />
			</div>
		</>
	);
}
 
export default Contact;
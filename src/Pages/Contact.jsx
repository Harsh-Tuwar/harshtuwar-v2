import React from 'react';
import ContactForm from '../Components/ContactForm';
import PageContainer from '../Components/PageContainer';

const Contact = () => {
	return (
		<PageContainer Child={ContactComponent} />
	);
}

const ContactComponent = () => {
	return (
		<>
			<div className="intro">
				<h1 className="intro-header">Harsh Tuwar</h1>
				<h2 className="intro-description">Full-Stack Web Developer</h2>
			</div>
			<ContactForm />
		</>
	);
}
 
export default Contact;
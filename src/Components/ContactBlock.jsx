import React from 'react';
import { Link } from "react-router-dom";

const ContactBlock = () => {
	return (
		<div className="contact">
			<h2>Feel free to contact me</h2>
			<p>I'm open to new opportunities.</p>
			<Link to="/contact" className="button-module button-contact mt-3">Get in touch</Link>
		</div>
	);
}
 
export default ContactBlock;
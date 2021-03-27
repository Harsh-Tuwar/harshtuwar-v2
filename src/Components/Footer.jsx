import React from 'react';

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<footer className="pt-4 my-md-5 pt-md-5">
			<div className="row">
				<div className="col-12 col-md">
					<small className="d-block mb-3 text-muted">© Copyright {year}</small>
				</div>
				<div className="col-6 col-md">
					<h5>Links</h5>
					<ul className="list-unstyled text-small">
						<li><a className="text-muted" href="/">Home</a></li>
						<li><a className="text-muted" href="https://blog.pankajtanwar.in/">Projects</a></li>
					</ul>
				</div>
				<div className="col-6 col-md">
					<h5>Services</h5>
					<ul className="list-unstyled text-small">
						<li><a href="/" className="text-muted">Web Development</a></li>
						<li><a href="/" className="text-muted">Mobile App Development</a></li>
					</ul>
				</div>
				<div className="col-6 col-md">
					<h5>Question?</h5>
					<ul className="list-unstyled text-small">
						<li><a href="/" className="text-muted"><i className="fab fa-instagram"></i> tuwar_08</a></li>
						<li><a href="/" className="text-muted"><i className="fab fa-github"></i> harsh-tuwar</a></li>
						<li><a href="/" className="text-muted"><i className="fab fa-linkedin"></i> tuwar08</a></li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
 
export default Footer;
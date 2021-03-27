import React from 'react';

const Intro = () => {
	return (
		<>
			<div className="intro">
				<h1 className="intro-header">Harsh Tuwar</h1>
				<h2 className="intro-description">Full-Stack Web Developer</h2>
			</div>
			<div className="row">
				<div className="col-md-6 col-sm-12 mt-4">
					<p className="about-text">
						Hello, This is Harsh Tuwar, a Full-Stack Web Developer. Harsh Tuwar is an experienced software developer, with a diploma in Computer Programming. He is a developer who likes to write programs that deals with real life and organizational problems. He is a motivated self-starter and multi-tasker with exceptional interpersonal and communication skills. Currently based out of Wolfville in NS, he has industry experience in building websites and web applications. He likes to work with JavaScript, NodeJS, React, Mongo and Firebase but he's always open to learning new things.
						<br /><br />
			            Colleagues indetifies Harsh as a thoughtful, positive and productive professional who exhibits exemplary commitment and passion towards his assignments. He can (and often does) work well alone but is at his best collaborating with others. Take a look at his work and get in touch!
					</p>
				</div>
				<div className="col-md-6 col-sm-12 img-container">
					<img className="about-picture headshot headshot-3" src="/images/harsh-tuwar-min.jpeg" alt="Harsh Tuwar" />
				</div>
			</div>
			<div className="portfolio-divider"></div>
		</>
	);
}
 
export default Intro;
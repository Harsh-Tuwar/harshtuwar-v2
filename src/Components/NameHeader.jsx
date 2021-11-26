import React from 'react';
import Typist from 'react-typist';

const NameHeader = () => {
	return (
		<div className="intro">
			<h1 className="intro-header">Harsh Tuwar</h1>
			<h2 className="intro-description">
				<Typist>
					<span>Full-Stack Developer</span>
					<Typist.Backspace count={21} delay={500} />
					<span>Blockchain Enthusiast</span>
					<Typist.Backspace count={21} delay={500} />
					<span>Entrepreneur Devotee</span>
					<Typist.Backspace count={21} delay={500} />
					<span>Full-Stack Developer | Blockchain Enthusiast</span>
				</Typist>
			</h2>
		</div>
	);
}
 
export default NameHeader;

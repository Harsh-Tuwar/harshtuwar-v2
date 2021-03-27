import React from 'react';

const Nav = () => {
	return (
		<nav className="navbar">
			<ul className="navbar-module">
				<li className="headerli"><a href="/" className="navbar-item">Home 🏡</a></li>
				<li className="headerli"><a href="/" className="navbar-item" target="_blank">Projects ☎️</a></li>
				<li className="headerli"><a href="/" className="navbar-item">My Resume 💼</a></li>
			</ul>
			<ul className="navbar-module navbar-socials">
				<li className="headerli"><a href="mailto:tuwarharsh08@gmail.com" className="navbar-item"><i className="far fa-envelope"></i></a></li>
				<li className="headerli"><a href="https://www.linkedin.com/in/htuwar08/" className="navbar-item"><i className="fab fa-linkedin"></i></a></li>
				<li className="headerli"><a href="https://github.com/harsh-tuwar" className="navbar-item"><i className="fab fa-github"></i></a></li>
     		 </ul>
		</nav>
	);
}
 
export default Nav;
import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="navbar">
			<ul className="navbar-module">
				<li className="headerli"><Link to="/" className="navbar-item">Home 🏡</Link></li>
				<li className="headerli"><Link to="/projects" className="navbar-item">Projects ☎️</Link></li>
				<li className="headerli"><Link to="/resume" className="navbar-item">My Resume 💼</Link></li>
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
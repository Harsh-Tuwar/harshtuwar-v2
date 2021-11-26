import React from 'react';
import { scrollToTop, Routes } from '../utils';
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="navbar">
			<ul className="navbar-module">
				{Routes.map(({ path, name, isNavItem }, index) => {
					return (isNavItem) ? <li className="headerli" key={index}><Link to={path} className="navbar-item" onClick={scrollToTop}>{name}</Link></li> : null;
				})}
			</ul>
			<ul className="navbar-module navbar-socials">
				<li className="headerli"><a href="mailto:tuwarharsh08@gmail.com" target="_blank" rel="noreferrer" className="navbar-item"><i className="far fa-envelope"></i></a></li>
				<li className="headerli"><a href="https://www.linkedin.com/in/htuwar08/" target="_blank" rel="noreferrer" className="navbar-item"><i className="fab fa-linkedin"></i></a></li>
				<li className="headerli"><a href="https://github.com/harsh-tuwar" target="_blank" rel="noreferrer" className="navbar-item"><i className="fab fa-github"></i></a></li>
     		 </ul>
		</nav>
	);
}
 
export default Nav;
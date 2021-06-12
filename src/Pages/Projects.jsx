import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import ContactBlock from '../Components/ContactBlock';
import ProjectsContainer from '../Components/ProjectsContainer';

const Projects = () => {
	return (
		<div className="container">
			<Nav />
			<main>
				<ProjectsContainer />
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
 
export default Projects;
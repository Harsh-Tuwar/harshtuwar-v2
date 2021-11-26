import React from 'react';
import Nav from './Nav';
import ContactBlock from './ContactBlock';
import Footer from './Footer';

const PageContainer = ({ Child }) => {
	return (
		<div className="container">
			<Nav />
			<main>
				<Child />
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
 
export default PageContainer;
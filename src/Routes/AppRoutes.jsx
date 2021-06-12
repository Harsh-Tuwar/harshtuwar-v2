import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Landing from "../Pages/Landing";
import Contact from "../Pages/Contact";
import Projects from '../Pages/Projects';

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Route exact path="/" component={Landing} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/projects" component={Projects} />
			</Router>
		</>
	);
};
 
export default AppRoutes;
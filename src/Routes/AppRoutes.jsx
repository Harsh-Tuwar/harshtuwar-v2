import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Landing from "../Pages/Landing";
import Contact from "../Pages/Contact";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Route exact path="/" component={Landing} />
				<Route exact path="/contact" component={Contact} />
			</Router>
		</>
	);
};
 
export default AppRoutes;
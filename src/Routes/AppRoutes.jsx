import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import { Routes } from '../utils';

const AppRoutes = () => {
	return (
		<>
			<Router>
				{Routes.map(({ path, component }, index) => {
					return <Route exact path={path} component={component} key={index} />
				})}
			</Router>
		</>
	);
};
 
export default AppRoutes;
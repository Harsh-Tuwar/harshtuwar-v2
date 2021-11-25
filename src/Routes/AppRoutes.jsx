import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import { Routes } from '../utils';

const AppRoutes = () => {
	return (
		<>
			<Router>
				{Routes.map(({ path, component }) => {
					return <Route exact path={path} component={component} />
				})}
			</Router>
		</>
	);
};
 
export default AppRoutes;

import React from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { getAllowedRoutes, isLoggedIn } from 'helpers/route';
import { PrivateRoutesConfig } from 'route/config';
import MapAllowedRoutes from './MapAllowedRoutes';

function PrivateRoutes() {
	const match = useRouteMatch('/admin');
	let allowedRoutes = [];

	if (isLoggedIn()) allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
	else return <Redirect to="/error" />;
	return (
		<>
			<MapAllowedRoutes routes={allowedRoutes} basePath={match.path} isAddNotFound />
		</>
	);
}

export default PrivateRoutes;
import Error404 from 'markup/Pages/Error';
import React, { memo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

function MapAllowedRoutes({routes, basePath, isAddNotFound}) {
	const match = useRouteMatch(basePath);
	return (
		<Switch>
			
			{routes.map((route) => {
				const { path, component: Component, children, title, permission, ...rest } = route;

				return (
					<Route {...rest} key={path} path={`${match.path}${path}`}>
						<Component children={children} />
					</Route>
				)
			})}
			{isAddNotFound && <Route><Error404 /></Route>}
		</Switch>
	)
}

export default memo(MapAllowedRoutes);
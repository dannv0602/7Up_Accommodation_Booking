import React, { memo } from 'react';
import PublicRoutes from './PublicRoutes';

/*
* TODO: when user loggedIn he/she unable to goto public routes
*  ie: ('/about', '/contact', 'any other public route')
*/
function Auth() {
	// TODO: temp logged-in check, update as per your app logic
	return	<PublicRoutes />
}

export default memo(Auth);

export function isLoggedIn() {
	return localStorage.getItem('user')?true:false;
}
export function getAllowedRoutes(routes) {
	const roles = JSON.parse(localStorage.getItem('user')).role;
	return routes.filter(({ permission }) => {
		if(permission.includes(roles)) return true;
		return false;
	});
}
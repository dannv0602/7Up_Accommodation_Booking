import { Roles } from 'route/config';

import UsersManager from 'markup/Pages/admin/user-manager/UsersManager';
import Garbage from 'markup/Pages/admin/user-manager/Garbage';
import RoomsManager from "../../markup/Pages/admin/room-manager/RoomsManager";
import GarbageRoom from "../../markup/Pages/admin/room-manager/GarbageRoom";
import OrderManager from "../../markup/Pages/admin/OrderManager";

export default [
	{
		component: UsersManager,
		path: '/users-manager',
		title: 'Users Manager',
		exact: true,
		permission: [
			Roles.ADMIN
		],
	},
	{
		component: Garbage,
		path: '/users-manager/garbage',
		title: 'Users Garbage',
		permission: [
			Roles.ADMIN
		],
	},
	{
		component: RoomsManager,
		path: '/rooms-manager',
		title: 'Room Manager',
		permission: [
			Roles.ADMIN
		],
	},
	{
		component: GarbageRoom,
		path: '/rooms-manager/garbage',
		title: 'Room Garbage',
		permission: [
			Roles.ADMIN
		],
	},
	{
		component: OrderManager,
		path: '/orders-manager',
		title: 'Order Manager',
		permission: [
			Roles.ADMIN
		],
	},


]
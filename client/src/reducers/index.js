import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { userReducer } from './users.reducer';
import { alert } from './alert.reducer';
import { roomReducer } from './rooms.reducer';
import { addressReducer } from './address.reducer';
import { orderReducer } from './order.reducers';

const rootReducer = combineReducers({
  authentication,
  userReducer,
  alert,
  roomReducer,
  addressReducer,
  orderReducer
});

export default rootReducer;
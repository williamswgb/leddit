import { combineReducers } from 'redux';

import { reducer as notificationsReducer } from './notifications/reducer';

export const reducer = combineReducers({
	notifications: notificationsReducer,
});

import { combineReducers } from 'redux';

import { reducer as topicsReducer } from './topics/reducer';

export const reducer = combineReducers({
	topics: topicsReducer,
});

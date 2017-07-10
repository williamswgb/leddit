// This reducer will combine all reducers inside data,
// Right now, there is only 1 topic reducer for topics data
// In the future, it can be extended with new reducer when we want to add new data type,
// e.g. comments, etc.

import { combineReducers } from 'redux';

import { reducer as topicsReducer } from './topics/reducer';

export const reducer = combineReducers({
	topics: topicsReducer,
});

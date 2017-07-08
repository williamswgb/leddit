import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { reducer as Home } from 'scenes/Home/reducer';
import { reducer as Topic } from 'scenes/Topic/reducer';

const appReducer = combineReducers({
	Home,
	Topic,
});

export default createStore(
	appReducer,
  applyMiddleware(thunk, logger),
	compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	),
);

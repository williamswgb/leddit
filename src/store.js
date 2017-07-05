import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { reducer as Home } from 'pages/Home/reducer';
import { reducer as Topic } from 'pages/Topic/reducer';

const appReducer = combineReducers({
	Home,
	Topic,
});

export default createStore(
	appReducer,
  applyMiddleware(thunk),
	applyMiddleware(logger),
	compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	),
);

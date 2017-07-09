import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { reducer as Topic } from 'scenes/Topic/reducer';

const appReducer = combineReducers({
	Topic,
});

let middleWare;
if (process.env.NODE_ENV === 'development') {
	middleWare = applyMiddleware(thunk, logger)
} else {
	middleWare = applyMiddleware(thunk)
}

export default createStore(
	appReducer,
  middleWare,
	compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	),
);

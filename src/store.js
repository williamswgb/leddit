import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'

import { reducer as Home } from 'pages/Home/reducer';

const appReducer = combineReducers({
	Home,
});

export default createStore(
	appReducer,
  applyMiddleware(thunk),
	compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	),
);

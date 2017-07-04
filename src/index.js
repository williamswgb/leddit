import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css';
import store from './store'
import registerServiceWorker from './registerServiceWorker'

import Home from 'pages/Home' //Will be updated

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();

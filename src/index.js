import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './style.css'
import store from './store'
import routes from './routes'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home from 'pages/Home' //Will be updated

const routes = (
  <Router>
    <Route path='/' component={Home}></Route>
  </Router>
)

export default routes

import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import './style.css'
import logo from './images/logo.png'
import NavLink from './components/NavLink'

const Header = () => (
  <div className="Header">
    <div className="Header-container">
      <Link to="/"><img src={logo} className="Header-logo" alt="logo" /></Link>
      <div className="Header-title">
        LEDDIT
      </div>
    </div>

    <Switch>
      <Redirect from="/topic/hot" to="/topic" />
      <Route exact path="/topic" component={NavLink}/>
      <Route path="/topic/create" />
      <Route path="/topic/search" />
      <Route path="/topic/:category" component={NavLink}/>
    </Switch>
  </div>
)

export default Header

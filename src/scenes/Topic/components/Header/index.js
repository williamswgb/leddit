import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import TextLink from 'components/TextLink'
import NavLink from './components/NavLink'
import './style.css'
import logo from './images/logo.png'


const Header = () => (
  <div className="Header">
    <div className="Header-container">
      <Link to="/"><img src={logo} className="Header-logo" alt="logo" /></Link>
      <TextLink to="/topic" style={{color: '#fff'}}>
        <div className="Header-title">
          LEDDIT
        </div>
      </TextLink>
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

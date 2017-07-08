import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import Component from 'components'

import HeaderComponent from './components'
import './style.css'
import logo from './images/logo.png'

const links = [
  { text: 'hot', to: '/topic' },
  { text: 'new', to: '/topic/new' }
]

const Header = () => (
  <div className="Header">
    <div className="Header-container">
      <Link to="/"><img src={logo} className="Header-logo" alt="logo" /></Link>
      <Component.TextLink to="/topic" className="Header-title">
        LEDDIT
      </Component.TextLink>
    </div>

    <Switch>
      <Redirect from="/topic/hot" to="/topic" />
      <Route exact path="/topic" render={() => (<HeaderComponent.NavBar links={links}/>)} />
      <Route path="/topic/create" />
      <Route path="/topic/search" />
      <Route path="/topic/:id/update" />
      <Route path="/topic/:category" render={() => (<HeaderComponent.NavBar links={links}/>)} />
    </Switch>
  </div>
)

export default Header

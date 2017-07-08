import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import TextLink from 'components/TextLink'

import NavBar from './components/NavBar'
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
      <TextLink to="/topic" className="Header-title">
        LEDDIT
      </TextLink>
    </div>

    <Switch>
      <Redirect from="/topic/hot" to="/topic" />
      <Route exact path="/topic" render={() => (<NavBar links={links}/>)} />
      <Route path="/topic/create" />
      <Route path="/topic/search" />
      <Route path="/topic/:id/update" />
      <Route path="/topic/:category" render={() => (<NavBar links={links}/>)} />
    </Switch>
  </div>
)

export default Header

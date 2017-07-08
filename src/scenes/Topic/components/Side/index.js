import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Component from 'components'

import './style.css'

const Side = () => (
  <Switch>
    <Route exact path="/topic/create"/>
    <Route exact path="/topic/:id/update"/>
    <Route path="/topic" render={() => (
      <div className="Side">
        <Component.TextLink to='/topic/create'>
          <div className="Side-button">Create</div>
        </Component.TextLink>
      </div>
    )}/>
  </Switch>
);

export default Side

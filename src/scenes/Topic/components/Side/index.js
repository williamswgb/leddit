import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TextLink from 'components/TextLink'
import './style.css'

const Side = () => (
  <Switch>
    <Route exact path="/topic/create"/>
    <Route path="/topic" render={() => (
      <div className="Side">
        <TextLink to='/topic/create'>
          <div className="Side-button">Create</div>
        </TextLink>
      </div>
    )}/>
  </Switch>
);

export default Side

import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Scene from 'scenes'

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={Scene.Home} />
      <Route path='/topic' component={Scene.Topic} />
    </Switch>
  )
}

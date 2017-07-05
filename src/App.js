import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from 'scenes/Home'
import Topic from 'scenes/Topic'

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/topic' component={Topic} />
    </Switch>
  )
}

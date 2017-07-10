// Main app for switching and rendering all main scenes (pages) of the app according to the route.

import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Scene from 'scenes'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Scene.Home} />
      <Route path='/topic' component={Scene.Topic} />
    </Switch>
  )
}

App.displayName = 'App'

export default App

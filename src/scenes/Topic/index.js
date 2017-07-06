import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import './style.css'

import Header from './components/Header'
import Side from './components/Side'

import List from './scenes/List'
import Detail from './scenes/Detail'
import Create from './scenes/Create'

class Topic extends Component {
  renderContent() {
    return (
      <div className="Topic-content">
        <div className="Topic-scene">
          <Switch>
            <Redirect from="/topic/hot" to="/topic" />
            <Route exact path="/topic" component={List} />
            <Route path="/topic/create" component={Create} />
            <Route path="/topic/search" />
            <Route path="/topic/:id" component={Detail} />
            <Route path="/topic/:category" component={List} />
          </Switch>
        </div>

        <Side/>
      </div>
    )
  }

  render() {
    return (
      <div className="Topic">
        <Header />
        {this.renderContent()}
      </div>
    );
  }
}

export default Topic

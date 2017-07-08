import React, { PureComponent } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import Header from './components/Header'
import Side from './components/Side'
import List from './scenes/List'
import Detail from './scenes/Detail'
import Form from './scenes/Form'
import './style.css'

class TopicScene extends PureComponent {
  renderContent() {
    return (
      <div className="Topic-content">
        <div className="Topic-scene">
          <Switch>
            <Redirect from="/topic/hot" to="/topic" />
            <Route exact path="/topic" component={List} />
            <Route path="/topic/new" component={List} />
            <Route path="/topic/create" component={Form} />
            <Route exact path="/topic/:id" component={Detail} />
            <Route path="/topic/:id/update" component={Form} />
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

export default TopicScene

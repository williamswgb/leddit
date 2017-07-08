import React, { PureComponent } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import TopicComponent from './components'
import TopicScene from './scenes'
import './style.css'

class Topic extends PureComponent {
  renderContent() {
    return (
      <div className="Topic-content">
        <div className="Topic-scene">
          <Switch>
            <Redirect from="/topic/hot" to="/topic" />
            <Route exact path="/topic" component={TopicScene.List} />
            <Route path="/topic/new" component={TopicScene.List} />
            <Route path="/topic/create" component={TopicScene.Form} />
            <Route exact path="/topic/:id" component={TopicScene.Detail} />
            <Route path="/topic/:id/update" component={TopicScene.Form} />
          </Switch>
        </div>

        <TopicComponent.Side />
      </div>
    )
  }

  render() {
    return (
      <div className="Topic">
        <TopicComponent.Header />
        {this.renderContent()}
      </div>
    );
  }
}

Topic.displayName = 'Topic'

export default Topic

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class TopicScene extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Topic</h2>
        </div>
      </div>
    );
  }
}

export default withRouter(connect((state) => {
  const { Topic } = state
  return {
    topics: Topic.data.topics.byHash,
  }
})(TopicScene))

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './style.css'

class ListContainer extends Component {
  render() {
    return (
      <div className="List">
      </div>
    );
  }
}

export default withRouter(connect((state) => {
  const { Topic } = state
  return {
    topics: Topic.data.topics.byHash,
  }
})(ListContainer))

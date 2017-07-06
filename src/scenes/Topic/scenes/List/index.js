import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ListView from './listView.js'

class ListContainer extends Component {
  state = {
    dummyTopics: Array(3).fill(
      {
        id: 1,
        vote: 12,
        title: 'Title',
        description: 'Description',
      }
    )
  }

  render() {
    return (
      <ListView data={this.state.dummyTopics} />
    )
  }
}

export default withRouter(connect((state) => {
  const { Topic } = state
  return {
    topics: Topic.data.topics.byHash,
  }
})(ListContainer))

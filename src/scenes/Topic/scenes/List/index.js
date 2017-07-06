import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TopicItem from './components/Item'
import './style.css'

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
      <div className="List">
        {this.state.dummyTopics.map((topic, i) => (
          <TopicItem key={`TopicItem-${i}`} data={topic} />
        ))}
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

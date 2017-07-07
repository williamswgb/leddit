import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { array, object } from 'prop-types'

import { order as setOrderTopics } from 'scenes/Topic/data/topics/action'
import ListView from './listView.js'

class ListContainer extends Component {
  static propTypes = {
    data: array,
    match: object,
  }

  static defaultProps = {
    data: [],
    match: {},
  }

  componentWillMount() {
    this.sortTopics(this.props.match)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.path !== this.props.match.path) {
      this.sortTopics(nextProps.match)
    }
  }

  sortTopics(match) {
    const route = (match.path || "").split('/')
    this.props.setOrderTopics(route[route.length - 1])
  }

  render() {
    return (
      <ListView data={this.props.data} />
    )
  }
}

export default withRouter(connect((state, props) => {
  const { topics } = state.Topic.data
  return {
    data: topics.order.map((id) => topics.byHash[id]),
  }
}, { setOrderTopics })(ListContainer))

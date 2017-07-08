import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { array, object, func } from 'prop-types'

import {
  order as orderTopics,
  remove as removeTopic
} from 'scenes/Topic/data/topics/action'

import ListView from './listView.js'

class ListContainer extends Component {
  static propTypes = {
    data: array,
    match: object,
    orderTopics: func,
    removeTopic: func,
  }

  static defaultProps = {
    data: [],
    match: {},
    orderTopics: null,
    removeTopic: null,
  }

  componentWillMount() {
    this.orderTopics(this.props.match)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.path !== this.props.match.path) {
      this.orderTopics(nextProps.match)
    }
  }

  orderTopics = (match) => {
    const route = (match.path || "").split('/')
    this.props.orderTopics(route[route.length - 1])
  }

  removeTopic = (id) => {
    if (this.props.removeTopic) {
      this.props.removeTopic(id)
    }
  }

  render() {
    return (
      <ListView data={this.props.data} removeTopic={this.removeTopic}/>
    )
  }
}

export default withRouter(connect((state, props) => {
  const { topics } = state.Topic.data
  return {
    data: topics.order.map((id) => topics.byHash[id]),
  }
}, { orderTopics, removeTopic })(ListContainer))

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { array, object } from 'prop-types'

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

  sortData() {
    const { data, match } = this.props
    const route = (match.path || "").split('/')
    switch(route[route.length - 1]) {
      case 'hot':
      case 'topic':
        return data.sort((a,b) => a.vote < b.vote)
      case 'new':
        return data.sort((a,b) => a.id < b.id)
      default:
        return data
    }
  }

  render() {
    const data = this.props.data.length < 2 ?
      this.props.data : this.sortData()
    return (
      <ListView data={data} />
    )
  }
}

export default withRouter(connect((state) => {
  const { topics } = state.Topic.data;
  return {
    data: topics.byId.map((id) => topics.byHash[id]),
  }
})(ListContainer))

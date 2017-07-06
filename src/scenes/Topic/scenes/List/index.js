import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { array } from 'prop-types'

import ListView from './listView.js'

class ListContainer extends Component {
  static propTypes = {
    data: array,
  }

  static defaultProps = {
    data: []
  }

  render() {
    return (
      <ListView data={this.props.data} />
    )
  }
}

export default withRouter(connect((state) => {
  const { topics } = state.Topic.data;
  return {
    data: topics.byId.map((id) => topics.byHash[id]),
  }
})(ListContainer))

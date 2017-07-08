import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { object } from 'prop-types'

import DetailView from './detailView.js'

class DetailContainer extends Component {
  static propTypes = {
    data: object,
  }

  static defaultProps = {
    data: null,
  }

  render() {
    if (this.props.data === null) {
      return <Redirect to='/topic' />
    }
    return (
      <DetailView data={this.props.data} />
    )
  }
}

export default withRouter(connect((state, props) => {
  const { topics } = state.Topic.data
  const { id } = props.match.params
  return {
    data: topics.byHash[id],
  }
})(DetailContainer))

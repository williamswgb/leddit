import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { object, func } from 'prop-types'

import Helper from 'services/helper'
import { remove as removeTopic } from 'scenes/Topic/data/topics/action'

import DetailView from './detailView.js'

class DetailContainer extends Component {
  static propTypes = {
    data: object,
    removeTopic: func,
  }

  static defaultProps = {
    data: null,
    removeTopic: null,
  }

  removeTopic = (id) => {
    if (this.props.removeTopic) {
      this.props.removeTopic(id)
    }
  }

  render() {
    if (Helper.isNullOrUndefined(this.props.data)) {
      return <Redirect to='/topic' />
    }
    return (
      <DetailView
        basePath="/topic"
        data={this.props.data}
        onClickRemove={this.removeTopic}
      />
    )
  }
}

export default withRouter(connect((state, props) => {
  const { topics } = state.Topic.data
  const { id } = props.match.params
  return {
    data: topics.byHash[id],
  }
}, { removeTopic })(DetailContainer))

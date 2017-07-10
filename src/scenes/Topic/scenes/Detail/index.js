import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { object, func } from 'prop-types'

import Helper from 'services/helper'
import { remove as removeTopic } from 'scenes/Topic/data/topics/action'

import DetailView from './detailView.js'

class DetailContainer extends Component {
  removeTopic = (id) => {
    if (this.props.removeTopic) {
      this.props.removeTopic(id)
    }
  }

  render() {
    // Redirect back to topic if the data for current item is not exist anymore.
    // This is for behaviour after removing item from detail.
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

DetailContainer.displayName = 'Topic Detail Container'

DetailContainer.propTypes = {
  data: object,
  removeTopic: func,
}

DetailContainer.defaultProps = {
  data: null,
  removeTopic: null,
}

export default withRouter(connect((state, props) => {
  const { topics } = state.Topic.data
  const { id } = props.match.params
  return {
    data: topics.byHash[id],
  }
}, { removeTopic })(DetailContainer))

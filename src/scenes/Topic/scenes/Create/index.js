import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { func } from 'prop-types'

import { create as createTopic } from 'scenes/Topic/data/topics/action'
import CreateView from './createView.js'

class CreateContainer extends Component {
  static propTypes = {
    createTopic: func,
  }

  static defaultProps = {
    createTopic: null,
  }

  state = {
    form: {}
  }

  onFormChange = (fieldName, value) => {
    const form = {
      ...this.state.form,
      [fieldName]: value
    }

    this.setState({ form })
  }

  // checkForm() {
  // }

  submitForm = () => {
    if (this.props.createTopic !== null) {
      this.props.createTopic(this.state.form)
    }
  }

  render() {
    return (
      <CreateView
        form={this.state.form}
        onFormChange={this.onFormChange}
        onSubmit={this.submitForm}
      />
    )
  }
}

export default withRouter(connect(null, { createTopic })(CreateContainer))

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { create as createTopic } from 'scenes/Topic/data/topics/action'
import CreateView from './createView.js'

class CreateContainer extends Component {
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

  checkForm() {
  }

  submitForm = () => {
    // createTopic(this.state.form)
    console.log('Submit')
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

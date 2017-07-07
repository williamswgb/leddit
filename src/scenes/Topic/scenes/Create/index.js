import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { func, bool, object } from 'prop-types'

import { create as createTopic } from 'scenes/Topic/data/topics/action'
import CreateView from './createView.js'

class CreateContainer extends Component {
  static propTypes = {
    loading: bool,
    error: object,
    createTopic: func,
  }

  static defaultProps = {
    createTopic: null,
    loading: false,
    error: null,
  }

  state = {
    form: {},
    success: false,
  }

  onFormChange = (fieldName, value) => {
    const form = {
      ...this.state.form,
      [fieldName]: value
    }

    this.setState({ form })
  }

  submitForm = () => {
    if (this.props.createTopic !== null) {
      this.props.createTopic(this.state.form)
      .then(() => {
        this.setState({ success: true })
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  render() {
    if (this.state.success) {
      return <Redirect to='/topic' />
    }

    return (
      <CreateView
        form={this.state.form}
        onFormChange={this.onFormChange}
        onSubmit={this.submitForm}
      />
    )
  }
}

export default withRouter(connect((state) => {
  const { loading, error } = state.Topic
  return {
    loading,
    error,
  }
}, { createTopic })(CreateContainer))

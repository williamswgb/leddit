import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { func, bool, object } from 'prop-types'

import Helper from 'services/helper'
import {
  create as createTopic,
  update as updateTopic,
 } from 'scenes/Topic/data/topics/action'
 import { reset as resetError } from 'scenes/Topic/action'

import CreateView from './createView.js'

class CreateContainer extends Component {
  static propTypes = {
    loading: bool,
    data: object,
    error: object,
    match: object,
    createTopic: func,
    updateTopic: func,
    resetError: func,
  }

  static defaultProps = {
    loading: false,
    data: null,
    error: {},
    match: {},
    createTopic: null,
    updateTopic: null,
    resetError: null,
  }

  state = {
    form: this.getDefaultForm(this.props.data),
    success: false,
  }

  componentWillUnmount() {
    if (this.props.resetError) {
      this.props.resetError()
    }
  }

  getDefaultForm(data) {
    data = data || {}
    return {
      id: data.id,
      title: data.title,
      text: data.text,
    }
  }

  onFormChange = (fieldName, value) => {
    const form = {
      ...this.state.form,
      [fieldName]: value
    }

    this.setState({ form })
  }

  submitForm = () => {
    const { updateTopic, createTopic, match } = this.props
    const action = Helper.isNullOrUndefined(match.params.id) ? createTopic(this.state.form)
      : updateTopic(match.params.id, this.state.form)

    action.then(() => {
      this.setState({ success: true })
    }).catch(() => {})
  }

  getRedirectUrl() {
    let to = null
    if (this.state.success) {
      to = '/topic/new'
    } else if (!Helper.isNullOrUndefined(this.props.match.params.id) &&
      Helper.isNullOrUndefined(this.props.data)) {
      to = '/topic'
    }
    return to
  }

  render() {
    const url = this.getRedirectUrl()

    if (!Helper.isNullOrUndefined(url)) {
      return <Redirect to={url} />
    }

    return (
      <CreateView
        error={this.props.error}
        form={this.state.form}
        onFormChange={this.onFormChange}
        onSubmit={this.submitForm}
      />
    )
  }
}

export default withRouter(connect((state, props) => {
  const { loading, error, data } = state.Topic
  const { id } = props.match.params
  return {
    loading,
    error,
    data: data.topics.byHash[id],
  }
}, { createTopic, updateTopic, resetError })(CreateContainer))

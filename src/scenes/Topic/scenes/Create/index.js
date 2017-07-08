import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { func, bool, object } from 'prop-types'

import {
  create as createTopic,
  update as updateTopic,
 } from 'scenes/Topic/data/topics/action'
import CreateView from './createView.js'

class CreateContainer extends Component {
  static propTypes = {
    loading: bool,
    data: object,
    error: object,
    match: object,
    createTopic: func,
    updateTopic: func,
  }

  static defaultProps = {
    loading: false,
    data: null,
    error: {},
    match: {},
    createTopic: null,
    updateTopic: null,
  }

  state = {
    form: this.getDefaultForm(this.props.data),
    success: false,
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
    const action = match.params.id !== undefined ?
      updateTopic(match.params.id, this.state.form)
      : createTopic(this.state.form)

    action.then(() => {
      this.setState({ success: true })
    }).catch(() => {})
  }

  getRedirectUrl() {
    let to = null
    if (this.state.success) {
      to = '/topic/new'
    } else if (this.props.match.params.id !== undefined && this.props.data === null) {
      to = '/topic'
    }
    return to
  }

  render() {
    const url = this.getRedirectUrl()

    if (url !== null) {
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
}, { createTopic, updateTopic })(CreateContainer))

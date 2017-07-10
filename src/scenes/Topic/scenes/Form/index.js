import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { func, bool, object, shape, number, string } from 'prop-types'

import Helper from 'services/helper'
import {
  create as createTopic,
  update as updateTopic,
 } from 'scenes/Topic/data/topics/action'
 import { reset as resetError } from 'scenes/Topic/action'

import FormView from './formView.js'

class FormContainer extends Component {
  state = {
    form: this.getDefaultForm(this.props.data),
    success: false,
  }

  // When leaving form, reset the error in the state reducer
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

  // If id is specified, call update action to update the existing data.
  // Otherwise call create action to create new data in reducer
  submitForm = () => {
    const { updateTopic, createTopic, match } = this.props
    const action = Helper.isNullOrUndefined(match.params.id) ? createTopic(this.state.form)
      : updateTopic(match.params.id, this.state.form)

    action.then(() => {
      this.setState({ success: true })
    }).catch(() => {})
  }

  // If form is submitted successfully, get the redirect url and redirect the page to that url
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
      <FormView
        loading={this.props.loading}
        error={this.props.error}
        form={this.state.form}
        onFormChange={this.onFormChange}
        onSubmit={this.submitForm}
      />
    )
  }
}

FormContainer.displayName = 'Topic Form Container'

FormContainer.propTypes = {
  loading: bool,
  data: shape({
    id: number,
    title: string,
    text: string,
    updatedAt: string,
    vote: number,
  }),
  error: object,
  match: object,
  createTopic: func,
  updateTopic: func,
  resetError: func,
}

FormContainer.defaultProps = {
  loading: false,
  data: null,
  error: {},
  match: {},
  createTopic: null,
  updateTopic: null,
  resetError: null,
}

export default withRouter(connect((state, props) => {
  const { loading, error, data } = state.Topic
  const { id } = props.match.params
  return {
    loading,
    error,
    data: data.topics.byHash[id],
  }
}, { createTopic, updateTopic, resetError })(FormContainer))

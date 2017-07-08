import React, { PureComponent } from 'react'
import { shape, string, func, bool } from 'prop-types'

import Component from 'components'

import './style.css'

class FormView extends PureComponent {
  renderTitleInput() {
    const { form, onFormChange, error, loading } = this.props;
    return (
      <div className="Form-input-container">
        <Component.InputTextBox
          className="Form-input"
          disabled={loading}
          error={error.title}
          multiLine
          isRequired
          name="title"
          value={form.title}
          onChange={(value) => onFormChange('title', value)}
        />
      </div>
    )
  }

  renderTextInput() {
    const { form, onFormChange, error, loading } = this.props;
    return (
      <div className="Form-input-container">
        <Component.InputTextBox
          className="Form-input Form-input-text"
          disabled={loading}
          error={error.text}
          isOptional
          multiLine
          name="text"
          value={form.text}
          onChange={(value) => onFormChange('text', value)}
        />
      </div>
    )
  }

  renderSubmitButton() {
    return (
      <Component.Button
        disabled={this.props.loading}
        text="Submit"
        onClick={this.props.onSubmit}
      />
    )
  }

  render() {
    return (
      <div className="Form">
        {this.renderTitleInput()}
        {this.renderTextInput()}
        {this.renderSubmitButton()}
      </div>
    )
  }
}

FormView.displayName = 'Topic Form View'

FormView.propTypes = {
  loading: bool,
  form: shape({
    title: string,
    text: string,
  }),
  error: shape({
    title: string,
    text: string,
  }),
  onFormChange: func,
  onSubmit: func,
}

FormView.defaultProps = {
  loading: false,
  form: {},
  error: {},
  onFormChange: null,
  onSubmit: null,
}


export default FormView

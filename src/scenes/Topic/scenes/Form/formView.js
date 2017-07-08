import React, { PureComponent } from 'react'
import { object, func, bool } from 'prop-types'

import InputTextBox from 'components/InputTextBox'
import Button from 'components/Button'
import './style.css'

class FormView extends PureComponent {
  static propTypes = {
    loading: bool,
    form: object,
    error: object,
    onFormChange: func,
    onSubmit: func,
  }

  static defaultProps = {
    loading: false,
    form: {},
    error: {},
    onFormChange: null,
    onSubmit: null,
  }

  renderTitleInput() {
    const { form, onFormChange, error, loading } = this.props;
    return (
      <div className="Form-input-container">
        <InputTextBox
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
        <InputTextBox
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
      <Button
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

export default FormView

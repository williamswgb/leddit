import React, { PureComponent } from 'react'
import { object, func } from 'prop-types'

import InputTextBox from 'components/InputTextBox'
import Button from 'components/Button'
import './style.css'

class CreateView extends PureComponent {
  static propTypes = {
    form: object,
    error: object,
    onFormChange: func,
    onSubmit: func,
  }

  static defaultProps = {
    form: {},
    error: {},
    onFormChange: null,
    onSubmit: null,
  }

  renderTitleInput() {
    const { form, onFormChange, error } = this.props;
    return (
      <div className="Create-input-container">
        <InputTextBox
          className="Create-input"
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
    const { form, onFormChange, error } = this.props;
    return (
      <div className="Create-input-container">
        <InputTextBox
          className="Create-input Create-input-text"
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
        text="Submit"
        onClick={this.props.onSubmit}
      />
    )
  }

  render() {
    return (
      <div className="Create">
        {this.renderTitleInput()}
        {this.renderTextInput()}
        {this.renderSubmitButton()}
      </div>
    )
  }
}

export default CreateView

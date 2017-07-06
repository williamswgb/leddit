import React, { PureComponent } from 'react'
import { object, func } from 'prop-types'

import InputTextBox from 'components/InputTextBox'
import Button from 'components/Button'
import './style.css'

class CreateView extends PureComponent {
  static propTypes = {
    form: object,
    onFormChange: func,
    onSubmit: func,
  }

  static defaultProps = {
    form: {},
    onFormChange: null,
    onSubmit: null,
  }

  renderTitleInput() {
    const { form, onFormChange } = this.props;
    return (
      <div className="Create-input-container">
        <InputTextBox
          className="Create-input"
          maxLength={255}
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
    const { form, onFormChange } = this.props;
    return (
      <div className="Create-input-container">
        <InputTextBox
          className="Create-input Create-input-text"
          isOptional
          maxLength={255}
          multiLine
          name="text"
          value={form.text}
          onChange={(value) => onFormChange('text', value)}
        />
      </div>
    )
  }

  renderUrlInput() {
    const { form, onFormChange } = this.props;
    return (
      <div className="Create-input-container">
        <InputTextBox
          className="Create-input"
          isOptional
          multiLine
          name="url"
          value={form.url}
          onChange={(value) => onFormChange('url', value)}
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
        {this.renderUrlInput()}
        {this.renderSubmitButton()}
      </div>
    )
  }
}

export default CreateView

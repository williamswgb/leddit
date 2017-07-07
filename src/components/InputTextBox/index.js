import React, { PureComponent } from 'react'
import { func, string, bool, number } from 'prop-types'

import './style.css'

class InputTextBox extends PureComponent {
  static propTypes = {
    className: string,
    onClick: func,
    name: string,
    value: string,
    isRequired: bool,
    isOptional: bool,
    multiLine: bool,
    maxLength: number,
    error: string,
  }

  static defaultProps = {
    className: null,
    onChange: null,
    name: null,
    value: '',
    isRequired: false,
    isOptional: false,
    multiLine: false,
    maxLength: null,
    error: null,
  }

  handleChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value)
    }
  }

  renderName() {
    const { name, isRequired, isOptional } = this.props

    if (name) {
      return (
        <div className="Input-name-container">
          <span className={`Input-name${isRequired ? ' Input-required': ''}`}>
            {name}
          </span>
          {!isRequired && isOptional ? <span className="Input-optional">(optional)</span>
            : null}
        </div>
      )
    }
  }

  renderInput() {
    const { multiLine, onChange, isRequired, isOptional, error, ...rest } = this.props
    if (multiLine) {
      return (
        <textarea
          {...rest}
          onChange={this.handleChange}
        />
      )
    }

    return (
      <input
        {...rest}
        onChange={this.handleChange}
      />
    )
  }

  renderError() {
    if (this.props.error !== null && this.props.error.trim() !== '') {
      return (
        <div className="Input-error">
          {this.props.error}
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderName()}
        {this.renderInput()}
        {this.renderError()}
      </div>
    );
  }
}

export default InputTextBox;

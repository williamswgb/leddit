import React, { PureComponent } from 'react'
import { func, string, bool } from 'prop-types'
import classNames from 'classnames'

import Helper from 'services/helper'

import './style.css'

class InputTextBox extends PureComponent {
  handleChange = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value)
    }
  }

  renderName() {
    const { name, isRequired, isOptional } = this.props
    const nameClassName = classNames('Input-name', {
      'Input-required': isRequired,
    })
    if (name) {
      return (
        <div className="Input-name-container">
          <span className={nameClassName}>
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
    if (Helper.isNonEmptyString(this.props.error)) {
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

InputTextBox.displayName = 'Input Text Box'

InputTextBox.propTypes = {
  className: string,
  onClick: func,
  name: string,
  value: string,
  isRequired: bool,
  isOptional: bool,
  multiLine: bool,
  error: string,
}

InputTextBox.defaultProps = {
  className: null,
  onChange: null,
  name: null,
  value: '',
  isRequired: false,
  isOptional: false,
  multiLine: false,
  error: null,
}

export default InputTextBox;

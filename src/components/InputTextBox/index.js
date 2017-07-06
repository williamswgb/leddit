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
    const { multiLine, onChange, isRequired, isOptional, ...rest } = this.props
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

  render() {
    return (
      <div>
        {this.renderName()}
        {this.renderInput()}
      </div>
    );
  }
}

export default InputTextBox;

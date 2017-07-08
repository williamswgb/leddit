import React, { PureComponent } from 'react'
import { func, string } from 'prop-types'

class Button extends PureComponent {
  static propTypes = {
    className: string,
    onClick: func,
    text: string,
  }

  static defaultProps = {
    className: null,
    onClick: null,
    text: '',
  }

  handleClick = (e) => {
    e.preventDefault()
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    const { text, onClick, ...rest} = this.props

    return (
      <button
        {...rest}
        onClick={this.handleClick}>
        {text}
      </button>
    );
  }
}

export default Button;

import React, { PureComponent } from 'react'
import { func, string } from 'prop-types'

class Button extends PureComponent {
  static propTypes = {
    className: string,
    onClick: func,
    text: string,
  }

  handleClick = (e) => {
    e.preventDefault()
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.handleClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;

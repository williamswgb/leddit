import React, { PureComponent } from 'react'
import { func, string } from 'prop-types'

class Button extends PureComponent {
  static propTypes = {
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
          onClick={this.handleClick}>
          {this.props.text}
        </button>
    );
  }
}

export default Button;

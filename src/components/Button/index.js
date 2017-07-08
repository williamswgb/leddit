import React, { PureComponent } from 'react'
import { func, string } from 'prop-types'

class Button extends PureComponent {
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

Button.displayName = 'Button'

Button.propTypes = {
  className: string,
  onClick: func,
  text: string,
}

Button.defaultProps = {
  className: null,
  onClick: null,
  text: '',
}

export default Button;

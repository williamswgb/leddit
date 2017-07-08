import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { node, object } from 'prop-types'

class TextLink extends PureComponent {
  static propTypes = {
    children: node,
    style: object,
  }

  render() {
    const { style, children, ...rest } = this.props;
    return (
      <NavLink
        {...rest}
        style={{
          textDecoration: 'none',
          ...style
        }}
      >
        {children}
      </NavLink>
    );
  }
}

export default TextLink;

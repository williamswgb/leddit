import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { node, object } from 'prop-types'

class TextLink extends PureComponent {
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

TextLink.displayName = 'Text Link'

TextLink.propTypes = {
  children: node,
  style: object,
}

TextLink.defaultProps = {
  children: null,
  style: {}
}

export default TextLink;

import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { node, object } from 'prop-types'

class TextLink extends PureComponent {
  static propTypes = {
    children: node,
    style: object,
  }

  render() {
    const { style, ...rest } = this.props;
    return (
      <Link
        {...rest}
        style={{
          textDecoration: 'none',
          ...style
        }}
      >
        {this.props.children}
      </Link>
    );
  }
}

export default TextLink;

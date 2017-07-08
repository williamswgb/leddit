import React from 'react'
import { shape, string, arrayOf } from 'prop-types'

import Component from 'components'

import './style.css'

const NavBar = ({ links }) => (
  <div className="NavBar">
    {links.map((link, i) =>
      <Component.TextLink
        key={`NavBarLink-${i}`}
        className="NavBar-category"
        to={link.to}>{link.text}
      </Component.TextLink>)}
  </div>
)

NavBar.displayName = 'Navigation Bar'

NavBar.propStyle = {
  links: arrayOf(shape({
    to: string,
    text: string,
  }))
}
NavBar.defaultProps = {
  links: [],
}
export default NavBar

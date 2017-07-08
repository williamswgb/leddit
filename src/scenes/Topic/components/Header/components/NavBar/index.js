import React from 'react'

import Component from 'components'

import './style.css'

const NavBar = ({ match, links }) => (
  <div className="NavBar">
    {links.map((link, i) =>
      <Component.TextLink
        key={`NavBarLink-${i}`}
        className="NavBar-category"
        to={link.to}>{link.text}
      </Component.TextLink>)}
  </div>
)

export default NavBar

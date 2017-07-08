import React from 'react'

import TextLink from 'components/TextLink'

import './style.css'

const NavBar = ({ match, links }) => (
  <div className="NavBar">
    {links.map((link, i) =>
      <TextLink
        key={`NavBarLink-${i}`}
        className="NavBar-category"
        to={link.to}>{link.text}
      </TextLink>)}
  </div>
)

export default NavBar

import React from 'react'

import TextLink from 'components/TextLink'

import './style.css'

const NavLink = ({ match }) => (
  <div className="NavLink">
    <div className="NavLink-category">
      <TextLink to='/topic' style={{color: '#FFF'}}>hot</TextLink>
    </div>
    <div className="NavLink-category">
      <TextLink to='/topic/new' style={{color: '#FFF'}}>new</TextLink>
    </div>
  </div>
)

export default NavLink

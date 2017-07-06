import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const NavLink = ({ match }) => (
  <div className="NavLink">
    <Link to='/topic'><div className="NavLink-category">hot</div></Link>
    <Link to='/topic/new'><div className="NavLink-category">new</div></Link>
  </div>
)

export default NavLink

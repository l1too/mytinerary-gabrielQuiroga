import React from 'react'

const NavItem = ({title}) => {
  return (
      <li>
        <button  className= 'font-bold '>{title}</button>
      </li>
  )
}

export default NavItem
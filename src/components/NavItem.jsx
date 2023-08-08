import React from 'react'

const NavItem = ({title,to}) => {
  return (
      <li className='list-none'>
        <a href={to} className= 'font-bold '>{title}</a>
      </li>
  )
}

export default NavItem
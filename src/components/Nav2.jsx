import React from 'react'
import NavItem from './NavItem'
import Logo from './Logo'
import ButtonLogin from './ButtonLogin'

const Nav2 = () => {
  return (
    <div className="navbar flex justify-between mt-6  bg-slate-100 rounded-md w-3/4 h-50 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <NavItem title='Home' />
                    <NavItem title='Cities' to='/cities'/>
                    <ButtonLogin/>
                </ul>
                </div>
                <Logo title='My Tinerary' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavItem title='Home' />
                    <NavItem title='Cities' to='/cities'/>
                    <ButtonLogin/>
                </ul>
            </div>

    </div>
  )
}

export default Nav2
import React from 'react'
import NavItem from './NavItem'

const Nav2 = () => {
  return (
    <div className="navbar flex justify-between mt-6  bg-white w-3/4 h-50 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li>
                    <a>Parent</a>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-bold px-0">My Tinerary</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavItem title='Home' />
                    <NavItem title='cities'/>
                    <button className=' bg-violet-700 px-3 py-2 font-bold rounded text-white flex my-auto'>
                    <svg className='text-lg fill-current text-white mt-auto mb-auto mr-2' xmlns="http://www.w3.org/2000/svg" height="0.625em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    Login</button>
                </ul>
            </div>

    </div>
  )
}

export default Nav2
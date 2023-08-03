import React from 'react'
import NavItem from './NavItem'
import Logo from './Logo'

const NavBar = () => {

  return (
   
    <nav className='flex justify-between mt-6  bg-white w-3/4 h-50 mx-auto'>

        <Logo title='My Tinerary'/>
        
        <div className='flex gap-5'>

        <NavItem title='Home'/>
        <NavItem title='Cities'/>
    
            <button className=' bg-violet-700 px-3 py-2 font-bold rounded text-white flex my-auto'>
            <svg className='text-lg fill-current text-white mt-auto mb-auto mr-2' xmlns="http://www.w3.org/2000/svg" height="0.625em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            Login</button>
        </div>

    </nav>

    
  )
}

export default NavBar
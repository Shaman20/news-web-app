import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className='navbar'>
            <h4>SSR Blog</h4>
            <div className='links'>
                <a href='/'>Home</a>
                <a href='/create'>New Blog</a>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
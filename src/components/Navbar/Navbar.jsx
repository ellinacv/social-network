import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
      <nav className='nav'>
        <div className='nav__wrapper'>
          <a className='nav__item' href='@'>Profile</a>
          <a className='nav__item' href='@'>Messages</a>
          <a className='nav__item' href='@'>News</a>
          <a className='nav__item' href='@'>Music</a>
          <a className='nav__item' href='@'>Settings</a>
        </div>
      </nav>
  )
}

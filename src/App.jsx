import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Messages} from './components/Messages/Messages'
// import {Profile} from './components/Profile/Profile'

export const App = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Header />
        <Navbar />
        <div className='wrapper-content'>
          <Messages />
        </div>
        {/* <Profile /> */}
      </div>
    </div>
  )
}

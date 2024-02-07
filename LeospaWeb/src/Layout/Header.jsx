import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to={'/'}>
            <img src="/public/assets/logo.png" alt="" />
          </Link>
        </div>
        <nav className='navbar'>
          <ul>
            <ul>
              <li>
                <Link to={'/'}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  About
                </Link>
              </li>
              <li>
                <Link to={'/Service'}>
                  Service
                </Link>
              </li>
              <li>
                <Link to={'/features'}>
                  Feature
                </Link>
              </li>
              <li>
                <Link to={'/'}>
                  Contact
                </Link>
              </li>
            </ul>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
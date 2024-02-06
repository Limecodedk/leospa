import React from 'react'
import { Link } from 'react-router-dom'

const HeaderAdmin = () => {
  return (
    <>
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
                  <Link to={'/admin'}>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to={'/admin/treatment'}>
                    Treatment
                  </Link>
                </li>
                <li>
                  <Link to={'/admin/hero'}>
                    Hero
                  </Link>
                </li>
                <li>
                  <Link to={'about'}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to={'footer/edit'}>
                    Footer
                  </Link>
                </li>
                <li>
                  <Link to={'/'}>
                    Logout
                  </Link>
                </li>
              </ul>
            </ul>
          </nav>
        </header>
      </>
    </>
  )
}

export default HeaderAdmin
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import NavbarDesktop from '../Nav/Admin/NavbarDesktopAdmin';
import NavbarMobile from '../Nav/Admin/NavbarMobileAdmin';

const HeaderAdmin = () => {
  const [navbar, setNavbar] = useState(false)
  const isSmallScreen = window.innerWidth <= 425;
  const handleNavbarClose = () => {
    setNavbar(false)
  };
  return (
    <>
      <header className="header mobileHeader">
        <div className="logo">
          <Link to={'/'}>
            <img src="/public/assets/logo.png" alt="" />
          </Link>
        </div>
        {isSmallScreen ? (
          <div onClick={() => setNavbar(!navbar)}
            className='navIcon'>
            <RxHamburgerMenu />
          </div>
        ) : (
          <NavbarDesktop />
        )}
        <div className={`nav-container ${navbar ? 'open' : 'closed'}`}>
          {isSmallScreen ? <NavbarMobile onCloseNav={handleNavbarClose} /> : null}
        </div>
      </header>
    </>
  )
}

export default HeaderAdmin
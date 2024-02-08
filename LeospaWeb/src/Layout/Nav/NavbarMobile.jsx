import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = [
  { text: "Home", to: "/" },
  { text: "About", to: "/" },
  { text: "Service", to: "/Service" },
  { text: "Feature", to: "/features" },
  { text: "Contact", to: "/" }
];

const NavbarMobile = () => {
  return (
    <>
      <nav className='navbarMobile'>
        <ul>
          {NavLink.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default NavbarMobile
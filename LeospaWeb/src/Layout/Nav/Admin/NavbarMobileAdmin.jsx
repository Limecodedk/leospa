import React from 'react'
import { Link } from 'react-router-dom';

const NavLink = [
  { text: "Dashboard", to: "admin" },
  { text: "Treatment", to: "/treatment" },
  { text: "Hero", to: "/admin/hero" },
  { text: "About", to: "about" },
  { text: "Footer", to: "footer/edit" },
  { text: "Log out", to: "/" }
];

const NavbarMobile = () => {
  return (
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
  )
}

export default NavbarMobile
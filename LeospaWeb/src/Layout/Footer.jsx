import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import useRequestData from '../hooks/useRequestData'
import Newssubscription from '../components/Newssubscription';
/* Import icons */
import { FaFacebookF, FaVimeoV, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";


const NavLink = [
  { text: "Home", to: "/" },
  { text: "About", to: "/" },
  { text: "Service", to: "/Service" },
  { text: "Feature", to: "/features" },
  { text: "Contact", to: "/" }
];

const Footer = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/footer")
    makeRequestService("http://localhost:5029/footer")
  }, [])

  return (
    <footer className='footer'>
      <div className='footerContainer'>
        <div className="rowOne">
          <div className='footerImage'>
            <img src="/public/assets/logo.png" alt="" />
          </div>
        </div>
        <div className="rowTwo">
          <div className="footerContact">
            <p className='footerAdress'><MdOutlinePlace /> Address: {data?.address}, <br /> {data?.zipncity}</p>
            <a href={`tel:+${data?.phone}`} className='footerContactInfo'><FaPhoneAlt /> Phone {data?.phone}</a>
            <a href={`mailto:${data?.email}`} className='footerContactInfo'><IoMailOutline /> Email: {data?.email}</a>
          </div>
          <div>
            <nav className='navbar mobileNavbar'>
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
            <div className='footerSocial'>
              <a href="https://www.facebook.com/leospa">
                <FaFacebookF /> |
              </a>
              <a href="https://www.twitter.com/leospa">
                <FaXTwitter /> |
              </a>
              <a href="https://vimeov.com/leospa">
                <FaVimeoV /> |
              </a>
              <a href="https://www.instagram.com/leospa">
                <FaInstagram /> |
              </a>
            </div>
          </div>
          <div className="Newsletter">
            <Newssubscription />
          </div>
        </div>
        <div className="copyright">
          &#169;Copyright 2019 themeies.com all rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
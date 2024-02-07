import React, { useEffect } from 'react'
import useRequestData from '../hooks/useRequestData'
import { Link } from 'react-router-dom';
/* Import icons */
import { FaFacebookF, FaVimeoV, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlinePlace } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import Newssubscription from '../components/Newssubscription';




const Footer = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/footer")
    makeRequestService("http://localhost:5029/footer")
  }, [])

  return (
    <footer className='footer'>
      <div className='footerColTwo'>
        <div className='footerImage'>
          <img src="/public/assets/logo.png" alt="" />
        </div>
        <nav className='navbar'>
          <Newssubscription />
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
              <Link to={'/features'}>
                Feature
              </Link>
            </li>
            <li>
              <Link to={'/Service'}>
                Service
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footerContact">
          <div className="footerAdress">
            <p><MdOutlinePlace /> Address: {data?.address}, {data?.zipncity}</p>
          </div>
          <div className="footerContactInfo">
            <FaPhoneAlt /> <a href={`tel:+${data?.phone}`}>Phone {data?.phone}</a>
            <a href={`mailto:${data?.email}`}><IoMailOutline /> Email: {data?.email}</a>
          </div>
        </div>
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
        <div className="copyright">
          &#169;Copyright 2019 themeies.com all rights reserved.
        </div>
      </div>

    </footer >
  )
}

export default Footer
import React, { useEffect } from 'react'
import useRequestData from '../hooks/useRequestData'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Team = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/team")
    makeRequestService("http://localhost:5029/team")
  }, [])



  return (
    <section className='teamSection'>
      <h2>Experienced Team</h2>
      <p>To doesn´t his appear replenish together called he of mad place won´t <br />
        wherein blessed second every wherein were meat kind wherein and martcin </p>
      <div className="teamCardContainer">
        {data?.map((item, index) => (
          <div className="teamCard" key={index}>
            <div className='teamCardImage'>
              <img src={`http://localhost:5029/images/team/${item.image}`} alt="LeoSpa team profile image" />
            </div>
            <div className='teamCardContent'>
              <div>
                <h2>{item.firstname} {item.lastname}</h2>
                <p>{item.role}</p>
                <div className="socialIconContainer">
                  <div className="socialIcon">
                    <a href="/"><FaFacebookF /></a>
                  </div>
                  <div className="socialIcon">
                    <a href="/"><FaXTwitter /></a>
                  </div>
                  <div className="socialIcon">
                    <a href="/"><FaGooglePlusG /></a>
                  </div>
                  <div className="socialIcon">
                    <a href="/">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Team
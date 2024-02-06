import React, { useEffect } from 'react'
import useRequestData from '../hooks/useRequestData'
import { Link } from 'react-router-dom';

const About = () => {

  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/about")
    makeRequestService("http://localhost:5029/about")
  }, [])


  return (
    <>
      <section className='about'>
        <div >
          <img className="chinaRoseImage" src="/public/assets/china-rose.png" alt="" />
        </div>
        <div className="aboutContent">
          <img className='aboutImage' src="../../public/assets/butterfly.png" alt="" />
          <h3>About our spa center</h3>
          <h2>{data?.title}</h2>
          <p>{data?.content}</p>
          <Link to={'/features'} className="btn">
            Read more
          </Link>
        </div>
        <div>
          <img className="aboutJasminImg" src="/public/assets/jasmine.png" alt="" />
        </div>
      </section>
    </>
  )
}

export default About
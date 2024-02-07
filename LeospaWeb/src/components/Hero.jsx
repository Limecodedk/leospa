import React, { useEffect } from 'react'
import useRequestData from '../hooks/useRequestData'
import { Link } from 'react-router-dom';
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {

  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/hero")
    makeRequestService("http://localhost:5029/hero?show=true")
  }, [])

  return (
    <>
      <section className='heroContainer'>
        <div className="heroLeaf">
          <img src="/public/assets/leaf.png" alt="Hero bg left image" />
        </div>
        {
          data && data.map(heroItem => {
            if (heroItem.show) {
              return (
                <div className='heroContent' key={heroItem._id}>
                  <h3 className='heroContentSubtitle'>{data?.[0].title1}</h3>
                  <h1>
                    {data?.[0].title2}
                  </h1>
                  <p>{data?.[0].content}</p>

                  <div className="button">
                    <div className="heroBtn">
                      <Link to={'/'}>
                        Reserve now
                      </Link>
                    </div>
                    <div className="PlayIconContainer">
                      <Link to={'/'}>
                        <div className="iconContainer">
                          <CiPlay1 className='playIcon' />
                        </div>
                        <span className="watchText">Watch our story</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })
        }
        <div className="heroImage">
          <img src="/public/assets/spa.png" alt="Hero image" />
        </div>
      </section >
    </>
  )
}

export default Hero
import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData'
import { Link } from 'react-router-dom';
import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()


  useEffect(() => {

    makeRequest("http://localhost:5029/hero")
    makeRequestService("http://localhost:5029/hero?show=true")
  }, [])

  const toggleVideo = (url) => {
    setVideoUrl(url);
    setVideoOpen(!videoOpen);
  };

  const handleWatchClick = (link, show) => {
    if (show) {
      toggleVideo(link);
    }
  };


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
                  <h3 className='heroContentSubtitle'>{heroItem.title1}</h3>
                  <h1>
                    {heroItem.title2}
                  </h1>
                  <p>{heroItem.content}</p>

                  <div className="button">
                    <div className="heroBtn">
                      <Link to={'/'}>
                        Reserve now
                      </Link>
                    </div>
                    <div className="PlayIconContainer">
                      <a href="#" onClick={() => handleWatchClick(heroItem.link, heroItem.show)} >
                        <div className="iconContainer">
                          <CiPlay1 className='playIcon' />
                        </div>
                        <span className="watchText">Watch our story</span>
                      </a>
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
      {videoOpen && (

        < div className="videoModalOverlay" onClick={() => toggleVideo('')}>
          <div className="videoModalContent">
            {console.log(data?.[0].link)}
            <iframe
              src={data?.[0].link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div >
      )}
    </>
  )
}

export default Hero
import React, { useEffect } from 'react'
import useRequestData from '../hooks/useRequestData'
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';


const truncateText = (text, maxLength) => {
  const words = text.split(' ');
  if (words.length > maxLength) {
    return words.slice(0, maxLength).join(' ') + '...';
  }
  return text;
};

const Treatments = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/treatment")
    makeRequestService("http://localhost:5029/treatment")
  }, [])


  return (
    <>
      <section className='treatments'>
        <div className="treatmentsContainer">
          {data?.slice(0, 4).map((item, index) => (
            <div className="treatmentsImageContainer" key={index}>
              <div className="overlay">
                <div className="overlayContent">
                  <img src="/public/assets/icons/1.png" alt="Treatments Overlay Image" className="overlayImage" />
                  <p>Body Treatment</p>
                </div>
              </div>
              <img className='treatmentsImage' src={`http://localhost:5029/images/treatment/${item.image}`} alt="treatments image" />
            </div>
          ))}
        </div>
        <h2>Popular Procedures</h2>
        <p>To doesn´t his appear replenish together called he of mad place won´t <br />
          wherein blessed second every wherein were meat kind wherein and martcin</p>

        <div className="treatmentsCardContainer">
          {data?.slice(0, 3).map((item, index) => (
            <div className="card" key={index}>
              <img className='treatmentsCardImage' src={`http://localhost:5029/images/treatment/${item.image}`} alt="treatments" />
              <h2>{item.title}</h2>
              {parse(truncateText(item.content, 15))}
              <Link to={'/service'} className='btn treatmentsBtn'>
                Read more
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Treatments
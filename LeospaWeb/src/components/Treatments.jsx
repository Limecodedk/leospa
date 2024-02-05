import React, { useEffect } from 'react'
import useRequestData from '../hooks/useRequestData'


const Treatments = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/treatment")
    makeRequestService("http://localhost:5029/treatment")
  }, [])

  return (
    <>
      <section className=''>
        <div className="treatmentsContainer">
          {data?.slice(0, 4).map((item, index) => (
            <div className="treatmentsImageContainer" key={index} >
              <img className='treatmentsImage' src={`http://localhost:5029/images/treatment/${item.image}`} alt="" />
            </div>
          ))}
        </div>
        <div className="treatmentsCardContainer">
          {data?.slice(0, 3).map((item, index) => (
            <div className="card" key={index}>
              <img className='treatmentsCardImage' src={`http://localhost:5029/images/treatment/${item.image}`} alt="" />
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <a href="/services">Read more</a>
            </div>
          ))}
        </div>


      </section>
    </>
  )
}

export default Treatments
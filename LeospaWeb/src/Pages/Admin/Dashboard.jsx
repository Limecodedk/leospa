import React, { useEffect } from 'react'
import { FaRegEdit } from "react-icons/fa";
import useRequestData from '../../hooks/useRequestData'


const Dashboard = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/treatment")
    makeRequestService("http://localhost:5029/treatment")
  }, [])

  return (
    <>
      <section className='adminDashboard'>
        <div className="dashboardHeading">
          <h1>Dashboard <br />
            <span>Hey Admin!</span>
          </h1>
        </div>
        <div className="dashboardSetingsContainer">
          <div className="dashboardSetings">
            <h2>Treatment <span><FaRegEdit /> Edit</span></h2>
            {data?.slice(0, 5).map((item, index) => (
              <h3>{item.title}</h3>
            ))}
          </div>
          <div className="dashboardSetings">
            <h2>Hero <span><FaRegEdit /> Edit</span></h2>
          </div>
          <div className="dashboardSetings">
            <h2>Footer <span><FaRegEdit /> Edit</span></h2>
          </div>
        </div>

      </section>
    </>
  )
}

export default Dashboard
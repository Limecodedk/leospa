import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import useRequestData from '../../hooks/useRequestData'
import { Link } from 'react-router-dom';
import NewssubscriptionAdmin from './Newssubscription/NewssubscriptionAdmin';


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
        <div>
          <div className="dashboardHeading">
            <h1>Dashboard <br />
              <span>Hey Admin!</span>
            </h1>
          </div>
          <div className="dashboardSetingsContainer">
            <div className="dashboardSetings">
              <h2>Treatment
                <span>
                  <Link to={'treatment'}>
                    <FaRegEdit /> Edit
                  </Link>
                </span>
              </h2>
              {data?.slice(0, 5).map((item, index) => (
                <Link to={"/admin/treatment/" + item._id} key={index}>
                  <h3>{item.title}</h3>
                </Link>
              ))}
            </div>
            <div className="dashboardSetings">
              <h2>Hero <span><Link to={'hero'}><FaRegEdit /> Edit</Link></span></h2>
            </div>
            <div className="dashboardSetings">
              <h2>About <span><Link to={'about'}><FaRegEdit /> Edit</Link></span></h2>
            </div>
            <div className="dashboardSetings">
              <h2>Footer <span><Link to={'footer/edit'}><FaRegEdit /> Edit</Link></span></h2>
            </div>
            <div className="dashboardSetings twoCol">
              <h2>News subscription <span><Link to={'newssubscription'}><FaRegEdit /> Edit</Link></span></h2>
              <NewssubscriptionAdmin showHeader={false} numberOfItemsToShow={3} />
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default Dashboard
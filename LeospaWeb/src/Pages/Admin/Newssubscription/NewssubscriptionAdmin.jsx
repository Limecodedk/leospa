import React, { useEffect, useState } from 'react'
import useRequestData from '../../../hooks/useRequestData'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import Loader from '../../../components/Loader'

const NewssubscriptionAdmin = ({ showHeader, numberOfItemsToShow }) => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useRequestData()

  useEffect(() => {
    makeRequest("http://localhost:5029/newssubscription/admin/")
  }, [])

  const handleDelete = (id, name, email) => {
    if (window.confirm("Are you sure you want to delete " + name + " with this " + email + "?")) {
      makeRequestDelete("http://localhost:5029/newssubscription/admin/" + id,
        {
        }, null, "DELETE");
      window.location.reload();
    }
  }


  return (
    <>
      <section className='AdminTableContain'>
        {showHeader && <h1>News Subscription</h1>}
        <table>
          <thead>
            <tr>
              <th>Name:</th>
              <th>Email:</th>
              <td>Delete:</td>
            </tr>
          </thead>
          <tbody>
            {data && data.slice(0, numberOfItemsToShow).map((item, index) => (
              <tr key={index}>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.email}
                </td>
                <td>
                  <MdDeleteOutline
                    style={{ cursor: 'pointer' }}
                    size={"1.3em"}
                    onClick={() => handleDelete(item._id, item.name, item.email)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default NewssubscriptionAdmin
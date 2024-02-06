import React, { useEffect } from 'react'
import useRequestData from '../../hooks/useRequestData'
import parse from 'html-react-parser';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const Treatment = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/treatment")
    makeRequestService("http://localhost:5029/treatment")
  }, [])
  return (
    <>
      <section className='treamentAdminContainer'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr>
                <td>{item.title}</td>
                <td>{parse(item.content.slice(0, 50))}...</td>
                <td>{item.image}</td>
                <td>
                  <Link to={"/admin/treatment/" + item._id}>
                    <FaRegEdit />
                  </Link>
                </td>
                <td><MdDeleteOutline /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default Treatment
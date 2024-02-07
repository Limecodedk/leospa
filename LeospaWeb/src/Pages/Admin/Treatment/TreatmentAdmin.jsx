import React, { useEffect } from 'react'
import useRequestData from '../../../hooks/useRequestData'
import parse from 'html-react-parser';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const Treatment = () => {
  const { data, isLoading, error, makeRequest } = useRequestData()
  const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/treatment")

  }, [])

  const handleDelete = (id, title) => {
    if (window.confirm("Are you sure you want to delete " + title + "?")) {
      makeRequestDelete("http://localhost:5029/treatment/admin/" + id,
        {
        }, null, "DELETE")
    }
  }


  return (
    <>
      <section className='AdminTableContain'>
        <h1>Treament</h1>
        <table>
          <thead className='treamentAdminTable'>
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
              <tr key={index}>
                <td>{item.title}</td>
                <td>{parse(item.content.slice(0, 50))}...</td>
                <td>{item.image}</td>
                <td>
                  <Link to={"/admin/treatment/" + item._id}>
                    <FaRegEdit size={"1.3em"} />
                  </Link>
                </td>
                <td>
                  <MdDeleteOutline
                    style={{ cursor: 'pointer' }}
                    size={"1.3em"}
                    onClick={() => handleDelete(item._id, item.title)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <Link to={'create'} className='btn CreateBtn'>
            Create new
          </Link>
        </div>
      </section>
    </>
  )
}

export default Treatment
import React, { useEffect, useState } from 'react'
import useRequestData from '../../../hooks/useRequestData'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const HeroAdmin = () => {
  const [selectedHeroId, setSelectedHeroId] = useState('');
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/hero")
    makeRequestService("http://localhost:5029/hero")
  }, [])


  const handleHeroSelection = (heroId) => {
    setSelectedHeroId(heroId);
  }

  const handleDelete = (id, title) => {
    if (window.confirm("Are you sure you want to delete " + title + "?")) {
      makeRequestDelete("http://localhost:5029/hero" + id,
        {
        }, null, "DELETE")
    }
  }

  return (
    <>
      <section className='AdminTableContain'>
        <h1>Hero</h1>
        <table>
          <thead>
            <tr>
              <th>Active hero</th>
              <th>Sub title</th>
              <th>Title</th>
              <th>Content</th>
              <th>Link</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>

            {data?.map((item, index) => (
              <tr key={index}>
                <td>
                  <select name="activeHero" defaultValue={item.show} onChange={() => handleHeroSelection(item._id)}>
                    <option value="true">Activate</option>
                    <option value="false">Deactivate</option>
                  </select>
                </td>
                <td>{item.title1}</td>
                <td>{item.title2}</td>
                <td>{item.content}</td>
                <td>{item.link}</td>
                <td>
                  <Link to={"edit/" + item._id}>
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
          <Link to={'create'} className='btn heroCreateBtn'>
            Create new
          </Link>
        </div>
      </section>
    </>
  )
}

export default HeroAdmin
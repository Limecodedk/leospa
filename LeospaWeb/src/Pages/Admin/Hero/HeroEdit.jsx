import React, { useEffect } from 'react'
import useRequestData from '../../../hooks/useRequestData'
import { useParams } from 'react-router-dom';

const HeroEdit = () => {
  const { id } = useParams()
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/hero/" + id,)
    makeRequestService("http://localhost:5029/hero/" + id,)
  }, [])

  const handleSubmit = async e => {
    e.preventDefault();
    let fd = new FormData(e.target)
    await makeRequest("http://localhost:5029/hero/admin/" + id,
      {
        "Content-Type": "multipart/form-data"
      }, null, "PUT", fd
    )
  }

  return (
    <>
      <section className='editSection'>
        <h1>Edit {data?.title2} Hero </h1>

        <form className="editForm" onSubmit={handleSubmit}>
          <input type="text" name="title1" defaultValue={data?.title1} />
          <input type="text" name="title2" defaultValue={data?.title2} />
          <textarea name="content" cols="30" rows="10" defaultValue={data?.content}></textarea>
          <input type="text" name="link" defaultValue={data?.link} />
          <button type='submit' className='btn editBtn'>Save</button>
        </form>
      </section>
    </>
  )
}

export default HeroEdit
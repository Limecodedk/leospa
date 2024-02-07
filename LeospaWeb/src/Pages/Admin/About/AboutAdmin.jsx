import React, { useEffect } from 'react';
import useRequestData from '../../../hooks/useRequestData';

const AboutAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData();

  useEffect(() => {

    makeRequest("http://localhost:5029/about")
    makeRequestService("http://localhost:5029/about")
  }, [])

  const handleSubmit = async e => {
    e.preventDefault();
    let fd = new FormData(e.target)
    await makeRequest("http://localhost:5029/about/admin/",
      {
        "Content-Type": "multipart/form-data"
      }, null, "PUT", fd
    )
  }


  return (
    <section className='editSection'>
      <h1>About Edit</h1>
      <form action="" className='editForm' onSubmit={handleSubmit}>
        <input type="text" name="title" defaultValue={data?.title} />
        <textarea name="content" cols="30" rows="10" defaultValue={data?.content}></textarea>
        <button type='submit' className='btn editBtn'>Save</button>
      </form>
    </section>
  )
}

export default AboutAdmin
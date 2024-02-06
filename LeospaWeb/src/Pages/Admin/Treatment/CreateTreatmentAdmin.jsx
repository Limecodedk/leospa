import React, { useEffect } from 'react'
import useRequestData from '../../../hooks/useRequestData'

const CreateTreatmentAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/treatment")
    makeRequestService("http://localhost:5029/treatment")
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    let fd = new FormData(e.target)
    makeRequest("http://localhost:5029/treatment/admin",
      {
        "Content-Type": ""
      }, null, "POST", fd
    )
    e.target.reset()
  }

  return (
    <>
      <section className='editSection'>
        <h1>Create new Treatment </h1>
        <form className="editForm" onSubmit={e => handleSubmit(e)}>
          <input type="text" name="title" defaultValue={data?.title} />
          <textarea name="content" cols="30" rows="10" defaultValue={data?.content}></textarea>
          <input type="file" name="image" />
          <button type='submit' className='btn editBtn'>Save</button>
        </form>
      </section>
    </>
  )
}

export default CreateTreatmentAdmin
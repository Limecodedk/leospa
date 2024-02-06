import React, { useEffect } from 'react'
import useRequestData from '../../hooks/useRequestData'
import { useParams } from 'react-router-dom';

const EditTreatmentAdmin = () => {
  const { id } = useParams()
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/treatment/" + id,)
    makeRequestService("http://localhost:5029/treatment/" + id,)
  }, [])

  const handleSubmit = async e => {
    /* e.preventDefault();
    let fd = new FormData(e.target)
    await makeRequest("http://localhost:5029/treatment/" + id,
      {
        "Content-Type": "multipart/form-data"
      }, null, "PUT", fd
    )*/
  }

  return (
    <>
      <h1>Edit {data?.title} Treatment </h1>
      {
        data &&
        <form action="" className="treatmentForm">
          <input type="text" name="title" defaultValue={data.title} />
          <textarea name="content" cols="30" rows="10" defaultValue={data.content}></textarea>
          <input type="file" name="image" />
          <button type='submit' className='btn editBtn' onClick={handleSubmit}>Save</button>
        </form>
      }
    </>
  )
}

export default EditTreatmentAdmin
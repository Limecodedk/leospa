import React, { useEffect, useState } from 'react'
import useRequestData from '../../../hooks/useRequestData'
import { useParams } from 'react-router-dom';

const EditTreatmentAdmin = () => {
  const { id } = useParams()
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()
  const [isEdited, setIsEdited] = useState(false);
  const [editError, setEditError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const title = document.forms["heroCreate"]["title"].value;
    const content = document.forms["heroCreate"]["content"].value;
    const image = document.forms["heroCreate"]["image"].value;

    setErrorMessage("");

    if (title === "" || title2 === "" || content === "" || image === "") {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }

    return true;
  }

  useEffect(() => {

    makeRequest("http://localhost:5029/treatment/" + id,)
    makeRequestService("http://localhost:5029/treatment/" + id,)
  }, [])

  const handleSubmit = async e => {
    e.preventDefault();
    let fd = new FormData(e.target)
    try {
      await makeRequest("http://localhost:5029/treatment/admin/" + id,
        {
          "Content-Type": "multipart/form-data"
        }, null, "PUT", fd);
      setIsEdited(true);
      setEditError(null);
      window.location.reload();
    } catch (error) {
      setEditError(error.message);
    }
  }

  return (
    <>
      <section className='editSection'>
        <h1>Edit {data?.title} Treatment </h1>

        <form className="editForm" name='EditTreatment' onSubmit={e => handleSubmit(e)}>
          <input type="text" name="title" defaultValue={data?.title} />
          <textarea name="content" cols="30" rows="10" defaultValue={data?.content}></textarea>
          <input type="file" name="image" />
          <button type='submit' className='btn editBtn'>Save</button>
          <p style={{ color: 'red', fontSize: '0.8rem' }}>{errorMessage}</p>
        </form>
        {isEdited && <p>Success your changes are saved!</p>}
      </section>
    </>
  )
}

export default EditTreatmentAdmin
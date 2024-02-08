import React, { useEffect, useState } from 'react'
import useRequestData from '../../../hooks/useRequestData'

const validateForm = () => {
  const title = document.forms["heroCreate"]["title"].value;
  const content = document.forms["heroCreate"]["content"].value;
  const image = document.forms["heroCreate"]["image"].value;

  errorMessage.textContent = "";

  if (title === "" || title2 === "" || content === "" || image === "") {
    errorMessage.textContent = "Please fill in all required fields.";
    return false;
  }

  return true;
}

const CreateTreatmentAdmin = () => {
  const [isEdited, setIsEdited] = useState(false);
  const [editError, setEditError] = useState(null);
  const { data, isLoading, error, makeRequest } = useRequestData()

  const handleSubmit = e => {
    e.preventDefault();
    let fd = new FormData(e.target)
    try {
      makeRequest("http://localhost:5029/treatment/admin",
        {
          "Content-Type": ""
        }, null, "POST", fd);
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
        <h1>Create new Treatment </h1>
        <form className="editForm" name='CreateTreatment' onSubmit={e => handleSubmit(e)}>
          <input type="text" name="title" defaultValue={data?.title} />
          <textarea name="content" cols="30" rows="10" defaultValue={data?.content}></textarea>
          <input type="file" name="image" />
          <button type='submit' className='btn editBtn'>Save</button>
          <p id="errorMessage" style={{ color: 'red', fontSize: '0.8rem' }}></p>
        </form>
        {isEdited && <p>Success your changes are saved!</p>}
      </section>
    </>
  )
}

export default CreateTreatmentAdmin
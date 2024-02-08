import React, { useEffect, useState } from 'react';
import useRequestData from '../../../hooks/useRequestData';

const validateForm = () => {
  const title1 = document.forms["aboutEdit"]["title"].value;
  const title2 = document.forms["aboutEdit"]["content"].value;


  errorMessage.textContent = "";

  if (title1 === "" || title2 === "") {
    errorMessage.textContent = "Please fill in all required fields.";
    return false;
  }

  return true;
}



const AboutAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData();
  const [isEdited, setIsEdited] = useState(false);
  const [editError, setEditError] = useState(null);

  useEffect(() => {

    makeRequest("http://localhost:5029/about")
    makeRequestService("http://localhost:5029/about")
  }, [])

  const handleSubmit = async e => {
    e.preventDefault();
    if (validateForm()) {
      let fd = new FormData(e.target)
      try {
        await makeRequest("http://localhost:5029/about/admin/",
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
  };


  return (
    <section className='editSection'>
      <h1>About Edit</h1>
      <form action="" className='editForm' name='aboutEdit' onSubmit={handleSubmit}>
        <input type="text" name="title" defaultValue={data?.title} />
        <textarea name="content" cols="30" rows="10" defaultValue={data?.content}></textarea>
        <button type='submit' className='btn editBtn'>Save</button>
        <p id="errorMessage" style={{ color: 'red', fontSize: '0.8rem' }}></p>
      </form>
      {isEdited && <p>Success your changes are saved!</p>}
    </section>
  )
}

export default AboutAdmin
import React, { useEffect, useState } from 'react'
import useRequestData from '../../../hooks/useRequestData'
import { useParams } from 'react-router-dom';
import Error from '../../../components/Error';
import Loader from '../../../components/Loader'

const HeroEdit = () => {
  const { id } = useParams()
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()
  const [isEdited, setIsEdited] = useState(false);
  const [editError, setEditError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");


  const validateForm = () => {
    const title1 = document.forms["editHero"]["title1"].value;
    const title2 = document.forms["editHero"]["title2"].value;
    const content = document.forms["editHero"]["content"].value;
    const link = document.forms["editHero"]["link"].value;

    setErrorMessage("");

    if (title1 === "" || title2 === "" || content === "" || link === "") {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }

    return true;
  }


  useEffect(() => {

    makeRequest("http://localhost:5029/hero/" + id,)
    makeRequestService("http://localhost:5029/hero/" + id,)
  }, [])

  const handleSubmit = async e => {
    e.preventDefault();
    if (validateForm()) {
      let fd = new FormData(e.target)
      try {
        await makeRequest("http://localhost:5029/hero/admin/" + id,
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
    <>
      <section className='editSection'>
        <h1>Edit {data?.title2} Hero </h1>
        {isLoading && <Loader />}
        {error && <Error />}
        {editError && <p>{editError}</p>}
        <form className="editForm" name='editHero' onSubmit={handleSubmit}>
          <input type="text" name="title1" defaultValue={data?.title1} />
          <input type="text" name="title2" defaultValue={data?.title2} />
          <textarea name="content" cols="30" rows="10" defaultValue={data?.content}></textarea>
          <input type="text" name="link" defaultValue={data?.link} />
          <button type='submit' className='btn editBtn'>Save</button>
          <p style={{ color: 'red', fontSize: '0.8rem' }}>{errorMessage}</p>
        </form>
        {isEdited && <p>Success your changes are saved!</p>}
      </section>
    </>
  )
}

export default HeroEdit
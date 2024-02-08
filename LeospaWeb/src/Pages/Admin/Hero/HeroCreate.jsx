import React, { useEffect, useState } from 'react'
import useRequestData from '../../../hooks/useRequestData'

const HeroCreate = () => {
  const [selectedHeroId, setSelectedHeroId] = useState('');
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()
  const [isEdited, setIsEdited] = useState(false);
  const [editError, setEditError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");


  const validateForm = () => {
    const title1 = document.forms["heroCreate"]["title1"].value;
    const title2 = document.forms["heroCreate"]["title2"].value;
    const content = document.forms["heroCreate"]["content"].value;
    const link = document.forms["heroCreate"]["link"].value;

    setErrorMessage("");

    if (title1 === "" || title2 === "" || content === "" || link === "") {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }

    return true;
  }


  useEffect(() => {

    makeRequest("http://localhost:5029/hero")
    makeRequestService("http://localhost:5029/hero")
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      let fd = new FormData(e.target)
      try {
        makeRequest("http://localhost:5029/hero/admin",
          {
            "Content-Type": ""
          }, null, "POST", fd)
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
      <section className='createHero'>
        <h1>Create new Hero</h1>
        <form className="createHeroForm" name='heroCreate' onSubmit={e => handleSubmit(e)}>
          <input type="text" name="title1" placeholder='Subtitle' />
          <input type="text" name="title2" placeholder='Title' />
          <textarea name="content" cols="30" rows="10" placeholder='Content'></textarea>
          <input type="text" name="link" placeholder='Link to video' />
          <button type='submit' className='btn createHeroBtn'>Save</button>
          <p style={{ color: 'red', fontSize: '0.8rem' }}>{errorMessage}</p>
        </form>
        {isEdited && <p>Success your changes are saved!</p>}
      </section>
    </>
  )
}

export default HeroCreate
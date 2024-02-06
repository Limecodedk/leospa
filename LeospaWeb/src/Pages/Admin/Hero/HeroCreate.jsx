import React, { useEffect, useState } from 'react'
import useRequestData from '../../../hooks/useRequestData'


const HeroCreate = () => {
  const [selectedHeroId, setSelectedHeroId] = useState('');
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/hero")
    makeRequestService("http://localhost:5029/hero")
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
    let fd = new FormData(e.target)
    makeRequest("http://localhost:5029/hero",
      {
        "Content-Type": ""
      }, null, "POST", fd
    )
    e.target.reset()
  }

  return (
    <>
      <section className='createHero'>
        <h1>Create new Hero</h1>
        <form className="createHeroForm" onSubmit={e => handleSubmit(e)}>
          <select name="activeHero">
            <option value="true">Activate</option>
            <option value="false">Deactivate</option>
          </select>
          <input type="text" name="title1" placeholder='Subtitle' />
          <input type="text" name="title2" placeholder='Title' />
          <textarea name="content" cols="30" rows="10" placeholder='Content'></textarea>
          <input type="text" name="link" placeholder='Link to video' />
          <button type='submit' className='btn createHeroBtn'>Save</button>
        </form>
      </section>
    </>
  )
}

export default HeroCreate
import React, { useEffect, useState } from 'react'
import useRequestData from '../../hooks/useRequestData'

const FooterEdit = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/footer")
    makeRequestService("http://localhost:5029/footer")
  }, [])
  return (
    <>
      <section className='editSection'>
        <h1>Edit Footer</h1>
        <form className="editForm">
          <input type="text" name="name" defaultValue={data?.name} />
          <input type="number" name="cvr" defaultValue={data?.cvr} />
          <input type="text" name="address" defaultValue={data?.address} />
          <input type="text" name="zipncity" defaultValue={data?.zipncity} />
          <input type="tel" name="phone" defaultValue={data?.phone} />
          <input type="email" name="email" defaultValue={data?.email} />
          <input type="text" name="openinghours" defaultValue={data?.openinghours} />
          <button type='submit' className='btn editBtn'>Save</button>
        </form>
      </section>
    </>
  )
}

export default FooterEdit
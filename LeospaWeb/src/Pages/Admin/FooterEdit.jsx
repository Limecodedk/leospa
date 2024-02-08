import React, { useEffect, useState } from 'react'
import useRequestData from '../../hooks/useRequestData'
import Error from '../../components/Error';
import Loader from '../../components/Loader'

const validateForm = () => {
  const name = document.forms["editFooter"]["name"].value;
  const cvr = document.forms["editFooter"]["cvr"].value;
  const address = document.forms["editFooter"]["address"].value;
  const zipncity = document.forms["editFooter"]["zipncity"].value;
  const phone = document.forms["editFooter"]["phone"].value;
  const email = document.forms["editFooter"]["email"].value;
  const openinghours = document.forms["editFooter"]["openinghours"].value;
  errorMessage.textContent = "";

  if (!email.includes("@") || !email.includes(".")) {
    errorMessage.textContent = "Please enter a valid email address.";
    return false;
  }

  if (!/^\d+$/.test(phone) || phone.length < 8) {
    errorMessage.textContent = "Please enter a valid phone number (at least 8 digits).";
    return false;
  }
  if (name === "" || cvr === "" || address === "" || zipncity === "" || phone === "" || email === "" || openinghours === "") {
    errorMessage.textContent = "Please fill in all required fields.";
    return false;
  }

  return true;
}

const FooterEdit = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()
  const [isEdited, setIsEdited] = useState(false);
  const [editError, setEditError] = useState(null);

  useEffect(() => {

    makeRequest("http://localhost:5029/footer")
    makeRequestService("http://localhost:5029/footer")
  }, [])

  const handleSubmit = async e => {
    let fd = new FormData(e.target)
    try {
      await makeRequest("http://localhost:5029/footer/admin/",
        {
          "Content-Type": "multipart/form-data"
        }, null, "PUT", fd);
      setIsEdited(true);
      setEditError(null);
      window.location.reload();
    } catch (error) {
      setEditError(error.message);
    }
  };

  return (
    <>
      <section className='editSection'>
        <h1>Edit Footer</h1>
        {isLoading && <Loader />}
        {error && <Error />}
        <form className="editForm" name='editFooter' onSubmit={handleSubmit}>
          <input type="text" name="name" defaultValue={data?.name} />
          <input type="number" name="cvr" defaultValue={data?.cvr} />
          <input type="text" name="address" defaultValue={data?.address} />
          <input type="text" name="zipncity" defaultValue={data?.zipncity} />
          <input type="tel" name="phone" defaultValue={data?.phone} />
          <input type="email" name="email" defaultValue={data?.email} />
          <input type="text" name="openinghours" defaultValue={data?.openinghours} />
          <button type='submit' className='btn editBtn'>Save</button>
          <p id="errorMessage" style={{ color: 'red', fontSize: '0.8rem' }}></p>
        </form>
        {isEdited && <p>Success your changes are saved!</p>}
      </section>
    </>
  )
}

export default FooterEdit
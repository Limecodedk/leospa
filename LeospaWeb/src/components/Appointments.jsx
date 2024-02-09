import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData'
import Error from './Error';
import Loader from './Loader'

const Appointments = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()
  const [createdAppointmentId, setCreatedAppointmentId] = useState(null);

  const validateForm = () => {
    const email = document.forms["yourAppointments"]["email"].value;
    const phone = document.forms["yourAppointments"]["phone"].value;

    setErrorMessage("");

    if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    if (!/^\d+$/.test(phone) || phone.length < 8) {
      setErrorMessage("Please enter a valid phone number (at least 8 digits).");
      return false;
    }

    if (email === "" || phone === "") {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }

    return true;
  };

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${day}/${month}-${year} ${hours}:${minutes}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formData = new FormData(e.target);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      console.log("formData successfully validated!!", formObject);

      let fd = new FormData(e.target)
      makeRequest("http://localhost:5029/appointment/myappointments",
        {
          "Content-Type": ""
        }, null, "POST", fd
      )
      e.target.reset()
    }
  };

  return (
    <>
      <section className='appointments'>
        <div className='appointmentsHeading'>
          <img className="appointmentsHeadingImage" src="/public/assets/butterfly.png" alt="butterfly" />
          <h1>Treatment</h1>
          <p>Do you have an appointment? Find it here:</p>
          <div className="line appointmentsLine"></div>
        </div>
        {isLoading && <Loader />}
        {error && <Error />}
        {data && data.length > 0 ? (
          <div className="tableContain">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{formatDate(item.dateandtime)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className='appointmentsMessage'>Please enter your phone number and email</p>
        )}

        <form className="yourAppointmentsForm" name="yourAppointments" onSubmit={e => handleSubmit(e)} >
          <input type="email" name="email" placeholder='Email' />
          <input type="phone" name='phone' placeholder='Phone' />

          <button type='submit' className='btn editBtn'>Show Appointments</button>
          <p style={{ color: 'red', fontSize: '0.8rem' }}>{errorMessage}</p>
        </form>
      </section>
    </>
  )
}

export default Appointments
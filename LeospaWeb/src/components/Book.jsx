import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData'

const Book = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  const validateForm = () => {
    const name = document.forms["bookForm"]["name"].value;
    const email = document.forms["bookForm"]["email"].value;
    const service = document.forms["bookForm"]["treatment"].value;
    const phone = document.forms["bookForm"]["phone"].value;
    const date = document.forms["bookForm"]["date"].value;
    const time = document.forms["bookForm"]["time"].value;
    const messages = document.forms["bookForm"]["message"].value;

    setErrorMessage("");

    if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    if (!/^\d+$/.test(phone) || phone.length < 8) {
      setErrorMessage("Please enter a valid phone number (at least 8 digits)");
      return false;
    }

    const hasScript = /<script.*?>|<\/script>/gi.test(messages);
    if (hasScript) {
      setErrorMessage("Message cannot contain scripts.");
      return false;
    }

    if (name === "" || email === "" || service === "massage" || phone === "" || date === "" || time === "" || messages === "") {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }

    return true;
  }


  useEffect(() => {

    makeRequest("http://localhost:5029/appointment/admin")
    makeRequestService("http://localhost:5029/appointment/admin")
  }, [])

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const minDate = tomorrow.toISOString().split('T')[0];
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 6, today.getDate()).toISOString().split('T')[0];
    const dateInput = document.getElementsByName("date")[0];
    dateInput.setAttribute("min", minDate);
    dateInput.setAttribute("max", maxDate);

    const timeInput = document.getElementsByName("time")[0];
    timeInput.setAttribute("min", "08:00");
    timeInput.setAttribute("max", "16:00");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const formData = new FormData(event.target);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      console.log("formData successfully validated!!", formObject);

      let fd = new FormData(event.target)
      makeRequest("http://localhost:5029/appointment/",
        {
          "Content-Type": ""
        }, null, "POST", fd
      )
      event.target.reset()
    }
  };

  return (
    <section className='bookContainer'>
      <div className="bookImage">
        <img src="/public/assets/appointment-img.jpg" alt="woman getting scalp massage" />
      </div>
      <div className="bookFormContainer">
        <form name="bookForm" onSubmit={handleSubmit} className='bookForm'>
          <input type="text" name="name" placeholder='NAME' />
          <input type="email" name='email' placeholder='EMAIL ADDRESS' />
          <select name="treatment" defaultValue="massage">
            <option value="massage">SELECT SERVICE</option>
            <option value="607b505b2bb5b518589e4d1f">SPA Massage</option>
            <option value="607b4e662bb5b518589e4d1d">Waxing</option>
          </select>
          <input type="tel" name="phone" placeholder='PHONE NUMBER' />
          <input type="date" name="date" />
          <input type="time" name="time" />
          <textarea name="message" id='message' cols="30" rows="3" placeholder='YOUR NOTES'></textarea>
          <button type='submit' className='btn btn-book'>MAKE AN APPOINTMENT</button>
          <p style={{ color: 'red', fontSize: '0.8rem' }}>{errorMessage}</p>
        </form>
      </div>
    </section>
  )
}

export default Book
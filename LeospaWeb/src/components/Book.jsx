import React, { useEffect } from 'react'

const validateForm = () => {
  const name = document.forms["bookForm"]["name"].value;
  const email = document.forms["bookForm"]["email"].value;
  const service = document.forms["bookForm"]["service"].value;
  const phone = document.forms["bookForm"]["phone"].value;
  const date = document.forms["bookForm"]["date"].value;
  const time = document.forms["bookForm"]["time"].value;
  const messages = document.forms["bookForm"]["message"].value;

  errorMessage.textContent = "";

  if (!email.includes("@") || !email.includes(".")) {
    errorMessage.textContent = "Please enter a valid email address.";
    return false;
  }

  if (!/^\d+$/.test(phone) || phone.length < 8) {
    errorMessage.textContent = "Please enter a valid phone number (at least 8 digits).";
    return false;
  }

  const hasScript = /<script.*?>|<\/script>/gi.test(messages);
  if (hasScript) {
    errorMessage.textContent = "Message cannot contain scripts.";
    return false;
  }

  if (name === "" || email === "" || service === "massage" || phone === "" || date === "" || time === "" || messages === "") {
    errorMessage.textContent = "Please fill in all required fields.";
    return false;
  }

  return true;
}

const Book = () => {
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
    }
  };

  return (
    <section className='bookContainer'>
      <div className="bookImage">
        <img src="/public/assets/appointment-img.jpg" alt="" />
      </div>
      <div className="bookFormContainer">
        <form name="bookForm" onSubmit={handleSubmit} className='bookForm'>
          <input type="text" name="name" placeholder='NAME' />
          <input type="email" name='email' placeholder='EMAIL ADDRESS' />
          <select name="service" defaultValue="massage">
            <option value="massage">SELECT SERVICE</option>
            <option value="hair">Hair</option>
            <option value="waxing">Waxing</option>
          </select>
          <input type="tel" name="phone" placeholder='PHONE NUMBER' />
          <input type="date" name="date" />
          <input type="time" name="time" />
          <textarea name="message" id='message' cols="30" rows="3" placeholder='YOUR NOTES'></textarea>
          <button type='submit' className='btn btn-book'>MAKE AN APPOINTMENT</button>
          <p id="errorMessage" style={{ color: 'red', fontSize: '0.8rem' }}></p>
        </form>
      </div>
    </section>
  )
}

export default Book
import React, { useState } from 'react'

const Newssubscription = () => {
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const name = document.forms["subscriptionForm"]["name"].value;
    const email = document.forms["subscriptionForm"]["email"].value;

    setErrorMessage("");

    if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    if (name === "" || email === "") {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }

    return true;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const unsubscribe = isUnsubscribed;

    try {
      let response;
      if (validateForm()) {
        if (unsubscribe) {
          formData.append('email', email);
          response = await fetch(`http://localhost:5029/newssubscription/afmeld`, {
            method: "DELETE",
            body: formData
          });
        } else {
          response = await fetch(`http://localhost:5029/newssubscription`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: formData.get('name'), email })
          });
        }
      }

      if (response.ok) {
        setIsSubscribe(true);
        window.location.reload();
      } else {
        console.error("Failed to make the request:", response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    e.target.reset();
  }

  return (
    <>
      <form className='newssubscription' name='subscriptionForm' onSubmit={e => handleSubmit(e)}>
        <div className="inputContainer">
          <input type="text" name="name" placeholder='Your name' />
          <input type="email" name="email" placeholder='Your Email' />
        </div>
        <div className="checkboxButtonContainer">
          <div className="checkboxContainer">
            <label htmlFor="unsubscribe">Unsubscribe? </label>
            <input
              type="checkbox"
              name="unsubscribe"
              id="unsubscribe"
              onChange={e => setIsUnsubscribed(e.target.checked)}
            />
          </div>
          <button type='submit'>Submit</button>
        </div>
        <p style={{ color: 'red', fontSize: '0.8rem' }}>{errorMessage}</p>
      </form>
      {isSubscribe && <p>Success you subscribe now!</p>}
    </>
  )
}

export default Newssubscription

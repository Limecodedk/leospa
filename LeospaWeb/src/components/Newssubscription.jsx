import React, { useState } from 'react'

const Newssubscription = () => {
  const [isUnsubscribed, setIsUnsubscribed] = useState(false);


  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const unsubscribe = isUnsubscribed;

    try {
      let response;
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

      if (response.ok) {
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
      <form className='newssubscription' onSubmit={e => handleSubmit(e)}>
        <div className="inputContainer">
          <input type="text" name="name" placeholder='Your name' required />
          <input type="email" name="email" placeholder='Your Email' required />
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
      </form>
    </>
  )
}

export default Newssubscription

import React from 'react'

const Book = () => {
  return (
    <section className='bookContainer'>
      <div className="bookImage">
        <img src="/public/assets/appointment-img.jpg" alt="" />
      </div>
      <div className="bookFormContainer">
        <form action="" className='bookForm'>
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
        </form>
      </div>
    </section>
  )
}

export default Book
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const eventsData = [
  {
    title: "Women night",
    image: "/public/assets/extra_procedures_etc/1.jpg",
    text: "It's time to relax and enjoy a whole evening in good company",
    date: "20/03-2024, kl: 18:00"

  },
  {
    title: "Presentation",
    image: "/public/assets/extra_procedures_etc/2.jpg",
    text: "Love taking care of your body too? Now you have the opportunity to be the first to try our new products.",
    date: "28/02-2024, kl: 14:00"
  },
  {
    title: "The Stress Handle",
    image: "/public/assets/extra_procedures_etc/3.jpg",
    text: "Now you can join when Ole Henriksen hosts a lecture and shares tips and tricks for everyday life.",
    date: "04/03-2024, kl: 16:00"
  },
  {
    title: "Massage",
    image: "/public/assets/extra_procedures_etc/4.jpg",
    text: "It's time again to get a massage from Paul. You'll also receive tips and tricks.",
    date: "08/03-2024, kl: 16:00"
  },
  {
    title: "Presentation",
    image: "/public/assets/extra_procedures_etc/1.jpg",
    text: "Love taking care of your body too? Now you have the opportunity to be the first to try our new products.",
    date: "28/03-2024, kl: 14:00"
  },
  {
    title: "Women night",
    image: "/public/assets/extra_procedures_etc/2.jpg",
    text: "It's time to relax and enjoy a whole evening in good company",
    date: "20/04-2024, kl: 18:00"

  },
];

const Features = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <section className='featuresSection'>
        <div className='featuresHeading'>
          <img className="featuresHeadingImage" src="/public/assets/butterfly.png" alt="butterfly" />
          <h1>SPA-/beauty-events</h1>
          <p className='featuresHeading'>To doesn´t his appear replenish together called he of mad place won´t <br />
            wherein blessed second every wherein were meat kind wherein and martcin</p>
          <div className="line featuresLine"></div>
        </div>
        <div className="eventsContainer">
          {eventsData.map((item, index) => (
            <div className="eventCard" key={index}>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p className='featuresContent'>{item.text}</p>
              <div className="signup">
                <p>{item.date}</p>
                <button onClick={openModal} className='btn featuresBtn'>Sign up</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {showModal && (
        <div className="Eventmodal">
          <div className="eventModalContent">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Event Sign up</h2>
            <form action="" className='eventForm'>
              <input type="text" name="name" placeholder='NAME' required />
              <input type="email" name="mail" placeholder='EMAIL' required />
              <input type="tel" name="phone" placeholder='PHONE' required />
              <select name="service" defaultValue="massage">
                <option value="massage">Select number of people</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <button type='submit' className='btn eventBtn'>Book</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Features
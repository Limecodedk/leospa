import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const eventsData = [
  {
    title: "Pigeaften",
    image: "/public/assets/extra_procedures_etc/1.jpg",
    text: "Kalder alle piger. Nu er det tid til at slappe af og nyde en hel aften i godt selvskab"
  },
  {
    title: "Præsentation",
    image: "/public/assets/extra_procedures_etc/2.jpg",
    text: "Elsker du også at passe på kroppen. Nu har du muligheden for at være en af de første som prøver vores nye produkter"
  },
  {
    title: "Slip stressen fordrag",
    image: "/public/assets/extra_procedures_etc/3.jpg",
    text: "Nu kan du komme med når Ole henriksen holder fordrag og kommer med tips og tricks til en hverdage"
  }
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
      <section className='FeaturesSection'>
        <h1>SPA-/beauty-events</h1>
        <div className="eventsContainer">
          {eventsData.map((item, index) => (
            <div className="eventCard" key={index}>
              <h2>{item.title}</h2>
              <img src={item.image} alt="" />
              <p>{item.text}</p>
              <button onClick={openModal} className='btn event-btn'>Sign up</button>
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
              <input type="text" name="name" placeholder='NAME' />
              <input type="email" name="mail" placeholder='EMAIL' />
              <input type="tel" name="phone" placeholder='PHONE' />
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
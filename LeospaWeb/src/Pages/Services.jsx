import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData'
import parse from 'html-react-parser';
import Book from '../components/Book';
import { Link } from 'react-router-dom';

const Services = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/treatment")
    makeRequestService("http://localhost:5029/treatment")
  }, [])

  const limitWords = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return text;
  };

  const toggleCard = (index) => {
    setExpandedCards(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <>
      <section className='serviceContainer'>
        <div className='serviceHeading'>
          <img className="serviceHeadingImage" src="/public/assets/butterfly.png" alt="butterfly" />
          <h1>Treatment</h1>
          <p className='serviceHeading'>To doesn´t his appear replenish together called he of mad place won´t <br />
            wherein blessed second every wherein were meat kind wherein and martcin</p>
          <div className="line serviceLine"></div>
        </div>
        <div className="treatmentCardContainer">
          {data?.map((cardItem, index) => (
            <div className="treatmentCard" key={index}>
              <img className='treatmentCardImage' src={`http://localhost:5029/images/treatment/${cardItem.image}`} alt="treatment product images" />
              <div className='treatmentCardContent'>
                <h2>{cardItem.title}</h2>
                {expandedCards[index]
                  ? parse(cardItem.content)
                  : parse(limitWords(cardItem.content, 15))}
              </div>
              <div className='btnContainer'>
                <div>{cardItem.content.split(' ').length > 20 && (
                  <button onClick={() => toggleCard(index)} className='btn serviceCardShowMoreBtn'>
                    {expandedCards[index] ? "Vis mindre" : "Læs mere"}
                  </button>
                )}</div>
                <div>
                  <a href="#book" className='btn serviceCardBookBtn'>
                    Book
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id='book'>
          <Book />
        </div>
      </section>
    </>
  )
}

export default Services
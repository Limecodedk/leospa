import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData'
import parse from 'html-react-parser';

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
      <section className='ServiceContainer'>
        <h1>Treatment</h1>
        <p>To doesn´t his appear replenish together called he of mad place won´t <br />
          wherein blessed second every wherein were meat kind wherein and martcin</p>
        <div className="treatmentCardContainer">
          {data?.map((cardItem, index) => (
            <div className="treatmentCard" key={index}>
              <h2>{cardItem.title}</h2>
              <img className='treatmentCardImage' src={`http://localhost:5029/images/treatment/${cardItem.image}`} alt="" />
              <div>
                {expandedCards[index]
                  ? parse(cardItem.content)
                  : parse(limitWords(cardItem.content, 20))}
              </div>
              {cardItem.content.split(' ').length > 20 && (
                <button onClick={() => toggleCard(index)} className='btn serviceCardBtn'>
                  {expandedCards[index] ? "Vis mindre" : "Læs mere"}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

    </>
  )
}

export default Services
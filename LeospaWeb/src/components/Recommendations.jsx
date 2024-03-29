import React, { useEffect } from "react";
import Slider from "react-slick";
import useRequestData from '../hooks/useRequestData'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Recommendations = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { data: dataService, isLoading: isLoadingService, error: errorService, makeRequest: makeRequestService } = useRequestData()

  useEffect(() => {

    makeRequest("http://localhost:5029/recommendation/antal/3")
    makeRequestService("http://localhost:5029/recommendation/antal/3")
  }, [])


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <section className="RecommendationsContainer">
        <div className="quoteImage" >
          <img src="/public/assets/quote.png" alt="" />
        </div>
        <Slider {...settings}>
          {data?.map((item, index) => (
            <div key={index} className="RecommendationsSlider">
              <p>{item.content}</p>
              <img src={`http://localhost:5029/images/recommendation/${item.image}`} alt="Recommendations profile picture " />
              <h2>{item.name}, <span>{item.title}</span></h2>
            </div>
          ))}

        </Slider>
      </section>
    </>
  )
}

export default Recommendations
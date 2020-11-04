
import React from 'react';
import 'swiper/css/swiper.css'
import Swiper from 'react-id-swiper';


const CaraouselContainer = (props) => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }

  return(
    <Swiper {...params}>
      <div className="carousel-items">
        <img  src="https://in.bmscdn.com/showcaseimage/eventimage/clean-jokes-only-22-10-2020-02-18-37-452.jpg"/>
      </div>
      <div className="carousel-items">
        <img  src="https://in.bmscdn.com/showcaseimage/eventimage/clean-jokes-only-22-10-2020-02-18-37-452.jpg"/>
      </div>
      <div className="carousel-items">
        <img  src="https://in.bmscdn.com/showcaseimage/eventimage/clean-jokes-only-22-10-2020-02-18-37-452.jpg"/>
      </div>
    </Swiper>
  )
}

export default CaraouselContainer;

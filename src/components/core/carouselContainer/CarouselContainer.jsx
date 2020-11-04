
import React from 'react';
import 'swiper/css/swiper.css'
import Swiper from 'react-id-swiper';
import "./CarouselContainer.css";
import * as Constants from "../../../constants"


const CaraouselContainer = (props) => {
  const params = {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }

  return(
    <Swiper {...params}>
      {Constants.BANNER_IMAGES.map((banner) =>
        <div className="carousel-items">
          <img  src={banner} className="banner-img"/>
        </div>
      )}
    </Swiper>
  )
}

export default CaraouselContainer;

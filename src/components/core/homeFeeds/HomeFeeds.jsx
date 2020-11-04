import React from 'react';
import 'swiper/css/swiper.css'
import Swiper from 'react-id-swiper';
import * as Constants from "../../../constants"
import "./HomeFeeds.css"


const HomeFeeds = (props) => {
  const params = {
    slidesPerView: 1,
       spaceBetween: 10,
       // init: false,
       pagination: {
         el: '.swiper-pagination',
         clickable: true,
       },
       breakpoints: {
         '@0.00': {
           slidesPerView: 1,
           spaceBetween: 10,
         },
         '@0.75': {
           slidesPerView: 2,
           spaceBetween: 20,
         },
         '@1.00': {
           slidesPerView: 3,
           spaceBetween: 40,
         },
         '@1.50': {
           slidesPerView: 4,
           spaceBetween: 50,
         },
       }
  }


  return(
    <Swiper {...params}>
     {Constants.MOVIES_LIST_DTO.map((recommended) =>
       <div className="carousel-items" key={recommended.movieId} onClick={() => props.movieDetails(recommended)}>
         <img  src={recommended.movieImg} className="recommended-movies"/>
       </div>
     )}
    </Swiper>
  )
}

export default HomeFeeds

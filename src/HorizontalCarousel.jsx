import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import data
import { data } from "./data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import "./App.css";

// import required modules
import { Pagination, Navigation, Scrollbar } from "swiper";

export const HorizontalCarousel = () => {
  return (
    <div>
      <Swiper
      breakpoints={{

        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },

        // when window width is >= 480px
        480: {
          slidesPerView: 1,
        },

        // when window width is >= 640px
        640: {
          slidesPerView: 2,
        },

        // when window width is >= 768px
        768: {
          slidesPerView: 3,
        },

        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
        },
      }}
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        scrollbar={{ dragSize: 100, draggable: false }}
        navigation={true}
        modules={[Pagination, Navigation, Scrollbar]}
        className="mySwiper"
      >
        { data.map(user => (
          <SwiperSlide key={ user.id } className='slider'>
            <div className="overlay"></div>
            <img src={ user.linkImg } alt='Test NFT' />
            
            <div className="info">
              <h2>{ user.title }</h2>
              <h4>{ user.price }</h4>
              <p>{ user.category }</p>
            </div>
          </SwiperSlide>
        )) }
      </Swiper>
    </div>
  )
}

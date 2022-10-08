import React from 'react'
import './Carousel.css'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const Carousel = () => {

    return (
         <>
      <Swiper
           style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
</SwiperSlide>
        <SwiperSlide>          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
</SwiperSlide>
      </Swiper>
    </>
    )
}
export default Carousel
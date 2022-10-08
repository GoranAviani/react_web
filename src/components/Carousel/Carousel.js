import React from 'react'
import './Carousel.css'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import {image1, image2} from "../../static/images/images";
import Typography from '@mui/material/Typography';

const TEXT = {
    handSewnOrganicWool: "Hand sewn organic wool"
}

const Carousel = () => {
    console.log({image1})
    return (
         <>
      <Swiper
           style={{
          "--swiper-navigation-color": "#696969",
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
        <SwiperSlide>
            <img src={image2} />
          <div className="text" data-swiper-parallax="-100">
            <Typography sx={{fontWeight: 'bold'}} variant="h4"
                                        component="div">
                                {TEXT.handSewnOrganicWool}
                            </Typography>
          </div>
</SwiperSlide>
        <SwiperSlide>
            <img src={image2} />
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
</SwiperSlide>
      </Swiper>
    </>
    )
}
export default Carousel
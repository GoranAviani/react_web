import React from 'react'
import './Carousel.css'
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {Autoplay, Pagination, Navigation} from "swiper";
import {image1, image2} from "../../static/images/images";
import CarouselText from "./partials/CarouselText";

const Carousel = () => {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#696969",
                    "--swiper-pagination-color": "#696969",
                }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 15000,
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
                    <img src={image1}/>
                    <CarouselText/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2}/>
                    <CarouselText/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Carousel
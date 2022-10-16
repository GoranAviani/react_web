import React from 'react';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Spacer from "../../Spacer";
import './CarouselText.css'
import useWindowDimensions from "../../hooks/WindowDimension/useWindowDimensions";

const TEXT = {
    handSewnOrganicWool: "Hand Knit With Organic Wool",
    winterOffer: "Winter offer",
    collectionTwoTwenty: "2022 Colletction",
    shopNow: "Shop Now"
}

const CarouselText = () => {
    const {isMobile} = useWindowDimensions()
    return (
        <div className="carousel-text">
            <Typography variant={isMobile ? "h6" : "h5"}>
                {TEXT.handSewnOrganicWool}
            </Typography>
            <Spacer size={isMobile ? 55 : 35}/>

            <Typography variant={isMobile ? "h4" : "h3"}>
                {TEXT.winterOffer}
            </Typography>
            <Typography variant={isMobile ? "h4" : "h3"}>
                {TEXT.collectionTwoTwenty}
            </Typography>
            <Spacer axis="vertical" size={isMobile ? 70 : 80}/>

            <Button style={{
                borderRadius: 0,
                color: "#000",
                borderColor: "#000",
                padding: "15px 36px",
                fontSize: "18px"
            }} variant="outlined" href="/all_products">{TEXT.shopNow}</Button>
        </div>
    )
}

export default CarouselText
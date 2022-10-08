import React from 'react';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Spacer from "../../Spacer";
const TEXT = {
    handSewnOrganicWool: "Handsewn With Organic Wool",
    winterOffer: "Winter offer",
    collectionTwoTwenty: "2022 Colletction",
    shopNow: "Shop Now"
}

const CarouselText = () => {

    return(
        <div className="text" data-swiper-parallax="-100">
            <Typography variant="h5"
                                        component="div">
                                {TEXT.handSewnOrganicWool}
                            </Typography>
            <Spacer size={36} />

                  <Typography variant="h3"
                                        component="div">
                                {TEXT.handSewnOrganicWool}
                            </Typography>
                  <Typography variant="h3"
                                        component="div">
                                {TEXT.collectionTwoTwenty}
                            </Typography>
                        <Spacer size={36} />

            <Button  style={{
        borderRadius: 0,
                color: "#000",
                borderColor: "#000",
        padding: "18px 36px",
        fontSize: "18px"
    }} variant="outlined">{TEXT.shopNow}</Button>
          </div>
    )
}

export default CarouselText
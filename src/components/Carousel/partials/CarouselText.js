import React from 'react';
import Typography from "@mui/material/Typography";
const TEXT = {
    handSewnOrganicWool: "Handsewn With Organic Wool",
    winterOffer: "Winter offer",
    collectionTwoTwenty: "2022 Colletction"
}

const CarouselText = () => {

    return(
        <div className="text" data-swiper-parallax="-100">
            <Typography variant="h5"
                                        component="div">
                                {TEXT.handSewnOrganicWool}
                            </Typography>
                  <Typography variant="h3"
                                        component="div">
                                {TEXT.handSewnOrganicWool}
                            </Typography>
                  <Typography variant="h3"
                                        component="div">
                                {TEXT.collectionTwoTwenty}
                            </Typography>
          </div>
    )
}

export default CarouselText
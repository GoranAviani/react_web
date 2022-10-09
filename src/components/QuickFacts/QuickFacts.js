import React from 'react'
import './QuickFacts.css'
import {sheep_64, knitting_64, shipped_64, planet_earth_64} from "../../static/icons/icons";
import Spacer from "../Spacer";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

const TEXT = {
    weUseOnlyOrganicWool: "Ecologic organic wool",
    allOurProductsAreHandKnitted: "100% hand knitted",
    forPeopleAndPlanet: "For people and planet",
    greenDelivery: "Green delivery",
    readMore: "Read more"
}
const QuickFacts = () => {

    return (
        <>
            <Spacer axis="vertical" size={25}/>

            <div className="quickFacts">

                <div className="quickFactsInfo">
                    <div className="quickFactsInfoLeftSide">
                        <img src={sheep_64}/>
                    </div>
                    <div className="quickFactsInfoRightSide">
                        <Typography sx={{fontWeight: 'bold'}} variant="h6"
                                    component="div">
                            {TEXT.weUseOnlyOrganicWool}
                        </Typography>
                        <Link
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                        >
                            {TEXT.readMore}
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={knitting_64}/>

                </div>
                <div>
                    <img src={shipped_64}/>
                </div>
                <div>
                    <img src={planet_earth_64}/>
                </div>


            </div>

        </>

    )
}

export default QuickFacts
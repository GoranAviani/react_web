import React from 'react'

import './QuickFacts.css'
import {
    sheep_64,
    sheep_color_64,
    sheep_color_128,
    knitting_64,
    shipped_64,
    planet_earth_64
} from "../../static/icons/icons";
import Spacer from "../Spacer";
import QuickFactsInfoRightSide from "./partials/QuickFactsInfoRightSide";
import QuickFactsInfoLeftSide from "./partials/QuickFactsInfoLeftSide";
import OurWool from "./ExtraPages/OurWool";
import Knitting from "./ExtraPages/Knitting";
import GreenDelivery from "./ExtraPages/GreenDelivery";
import PeopleAndPlanet from "./ExtraPages/PeopleAndPlanet";

const TEXT = {
    weUseOnlyOrganicWool: "Ecologic organic wool",
    allOurProductsAreHandKnitted: "100% hand knitted",
    greenDelivery: "Green delivery",
    forPeopleAndPlanet: "For people and planet",
    readMore: "Read more"
}
const QuickFacts = () => {

    return (
        <>
            <Spacer axis="vertical" size={25}/>
            <div className="quickFacts">
                <div className="quickFactsInfo">
                    <QuickFactsInfoLeftSide src={sheep_64}/>
                    <QuickFactsInfoRightSide text={TEXT.weUseOnlyOrganicWool} linkText={TEXT.readMore}
                                             component={<OurWool/>}
                                             imageSrc={{small: sheep_color_64, big: sheep_color_128}}/>
                </div>
                <div className="quickFactsInfo">
                    <QuickFactsInfoLeftSide src={knitting_64}/>
                    <QuickFactsInfoRightSide text={TEXT.allOurProductsAreHandKnitted} linkText={TEXT.readMore}
                                             component={<Knitting/>}/>

                </div>
                <div className="quickFactsInfo">
                    <QuickFactsInfoLeftSide src={shipped_64}/>
                    <QuickFactsInfoRightSide text={TEXT.greenDelivery} linkText={TEXT.readMore}
                                             component={<GreenDelivery/>}/>

                </div>
                <div className="quickFactsInfo">
                    <QuickFactsInfoLeftSide src={planet_earth_64}/>
                    <QuickFactsInfoRightSide text={TEXT.forPeopleAndPlanet} linkText={TEXT.readMore}
                                             component={<PeopleAndPlanet/>}/>
                </div>


            </div>

        </>

    )
}

export default QuickFacts
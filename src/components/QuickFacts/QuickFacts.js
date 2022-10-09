import React from 'react'
import './QuickFacts.css'
import {sheep_64, knitting_64, shipped_64, planet_earth_64} from "../../static/icons/icons";
import Spacer from "../Spacer";
import QuickFactsInfoRightSide from "./partials/QuickFactsInfoRightSide";
import QuickFactsInfoLeftSide from "./partials/QuickFactsInfoLeftSide";
import {ourWoolUrl, knittingUrl, greenDeliveryUrl, peopleAndPlanetUrl} from "../../Route_urls";
import OurWool from "./ExtraPages/OurWool";

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
                                             component={<OurWool/>}/>
                </div>
                <div className="quickFactsInfo">
                    <QuickFactsInfoLeftSide src={knitting_64}/>
                    <QuickFactsInfoRightSide text={TEXT.allOurProductsAreHandKnitted} linkText={TEXT.readMore}
                                             linkUrl={knittingUrl}/>

                </div>
                <div className="quickFactsInfo">
                    <QuickFactsInfoLeftSide src={shipped_64}/>
                    <QuickFactsInfoRightSide text={TEXT.greenDelivery} linkText={TEXT.readMore}
                                             linkUrl={greenDeliveryUrl}/>

                </div>
                <div className="quickFactsInfo">
                    <QuickFactsInfoLeftSide src={planet_earth_64}/>
                    <QuickFactsInfoRightSide text={TEXT.forPeopleAndPlanet} linkText={TEXT.readMore}
                                             linkUrl={peopleAndPlanetUrl}/>
                </div>


            </div>

        </>

    )
}

export default QuickFacts
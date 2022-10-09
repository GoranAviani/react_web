import React from 'react'
import './QuickFacts.css'
import {sheep_color_64, knitting_color_64, shipped_color_64, planet_earth_color_64} from "../../static/icons/icons";

const QuickFacts = () => {

    return (
        <div className="quickFacts">
            <div className="quickFactsInfo">
                <img src={sheep_color_64}/>
            </div>
            <div>
                <img src={knitting_color_64}/>

            </div>
            <div>
                <img src={shipped_color_64}/>
            </div>
            <div>
                <img src={planet_earth_64}/>
            </div>


        </div>
    )
}

export default QuickFacts
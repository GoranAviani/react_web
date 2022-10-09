import React from 'react'
import './QuickFacts.css'
import {sheep_64, wool_64, shipped_64} from "../../static/icons/icons";

const QuickFacts = () => {

    return (
        <div className="quickFacts">
            <div className="quickFactsInfo">
                <img src={sheep_64}/>
            </div>
            <div>
                <img src={wool_64}/>

            </div>
            <div>
                <img src={shipped_64}/>
            </div>
            <div>
                a
            </div>


        </div>
    )
}

export default QuickFacts
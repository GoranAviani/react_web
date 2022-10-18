import React from "react";
import './Footer.css'
import Typography from "@mui/material/Typography";
import Links from "./partials/Links";
import {aboutCompanyFooterLinks, yourBenefitsFooterLinks, helpFooterLinks} from "../../Route_urls";
import {facebook_16} from "../../static/icons/icons";
import Spacer from "../Spacer";

const TEXT = {
    aboutWool: "About wool",
    benefits: "Benefits",
    help: "Help",
}
const Footer = () => {
    return (
        <div className="Footer">
            <div className='SiteLinks'>
                <div>
                    <div className='Header'>
                        <Typography sx={{fontWeight: 700}}>
                            {TEXT.aboutWool}
                        </Typography>
                    </div>
                    <Links linksArray={aboutCompanyFooterLinks}/>
                </div>
                <div>
                    <div className='Header'>
                        <Typography sx={{fontWeight: 700}}>
                            Benefits
                        </Typography>
                    </div>
                    <Links linksArray={yourBenefitsFooterLinks}/>
                </div>
                <div>
                    <div className='Header'>
                        <Typography sx={{fontWeight: 700}}>
                            Help
                        </Typography>
                    </div>
                    <Links linksArray={helpFooterLinks}/>
                </div>
            </div>
            <div className='PaymentMethods'>
                payment methods: a b c d
            </div>
            <div className='SiteDescription'>
                this webpage is build using and for...
                Read more
            </div>
            <div className='OurLogo'>
                wolly logo
            </div>
            <Spacer axis="vertical" size={25}/>

            <div className='OurSocialMedia'>
                <img src={facebook_16}/>
                <img src={facebook_16}/>
                <img src={facebook_16}/>
            </div>
            <Spacer axis="vertical" size={25}/>

            <div className='OurCountry'>
                Sweden | kr.
            </div>
        </div>

    )
}

export default Footer
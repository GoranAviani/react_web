import React from "react";
import './Footer.css'
import Typography from "@mui/material/Typography";
import Links from "./partials/Links";
import {aboutCompanyFooterLinks, yourBenefitsFooterLinks, helpFooterLinks} from "../../Route_urls";

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
                        <Typography variant='h6'>
                            {TEXT.aboutWool}
                        </Typography>
                    </div>
                    <Links linksArray={aboutCompanyFooterLinks}/>
                </div>
                <div>
                    <div className='Header'>
                        <Typography variant='h6'>
                            Benefits
                        </Typography>
                    </div>
                    <Links linksArray={yourBenefitsFooterLinks}/>
                </div>
                <div>
                    <div className='Header'>
                        <Typography variant='h6'>
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
            <div className='OurSocialMedia'>
                Social media 1 2 3
            </div>
            <div className='OurCountry'>
                Sweden
            </div>
        </div>

    )
}

export default Footer
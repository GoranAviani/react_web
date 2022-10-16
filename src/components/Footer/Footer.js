import React from "react";
import Link from "@mui/material/Link";
import './Footer.css'
import Typography from "@mui/material/Typography";
import Links from "./partials/Links";
import {aboutCompanyFooterLinks, yourBenefitsFooterLinks} from "../../Route_urls";

const Footer = () => {
    return (
        <div className="Footer">
            <div className='SiteLinks'>
                <div>
                    <div className='Header'>
                        <Typography variant='h6'>
                            about wolly
                        </Typography>
                    </div>
                    <Links linksArray={aboutCompanyFooterLinks}/>
                </div>
                <div>
                    <div className='Header'>
                        <Typography variant='h6'>
                            your benefits
                        </Typography>
                    </div>
                    <Links linksArray={yourBenefitsFooterLinks}/>
                </div>
                <div>
                    <div className='Header'>
                        <Typography variant='h6'>
                            help
                        </Typography>
                    </div>
                    <Links linksArray={aboutCompanyFooterLinks}/>
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
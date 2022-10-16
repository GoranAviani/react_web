import React from "react";
import Link from "@mui/material/Link";
import './Footer.css'
import Typography from "@mui/material/Typography";
import Links from "./partials/Links";
import {aboutCompanyFooterLinks} from "../../Route_urls";

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
                        <Links linksArray={aboutCompanyFooterLinks}/>
                </div>
                <div>
                    <div className='Header'>
                        <Typography variant='h6'>
                            help
                        </Typography>
                    </div>
                    <div className='Links'>
                        <Link color="#000"
                              underline="none"
                              href="/credits"
                        >
                            Credits
                        </Link>
                        <Link color="#000"
                              underline="none"
                              href="/credits"
                        >
                            Credits
                        </Link>
                        <Link color="#000"
                              underline="none"
                              href="/credits"
                        >
                            Credits
                        </Link>
                    </div>
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
            <div className='SocialMedia'>
                Social media 1 2 3
            </div>
            <div className='CountryInfo'>
                Sweden
            </div>
        </div>

    )
}

export default Footer
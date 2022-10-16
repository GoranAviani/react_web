import React from "react";
import Link from "@mui/material/Link";
import './Footer.css'

const Footer = () => {

    return (
        <div className="Footer">
            <div className='SiteLinks'>
                <div>
                    about wolly
                    <Link color="#000"
                          underline="none"
                          href="/credits"
                    >
                        Credits
                    </Link>
                </div>
                <div>
                    your benefits
                </div>
                <div>
                    help
                </div>
            </div>
            <div className='PaymentMethods'>
                a b c d
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
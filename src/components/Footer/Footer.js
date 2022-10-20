import React, {useEffect, useState} from "react";
import './Footer.css'
import Typography from "@mui/material/Typography";
import Links from "./partials/Links";
import {aboutCompanyFooterLinks, yourBenefitsFooterLinks, helpFooterLinks} from "../../Route_urls";
import {facebook_16} from "../../static/icons/icons";
import Spacer from "../Spacer";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import useWindowDimensions from "../hooks/WindowDimension/useWindowDimensions";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const TEXT = {
    aboutWool: "About wool",
    benefits: "Benefits",
    help: "Help",
}
const Footer = () => {
    const [showAboutWoolMobileHeader, setShowAboutWoolMobileHeader] = useState(false)
    const [showBenefitsMobileHeader, setShowBenefitsMobileHeader] = useState(false)
    const [showHelpMobileHeader, setShowHelpMobileHeader] = useState(false)
    const {isMobile} = useWindowDimensions()
    console.log(isMobile)
    useEffect(() => {
        if (!isMobile) {
            setShowAboutWoolMobileHeader(true)
        }
    })

    return (
        <div className="Footer">
            <div className='SiteLinks'>
                <div>
                    <div className='Header'>
                        {isMobile ? <Button onClick={() => {
                            setShowAboutWoolMobileHeader(!showAboutWoolMobileHeader)
                        }} endIcon={showAboutWoolMobileHeader ? <RemoveIcon/> : <AddIcon/>}>
                            {TEXT.aboutWool}
                        </Button> : <Typography sx={{fontWeight: 700}}>
                            {TEXT.aboutWool}
                        </Typography>
                        }
                    </div>
                    {isMobile && showAboutWoolMobileHeader &&
                        <Links linksArray={aboutCompanyFooterLinks}/>}
                </div>
                <div>
                    <div className='Header'>
                        {isMobile ? <Button onClick={() => {
                            setShowBenefitsMobileHeader(!showBenefitsMobileHeader)
                        }} endIcon={<SendIcon/>}>
                            {TEXT.benefits}
                        </Button> : <Typography sx={{fontWeight: 700}}>
                            {TEXT.benefits}
                        </Typography>
                        }
                    </div>
                    {isMobile && showBenefitsMobileHeader &&
                        <Links linksArray={yourBenefitsFooterLinks}/>}


                </div>
                <div>

                    <div className='Header'>
                        {isMobile ? <Button onClick={() => {
                            setShowHelpMobileHeader(!showHelpMobileHeader)
                        }} endIcon={<SendIcon/>}>
                            {TEXT.help}
                        </Button> : <Typography sx={{fontWeight: 700}}>
                            {TEXT.help}
                        </Typography>
                        }
                    </div>
                    {isMobile && showHelpMobileHeader &&
                        <Links linksArray={helpFooterLinks}/>}


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
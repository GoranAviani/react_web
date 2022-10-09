import React from "react";
import Link from "@mui/material/Link";
import './Footer.css'

const Footer = () => {

    return (
        <div className="Footer">
            this is footer
            <Link color="#000"
                  underline="none"
                  href="/credits"
            >
                Credits
            </Link>
        </div>
    )
}

export default Footer
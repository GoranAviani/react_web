import React from "react";
import Link from "@mui/material/Link";


const Footer = () => {

    return (
        <div>
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
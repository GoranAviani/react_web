import React from "react";
import Credits from "../Credits/Credits";
import Link from "@mui/material/Link";


const Footer = () => {

    return (
        <div>
            this is footer
            <Link color="#000"
                  href="/credits"
            >
                Credits
            </Link>
        </div>
    )
}

export default Footer
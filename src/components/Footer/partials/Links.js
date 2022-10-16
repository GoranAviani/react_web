import React from "react";
import Link from "@mui/material/Link";
import '../Footer.css'

const Links = ({linksArray}) => {

    return (
        <div className='Links'>
            {linksArray.map((link, index) => (<Link color="#000"
                                                    underline="none"
                                                    href={link}
            >
                Credits
            </Link>))}


        </div>


    )

}

export default Links;
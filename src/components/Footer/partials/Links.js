import React from "react";
import Link from "@mui/material/Link";
import '../Footer.css'

const Links = ({linksArray}) => {

    return (
        <div className='Links'>
            {Object.entries(linksArray).map(([name, link], index) => (<Link key={index} color="#000"
                                                                            underline="none"
                                                                            href={link}
            >
                {name}
            </Link>))}


        </div>


    )

}

export default Links;